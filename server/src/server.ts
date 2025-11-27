import app from "./app";
import config from './config/index'

const startServer = async () => {
    await app.listen({ port: config.port }, () => {
        console.log(`Server running on http://localhost:${config.port}`);
      });
}

export default startServer