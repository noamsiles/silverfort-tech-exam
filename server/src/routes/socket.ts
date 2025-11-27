import { WebSocket } from "@fastify/websocket";
import { FastifyInstance } from "fastify";

import logger from "../utils/logger";

export const clients: Set<WebSocket> = new Set();

const socketConnection = (app: FastifyInstance) => {
    app.get("/ws", { websocket: true }, (connection, _req) => {
      clients.add(connection);
      logger.info("Client connected");
    
      connection.on("message", () => logger.info('Got new message!'));
    
      connection.on("close", () => {
        clients.delete(connection);
        logger.info("Client disconnected");
      });
    });
}

export default socketConnection