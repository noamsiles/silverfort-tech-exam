export type Shape = "circle" | "square" | "triangle" | "diamond";
export type Color = "red" | "green" | "blue" | "yellow";

export interface Cell {
  shape: Shape;
  color: Color;
  cooldown: number;
}

export type Board = Cell[][];

export type GameState = {
  board: Board;
  score: number;
  gameOver: boolean;
}