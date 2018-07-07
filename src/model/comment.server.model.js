'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// If set timestamps, mongoose assigns createdAt and updatedAt fields to your schema, the type assigned is Date.

const commentSchema = new Schema({
    post: {
        body: String,
        score: Number,
        author: Schema.Types.ObjectId,
        date: Date,
    },
    reply: {
        body: String,
        author: Schema.Types.ObjectId,
        date: Date,
    }
})