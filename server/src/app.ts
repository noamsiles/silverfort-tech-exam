import fastify from "fastify";
import fastifyWebsocket from "@fastify/websocket";

import logger from "./utils/logger";
import socketConnection from "./routes/socket";

const app = fastify({ loggerInstance: logger })

await app.register(fastifyWebsocket)
await app.register(socketConnection)

await app.ready()

export default app
