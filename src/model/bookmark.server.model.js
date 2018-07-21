'use strict';

// 美食菜单
const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

const BookmarkSchema = new Schema({
    name: String,
    description: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    // 菜单评论
    comments: [{
        // 评论人
        commentAuthor: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        // 星级
        commentStars: Number,
        // 评论类型
        commentType: {
            type: String,
            enum: ['闲聊', '提问', '动感', '赞'],
        },
        // 评论
        commentContent: String,
        // 评论日期
        commentCreatedAt: {
            type: Date,
            default: Date.now
        },
        // 评论图片
        commentImagePath: [String],
        // 评论赞同
        commentVoteUp: Number,

        // 回复作者
        replyAuthor: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        // 回复内容
        replyContent: String,
        // 回复日期
        replyCreatedAt: {
            type: Date,
            default: Date.now
        },
        // 回复赞同
        replyVoteUp: Number,
    }],
});

mongoose.model('Bookmark', BookmarkSchema);