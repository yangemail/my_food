'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// If set timestamps, mongoose assigns "createdAt" and "updatedAt" fields to your schema, the type assigned is Date.

const cookInfoSchema = new Schema({
    craftwork: {
        type: String,
        enum: ['煎', '蒸', '煮', '炖', '红烧', '炸', '卤', '干锅', '火锅', '泡', '烤', '免考']
    },
    flavor: {
        type: String,
        enum: ['咸鲜味', '甜味', '酱香味', '奶香味', '甜味']
    },
    difficulty: {
        type: Number,
        min: 0,
        max: 10
    },
    number_of_people: {
        type: Number,
        min: 0,
        max: 10
    },
    prepare_time: {
        type: Number,
        min: 0
    },
    cook_time: {
        type: Number,
        min: 0
    }
});