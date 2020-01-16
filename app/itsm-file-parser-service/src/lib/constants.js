const config = require('./../config');
const pino = require('pino');
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
var cron = require('node-cron');
module.exports = Object.freeze({
    config: config,
    pino: pino,
    cron: cron,
    logger: logger,
});
