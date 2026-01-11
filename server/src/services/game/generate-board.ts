import { Board, Shape, Color } from "../../types/components";
import { colors, isValid, shapes } from "./check-comb-validity";

const ROWS = 3;
const COLS = 6;

export const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export const generateBoard = (): Board => {
  const board: Board = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      shape: getRandom(shapes) as Shape,
      color: getRandom(colors) as Color,
      cooldown: 0,
    }))
  );

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      let shape: Shape;
      let color: Color;

      do {
        shape = getRandom(shapes) as Shape;
        color = getRandom(colors) as Color;
      } while (!isValid(board, r, c, shape, color));

      board[r]![c] = { shape, color, cooldown: 0 };
    }
  }

  return board;
}
