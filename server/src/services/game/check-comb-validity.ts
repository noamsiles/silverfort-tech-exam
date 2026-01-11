import { Board, Color, Shape } from "../../types/components";

export const shapes: Shape[] = ["circle", "square", "triangle", "diamond"];
export const colors: Color[] = ["red", "green", "blue", "yellow"];

export const isValid = (board: Board, row: number, col: number, shape: Shape, color: Color) => {
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
