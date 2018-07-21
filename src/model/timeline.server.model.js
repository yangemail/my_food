'use strict';

// 用户动作追踪

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

const TimelineSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    actionName: {
        type: String,
        enum: ['登陆', '发布菜谱', '其他']
    },
    description: String,
    scoreUp: String,
    scoreDown: String,
    ipAddress: String,
});

mongoose.model('Timeline', TimelineSchema);