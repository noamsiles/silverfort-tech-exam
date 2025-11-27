import "../styles/Board.css";
import type { BoardProps } from "../types/props";
import Cell from "./Cell";

const Board = ({ board, sendMessage }: BoardProps) => {
  return (
    <div className="board">
      {board.map((row, r) => (
        <div key={r} className="board-row">
          {row.map((cell, c) => (
            <Cell
              key={`${r}-${c}`}
              shape={cell.shape}
              color={cell.color}
              row={r}
              col={c}
              sendMessage={sendMessage}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board
