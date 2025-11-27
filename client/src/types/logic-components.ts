export type Shape = "circle" | "square" | "triangle" | "diamond";
export type Color = "red" | "green" | "blue" | "yellow";

export type CellData = {
  shape: string;
  color: string;
  cooldown: number;
};

export type Board = CellData[][];

export type GameState = {
  board: Board;
  score: number;
  gameOver: boolean;
}