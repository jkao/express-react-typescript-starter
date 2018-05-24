import * as winston from 'winston';
import * as winstonMiddleware from 'express-winston';

const production = process.env.NODE_ENV === 'production';
const jsonFormatter = (obj: Object) => JSON.stringify(obj);
const consoleTransport =
  new (winston.transports.Console)({
    json: true,
    colorize: true,
    handleExceptions: true,
    stringify: jsonFormatter,
  })

export const logger = new (winston.Logger)({
  level: production ? 'info' : 'silly',
  transports: [consoleTransport],
  exitOnError: false,
});

export const requestMiddleware =
 winstonMiddleware.logger({
    transports: [consoleTransport],
 });
export const errorMiddleware =
 winstonMiddleware.errorLogger({
    transports: [consoleTransport]
 });
