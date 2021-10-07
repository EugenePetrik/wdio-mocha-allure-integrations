import path from 'path';
import winston from 'winston';

export const logger = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({
      filename: path.join(__dirname, '..', '..', 'logs', 'combined.log'),
      level: 'debug',
    }),
  ],
  format: winston.format.combine(winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  winston.format.simple()),
});
