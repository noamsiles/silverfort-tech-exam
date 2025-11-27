import { Board, Shape, Color } from "../../types/components";

const shapes: Shape[] = ["circle", "square", "triangle", "diamond"];
const colors: Color[] = ["red", "green", "blue", "yellow"];

const ROWS = 3;
const COLS = 6;

const randomShape = (): Shape => {
  return shapes[Math.floor(Math.random() * shapes.length)]!;
}

const randomColor = (): Color => {
  return colors[Math.floor(Math.random() * colors.length)]!;
}

const isValid = (board: Board, row: number, col: number, shape: Shape, color: Color) => {
  const adjacent = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
  ];

  for (const [r, c] of adjacent) {
    if (!board[r!] || !board[r!]![c!]) continue;

    const neighbor = board[r!]![c!];

    if (neighbor!.shape === shape) return false;
    if (neighbor!.color === color) return false;
  }

  return true;
}

export const generateBoard = (): Board => {
  const board: Board = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      shape: "circle",
      color: "red",
      cooldown: 0,
    }))
  );

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      let shape: Shape;
      let color: Color;

      do {
        shape = randomShape();
        color = randomColor();
      } while (!isValid(board, r, c, shape, color));

      board[r]![c] = { shape, color, cooldown: 0 };
    }
  }

  return board;
}
