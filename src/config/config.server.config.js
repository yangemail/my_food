'use strict';

module.exports = require('./env/' + process.env.NODE_ENV + '.server.config.env' + '.js');