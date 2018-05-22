import * as express from 'express';
import * as proxy from 'http-proxy-middleware';
import * as compression from 'compression';
import { errorMiddleware, requestMiddleware } from './shared/logging/logger';

const FRONTEND_SERVER_PORT: number =
  (Number.parseInt(process.env.FRONTEND_SERVER_PORT as string));
const NODE_ENV: string | undefined = process.env.NODE_ENV;
const API_SERVER_HOST: string | undefined = process.env.API_SERVER_HOST;

if (!FRONTEND_SERVER_PORT) {
  throw new Error('FRONTEND_SERVER_PORT expected');
}
if (!API_SERVER_HOST) {
  throw new Error('API_SERVER_HOST expected');
}
if (NODE_ENV !== 'development' && NODE_ENV !== 'production') {
  throw new Error('NODE_ENV must be "development" or "production"');
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
