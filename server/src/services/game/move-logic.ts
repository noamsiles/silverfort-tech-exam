import { Board, Shape, Color } from "../../types/components";
import { colors, isValid, shapes } from "./check-comb-validity";
import { getRandom } from "./generate-board";
import { gameState } from "./state";

export const findValidRandomCombination = (board: Board, row: number, col: number) => {
  let shape = getRandom(shapes) as Shape
  let color = getRandom(colors) as Color

  while (board[row]![col]?.shape === shape) {
    shape = getRandom(shapes) as Shape
  }

  while (board[row]![col]?.color === color) {
    color = getRandom(colors) as Color
  }
  
  const chosenGeometry = {shape, color} 
  
  if (!isValid(board, row, col, shape, color)) gameState.gameOver = true

  return chosenGeometry 
}