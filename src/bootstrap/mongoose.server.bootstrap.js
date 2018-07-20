'use strict';

const config = require('../config/config.server.config');

// 加载数据库模块
const mongoose = require('mongoose');

module.exports = function () {
    // use custom mongodb url or localhost
    mongoose.connect(config.mongodb.url, config.mongodb.options);

    const db = mongoose.connection;

    // Add plugin
    mongoose.plugin(require('../model/plugin/updatedAt.server.model.plugin'));

    db.once('open', function () {
        // we're connected!
        console.log('Mongodb running at ' + config.mongodb.url);
    });

    db.on('error', function (err) {
        console.error.bind(console, 'MongoDB连接错误: ' + err);
        process.exit(1);
    });

    // Models
    require('../model/recipe.server.model');
    require('../model/user.server.model');
    require('../model/ingredient.server.model');

    return db;
};