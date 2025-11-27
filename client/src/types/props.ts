import type { CellData } from "./logic-components";

export type BoardProps = {
    board: CellData[][];
    sendMessage: (msg: any) => void;
  };

export type CellProps = {
    shape: string;
    color: string;
    row: number;
    col: number;
    sendMessage: (msg: any) => void;
  };

export type ScoreDisplayProps = {
    score: number;
    gameOver: boolean;
  };

export type ShapeRendererProps = {
    shape: string;
    color: string;
  }