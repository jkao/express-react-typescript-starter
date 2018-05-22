import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as homeController from './controllers/home';
import {
  errorMiddleware,
  logger,
  requestMiddleware,
} from './shared/logging/logger';

const API_SERVER_PORT: number = (Number.parseInt(process.env.API_SERVER_PORT as string));
const NODE_ENV: string | undefined = process.env.NODE_ENV;

if (!API_SERVER_PORT) {
  throw new Error('API_SERVER_PORT expected');
}
if (NODE_ENV !== 'development' && NODE_ENV !== 'production') {
  throw new Error('NODE_ENV must be "development" or "production"');
}

/*
 * A basic API server
 */
const app = express();

/* Pre-routes middleware */
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestMiddleware);

/* Routes */
app.get('/api', homeController.index);

/* Post-routes middleware */
app.use(errorMiddleware);

/* start */
app.listen(
  API_SERVER_PORT,
  () => {
    logger.info(
      'App is running at http://localhost:%d in %s mode\n',
      API_SERVER_PORT,
      NODE_ENV,
    );
    logger.info('Press CTRL-C to stop\n');
  },
);
