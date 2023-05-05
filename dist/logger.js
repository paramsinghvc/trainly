"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganMiddleware = exports.logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const morgan_1 = __importDefault(require("morgan"));
const winston_1 = require("winston");
const winston_loki_1 = __importDefault(require("winston-loki"));
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
    return isDevelopment ? 'debug' : 'info';
};
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};
(0, winston_1.addColors)(colors);
exports.logger = (0, winston_1.createLogger)({
    level: level(),
    levels,
    format: winston_1.format.combine(winston_1.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), winston_1.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}` + (info.splat !== undefined ? `${info.splat}` : ' ')), winston_1.format.colorize({
        all: true,
    })),
    transports: [
        new winston_loki_1.default({
            host: 'https://logs-prod-006.grafana.net',
            basicAuth: process.env.LOKI,
            labels: { job: 'Trainly' },
            level: 'debug',
            batching: false,
            handleExceptions: true,
            handleRejections: true,
        }),
        // new transports.File({
        //   level: 'debug',
        //   filename: './logs/all-logs.log',
        //   handleExceptions: true,
        //   maxsize: 5242880, //5MB
        //   maxFiles: 5,
        // }),
        new winston_1.transports.Console({
            level: 'debug',
            handleExceptions: true,
        }),
    ],
    exitOnError: false,
});
exports.morganMiddleware = (0, morgan_1.default)(function (tokens, req, res) {
    return [
        '\n',
        chalk_1.default.hex('#ff4757').bold('🍄  Morgan --> '),
        chalk_1.default.hex('#34ace0').bold(tokens.method(req, res)),
        chalk_1.default.hex('#ffb142').bold(tokens.status(req, res)),
        chalk_1.default.hex('#ff5252').bold(tokens.url(req, res)),
        chalk_1.default.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
        chalk_1.default.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
        chalk_1.default.yellow(tokens['remote-addr'](req, res)),
        chalk_1.default.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
        '\n',
    ].join(' ');
}, {
// stream: {
//   write: (message) => winstonLogger.http(message),
// },
});
//# sourceMappingURL=logger.js.map