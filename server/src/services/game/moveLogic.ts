import { Board, Shape, Color } from "../../types/components";

const shapes: Shape[] = ["circle", "square", "triangle", "diamond"];
const colors: Color[] = ["red", "green", "blue", "yellow"];

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

export const findValidRandomCombination = (board: Board, row: number, col: number) => {
  const valid: { shape: Shape; color: Color }[] = [];

  for (const shape of shapes) {
    for (const color of colors) {
      if (isValid(board, row, col, shape, color)) {
        valid.push({ shape, color });
      }
    }
  }

  if (valid.length === 0) return null;

  return valid[Math.floor(Math.random() * valid.length)];
}
