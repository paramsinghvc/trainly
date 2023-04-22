import chalk from 'chalk';
import morgan from 'morgan';
import { createLogger, format, transports, addColors } from 'winston';
import LokiTransport from 'winston-loki';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

addColors(colors);

export const logger = createLogger({
  level: level(),
  levels,
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}` + (info.splat !== undefined ? `${info.splat}` : ' ')
    ),
    format.colorize({
      all: true,
    })
  ),
  transports: [
    new LokiTransport({
      host: 'https://logs-prod-006.grafana.net',
      basicAuth: process.env.LOKI,
      labels: { job: 'Trainly' },
    }),
    new transports.File({
      level: 'debug',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
    }),
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
    }),
  ],
  exitOnError: false,
});

export const morganMiddleware = morgan(
  function (tokens, req, res) {
    return [
      '\n',
      chalk.hex('#ff4757').bold('🍄  Morgan --> '),
      chalk.hex('#34ace0').bold(tokens.method(req, res)),
      chalk.hex('#ffb142').bold(tokens.status(req, res)),
      chalk.hex('#ff5252').bold(tokens.url(req, res)),
      chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
      chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
      chalk.yellow(tokens['remote-addr'](req, res)),
      chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
      '\n',
    ].join(' ');
  },
  {
    // stream: {
    //   write: (message) => winstonLogger.http(message),
    // },
  }
);
