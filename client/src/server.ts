import * as express from 'express';
import * as proxy from 'http-proxy-middleware';
import * as compression from 'compression';
import { errorMiddleware, requestMiddleware } from './shared/logging/logger';

const FRONTEND_SERVER_PORT: number =
  (Number.parseInt(process.env.FRONTEND_SERVER_PORT as string));
const SERVER_ENV: string | undefined = process.env.SERVER_ENV;
const API_SERVER_HOST: string | undefined = process.env.API_SERVER_HOST;

if (!FRONTEND_SERVER_PORT) {
  throw new Error('FRONTEND_SERVER_PORT expected');
}
if (!API_SERVER_HOST) {
  throw new Error('API_SERVER_HOST expected');
}
if (SERVER_ENV !== 'dev' && SERVER_ENV !== 'prod') {
  throw new Error('SERVER_ENV must be "dev" or "prod"');
}

/*
 * A frontend server that proxies /api requests to the api server,
 * otherwise serves static assets.
 */
const app = express();

/* pre-routes middleware */
app.use(compression());
app.use(requestMiddleware);

/* routes */
app.use(express.static('public'));
app.use('/api', proxy({ target: API_SERVER_HOST, changeOrigin: true }));

/* post-routes middleware */
app.use(errorMiddleware);

/* start */
app.listen(FRONTEND_SERVER_PORT);
