'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// If set timestamps, mongoose assigns createdAt and updatedAt fields to your schema, the type assigned is Date.

const commentSchema = new Schema({
    // 食谱 (ref)
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    },


    // 评论
    // 评论人
    post_author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // 星级
    post_stars: Number,
    // 评论类型
    post_type: {
        type: String,
        require: true,
        enum: ['随意说说','问题求解'],
        default: '随意说说'
    },
    // 评论
    post_body: String,
    // 评论日期
    post_date: Date,
    // 评论图片
    post_completed_sample_image_path: [String],
    // 评论赞同
    post_vote: Number,

    // 回复
    // 回复作者
    reply_author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // 回复内容
    reply_body: String,
    // 回复日期
    reply_date: Date,
    // 回复赞同
    reply_vote: Number,

});

module.exports = mongoose.model('Comment', commentSchema);