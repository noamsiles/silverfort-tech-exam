import "../styles/Board.css";
import Cell from "./Cell";
import type { BoardProps } from "../types/props";

const Board = ({ board }: BoardProps) => {
  return (
    <div className="board">
      {board.map((row, r) => (
        <div key={r} className="board-row">
          {row.map((cell, c) => (
            <Cell
              key={`${r}-${c}`}
              shape={cell.shape}
              color={cell.color}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
