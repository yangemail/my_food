'use strict';

module.exports = {
    mongodb: {
        url: 'mongodb://localhost:27017/food_world',
        options: {
            useNewUrlParser: true,
            // autoIndex: false, // Don't build indexes
            // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            // reconnectInterval: 500, // Reconnect every 500ms
            // poolSize: 10, // Maintain up to 10 socket connections
            // If not connected, return errors immediately rather than waiting for reconnect
            // bufferMaxEntries: 0
        },
    },
    facebook: {
        clientID: 'Application Id',
        clientSecret: 'Appliation Secret',
        callbackURL: 'http://localhost:8081/web/oauth/facebook/callback'
    },
    twitter: {
        clientID: '4DZIov7rlkLjXPNu6u7CFqPPK',
        clientSecret: 'BEIzkLOVIpzTX4xIrlAqPlLTx40hS9j6GnKUUHNwQpMRNfId5X',
        callbackURL: 'http://localhost:8081/web/oauth/twitter/callback'
    },
    google: {
        clientID: '193467439695-8p7095sq2gspe6e2a8925n5nm29n21v6.apps.googleusercontent.com',
        clientSecret: '5pryG7GDj1XXgrv8w4p36N9U',
        callbackURL: 'http://localhost:8081/web/oauth/google/callback'
    },
    sessionSecret: 'developmentSessionSecret',
    Redis: {
        Active: false,
        Host: "127.0.0.1",
        Port: 6379
    },
    www: {
        port: 8081
    }
}