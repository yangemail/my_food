'use strict';

module.exports = {
    database: 'mongodb://localhost:27017/food_world',
    sessionSecret: 'developmentSessionSecret',
    Redis: {
        Active: false,
        Host: "127.0.0.1",
        Port: 6379
    }
}