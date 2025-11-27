import "../styles/Cell.css";

import ShapeRenderer from "./ShapeRenderer";
import type { CellProps } from "../types/props";

const Cell = ({ shape, color }: CellProps) => {
  return (
    <div className="cell">
      <ShapeRenderer shape={shape} color={color} />
    </div>
  );
}

export default Cell;
