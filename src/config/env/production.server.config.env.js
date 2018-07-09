'use strict';

module.exports = {
    database: 'mongodb://localhost:27017/food_world',
    database_options: {
        useNewUrlParser: true,
        autoIndex: false, // Don't build indexes
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0
    },
    sessionSecret: 'developmentSessionSecret',
    Redis: {
        Active: false,
        Host: "127.0.0.1",
        Port: 6379
    }
}