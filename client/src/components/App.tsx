import '../styles/App.css'

import ScoreDisplay from "./ScoreDisplay";
import Board from "./Board";

const App = () => {
  const score = 1
  const gameOver = false
  const board = [
    [
      { shape: "circle", color: "red" },
      { shape: "square", color: "blue" },
      { shape: "diamond", color: "yellow" },
      { shape: "triangle", color: "green" },
      { shape: "diamond", color: "yellow" },
      { shape: "circle", color: "red" },
    ],
    [
      { shape: "triangle", color: "green" },
      { shape: "diamond", color: "yellow" },
      { shape: "circle", color: "red" },
      { shape: "triangle", color: "green" },
      { shape: "diamond", color: "yellow" },
      { shape: "circle", color: "red" },
    ],
    [
      { shape: "circle", color: "red" },
      { shape: "square", color: "blue" },
      { shape: "diamond", color: "yellow" },
      { shape: "triangle", color: "green" },
      { shape: "diamond", color: "yellow" },
      { shape: "circle", color: "red" },
    ],
  ];

  return (
    <div className="app-container">
      <ScoreDisplay score={score} gameOver={gameOver} />

      <Board board={board} />

      {gameOver && <div className="game-over-banner">GAME OVER</div>}
    </div>
  );
}

export default App