import "../styles/Cell.css";
import type { CellProps } from "../src/types/props";

import ShapeRenderer from "./ShapeRenderer";

const Cell = ({ shape, color, row, col, sendMessage }: CellProps) => {
  const handleClick = () => {
    console.log("CELL CLICKED:", row, col);

    sendMessage({
      type: "cell:click",
      row,
      col,
    });
  };

  return (
    <div className="cell" onClick={handleClick}>
      <ShapeRenderer shape={shape} color={color} />
    </div>
  );
}

export default Cell;
