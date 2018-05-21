import * as express from 'express';
import * as proxy from 'http-proxy-middleware';

const SERVER_PORT: number | undefined = (Number.parseInt(<string> process.env['SERVER_PORT']));
const API_SERVER_PORT: number | undefined = (Number.parseInt(<string> process.env['API_SERVER_PORT']));
const SERVER_ENV: string | undefined = process.env['SERVER_ENV'];

if (!SERVER_PORT) {
  throw 'SERVER_PORT expected'
}
if (!API_SERVER_PORT) {
  throw 'API_SERVER_PORT expected'
}
if (SERVER_ENV !== 'dev' && SERVER_ENV !== 'prod') {
  throw 'SERVER_ENV must be "dev" or "prod"'
}

/*
 * A frontend server that proxies /api requests to the api server,
 * otherwise serves static assets.
 */
const app = express();

/* routes */
app.use(express.static('public'));
app.use('/api', proxy({ target: `http://localhost:${API_SERVER_PORT}`, changeOrigin: true }));

app.listen(SERVER_PORT);
