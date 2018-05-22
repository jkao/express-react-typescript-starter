import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as homeController from './controllers/home';

const app = express();

/* Middleware */
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.get('/api', homeController.index);

export default app;
