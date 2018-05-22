import * as winston from 'winston';
import * as winstonMiddleware from 'express-winston';

const production = process.env.NODE_ENV === 'production';
const consoleTransport =
  new (winston.transports.Console)({
    json: true,
    colorize: true,
    prettyPrint: !production,
    handleExceptions: true,
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