import fastify from "fastify";
import logger from "./utils/logger";

const app = fastify({ loggerInstance: logger })

await app.ready()

export default app
