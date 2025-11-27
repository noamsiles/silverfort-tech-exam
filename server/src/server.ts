import app from "./app";
import config from './config/index'
import logger from "./utils/logger";

const startServer = async () => {
    await app.listen({ port: config.port }, () => {
        logger.info(`Server running on http://localhost:${config.port}`);
      });
}

export default startServer