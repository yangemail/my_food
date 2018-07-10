'use strict';

const config = require('../config/config.server.config');

// 加载数据库模块
const mongooseServerBootstrap = require('mongoose');

module.exports = function () {
    // use custom mongodb url or localhost
    mongooseServerBootstrap.connect(config.mongodb.url, config.mongodb.options);

    const db = mongooseServerBootstrap.connection;

    db.once('open', function () {
        // we're connected!
        console.log('Mongodb running at ' + config.mongodb.url);
    });

    db.on('error', function (err) {
        console.error.bind(console, 'MongoDB连接错误: ' + err);
        process.exit(1);
    });

    // Models
    // require('../model/comment.server.model');
    // require('../model/cookinfo.server.model');
    require('../model/recipe.server.model');
    // require('../model/stepdetail.server.model');
    require('../model/user.server.model');

    return db;
};