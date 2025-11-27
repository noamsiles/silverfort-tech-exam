import { WebSocket } from "@fastify/websocket";
import { FastifyInstance } from "fastify";

import logger from "../utils/logger";
import handleReq from "../services/handle-message";
import { gameState } from "../services/game/state";

export const clients: Set<WebSocket> = new Set();

const socketConnection = (app: FastifyInstance) => {
  app.get("/ws", { websocket: true }, (connection, _req) => {
    clients.add(connection);
    logger.info("Client connected");

    for (const client of clients) {
      client.send(JSON.stringify({
        type: "game:update",
        data: gameState
      }));
    }

    connection.on("message", (data: Buffer) => handleReq(data));

    connection.on("close", () => {
      clients.delete(connection);
      logger.info("Client disconnected");
    });
  });
}

export default socketConnection