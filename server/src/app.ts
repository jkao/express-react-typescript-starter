import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from "body-parser";

import * as homeController from './controllers/home';

const app = express();

/* Middleware */
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.get('/', homeController.index);

export default app;
