import "../styles/ScoreDisplay.css";
import type { ScoreDisplayProps } from "../types/props";

export default function ScoreDisplay({ score, gameOver }: ScoreDisplayProps) {
  return (
    <div className="score-display">
      <span className="score-label">Score:</span>
      <span className="score-value">{score}</span>

      {gameOver && <span className="game-over-text">Game Over</span>}
    </div>
  );
}
