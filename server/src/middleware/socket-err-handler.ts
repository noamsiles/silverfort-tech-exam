import type { WebSocket } from "@fastify/websocket";

import logger from "../utils/logger"

const socketErrorHandler = (err: Error, socket: WebSocket) => {
    logger.error (err, 'Websocket init failed:')
    socket.terminate()
}

export default socketErrorHandler