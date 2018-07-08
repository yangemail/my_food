'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// If set timestamps, mongoose assigns createdAt and updatedAt fields to your schema, the type assigned is Date.

const commentSchema = new Schema({
    post: {
        author: Schema.Types.ObjectId,
        type: {
            type: String,
            require: true,
            enum: ['随意说说','问题求解']
        },
        body: String,
        date: Date,
        completed_sample_image_path: [String]
    },
    reply: {
        author: Schema.Types.ObjectId,
        body: String,
        date: Date,
    },
    stars: Number
})