import '../styles/App.css'

import ScoreDisplay from "./ScoreDisplay";
import Board from "./Board";
import { useEffect, useRef, useState } from 'react';
import type { GameState } from '../types/logic-components';

const App = () => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [connected, setConnected] = useState(false);

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000/ws");
    ws.current = socket;

    socket.onopen = () => {
      console.log("WS OPEN");
      setConnected(true);
    };

    socket.onmessage = (event) => {
      console.log("WS RAW:", event.data);

      try {
        const msg = JSON.parse(event.data);

        if (msg.type === "game:update") {
          console.log("🎯 GAME STATE RECEIVED:", msg.data);
          setGameState(msg.data);
        }
      } catch (err) {
        console.error("❌ Failed to parse WS message:", err);
      }
    };

    socket.onerror = (err) => {
      console.error("WS ERROR", err);
    };

    socket.onclose = () => {
      console.log("WS CLOSED");
      setConnected(false);
    };

    return () => socket.close();
  }, []);

  const sendMessage = (msg: any) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(msg));
    }
  };

  if (!connected || gameState === null) {
    return <div className="app-container">Loading game...</div>;
  }

  return (
    <div className="app-container">
      <ScoreDisplay
        score={gameState.score}
        gameOver={gameState.gameOver}
      />

      <Board
        board={gameState.board}
        sendMessage={sendMessage}
      />

      {gameState.gameOver && (
        <div className="game-over-banner">GAME OVER</div>
      )}
    </div>
  );
}

export default App