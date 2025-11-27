import { Board } from "../../types/components";

export const tickCooldowns = (board: Board) => {
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r]!.length; c++) {
            if (board[r]![c]!.cooldown > 0) {
                board[r]![c]!.cooldown -= 1;
            }
        }
    }
}
