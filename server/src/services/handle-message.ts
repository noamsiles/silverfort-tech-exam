import { tickCooldowns } from "./game/cooldown";
import { findValidRandomCombination } from "./game/moveLogic";
import { gameState } from "./game/state";
import { clients } from "../routes/socket";
import logger from "../utils/logger";

const handleReq = (data: Buffer) => {
  try {
    const msg = JSON.parse(data.toString());

    logger.info("====================================");
    logger.info("📩 NEW WEBSOCKET MESSAGE RECEIVED");
    logger.info(msg, "Raw message:");


    if (msg.type !== "cell:click") return;

    const { row, col } = msg;

    if (gameState.gameOver) return;

    const cell = gameState.board[row]![col];

    if (cell!.cooldown > 0) return;

    const replacement = findValidRandomCombination(gameState.board, row, col);

    if (!replacement) {
      gameState.gameOver = true;
      broadcast("game:update", gameState);
      return;
    }

    // Apply the move
    cell!.shape = replacement.shape;
    cell!.color = replacement.color;

    // Apply cooldown (spec requires 3 turns)
    cell!.cooldown = 3;

    // Reduce cooldown on all cells
    tickCooldowns(gameState.board);

    // Increase score
    gameState.score++;

    // Broadcast new state
    broadcast("game:update", gameState);

  } catch (err) {
    logger.error(err, "❌ Invalid message:");
  }
}

function broadcast(type: string, data: any) {
  const message = JSON.stringify({ type, data });

  for (const client of clients) {
    if (client.readyState === 1) {
      client.send(message);
    }
  }
}

export default handleReq