'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// If set timestamps, mongoose assigns "createdAt" and "updatedAt" fields to your schema, the type assigned is Date.

const stepDetailSchema = new Schema({
    summary: String,
    description: String,
    steps: {
        type: [{
                word: String,
                image_path: String,
                sequence: Number
            }]
    },
    complete_image_path: [String],
    tips: String,
    conclusion: String,
});