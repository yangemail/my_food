'use strict';

const config = require('../config/config.server.config');

// 加载数据库模块
const mongooseServerBootstrap = require('mongoose');

module.exports = function () {
    // use custom mongodb url or localhost

    const options = {
        useNewUrlParser: true,
        // autoIndex: false, // Don't build indexes
        // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        // reconnectInterval: 500, // Reconnect every 500ms
        // poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        // bufferMaxEntries: 0
    };

    // Development
    mongooseServerBootstrap.connect(config.database, options);

    // Production
    // mongoose.connect(config.database, {autoIndex: false});

    const db = mongooseServerBootstrap.connection;

    db.once('open', function () {
        // we're connected!
        console.log('Mongodb running at ' + config.database);
    });

    db.on('error', function (err) {
        console.error.bind(console, 'MongoDB连接错误: ' + err);
        process.exit(1);
    });

    // Models
    require('../model/comment.server.model');
    require('../model/cookinfo.server.model');
    require('../model/recipe.server.model');
    require('../model/stepdetail.server.model');
    require('../model/user.server.model');

    return db;
};