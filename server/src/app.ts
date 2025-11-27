import fastify from "fastify";

const app = fastify({ logger: true })

await app.ready()

export default app
