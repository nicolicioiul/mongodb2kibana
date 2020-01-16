require('rootpath')();
var constants = require('./lib/constants');

const logger = constants.logger;
var cron = require('node-cron');
cron.schedule('* * * * *', () => {
    logger.info('running a task every minute');
});

