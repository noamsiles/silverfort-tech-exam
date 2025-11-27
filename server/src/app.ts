import fastify from "fastify";
import fastifyWebsocket from "@fastify/websocket";

import logger from "./utils/logger";
import socketConnection from "./routes/socket";
import socketErrorHandler from "./middleware/socket-err-handler";

const app = fastify({ loggerInstance: logger })

await app.register(fastifyWebsocket, { errorHandler: socketErrorHandler})
await app.register(socketConnection)

await app.ready()

export default app
