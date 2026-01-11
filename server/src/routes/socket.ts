import { WebSocket } from "@fastify/websocket";
import { FastifyInstance } from "fastify";

import logger from "../utils/logger";
import handleReq, { broadcast } from "../services/handle-message";
import { gameState } from "../services/game/state";

export const clients: Set<WebSocket> = new Set();

const socketConnection = async (app: FastifyInstance) => {
  app.get("/ws", { websocket: true }, (connection, _req) => {
    clients.add(connection);
    logger.info("Client connected");

    broadcast("game:update", gameState);

    connection.on("message", (data: Buffer) => handleReq(data));

    connection.on("close", () => {
      clients.delete(connection);
      logger.info("Client disconnected");
    });
  });
}

export default socketConnection