import { GameState } from "../../types/components";
import { generateBoard } from "./generate-board";

export let gameState: GameState = {
  board: generateBoard(),
  score: 0,
  gameOver: false,
};

export const resetGame = () => {
  gameState = {
    board: generateBoard(),
    score: 0,
    gameOver: false,
  };
};
