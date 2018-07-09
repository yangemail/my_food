'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// If set timestamps, mongoose assigns "createdAt" and "updatedAt" fields to your schema, the type assigned is Date.

const userSchema = new Schema({
    // 用户名 (电子邮箱）
    username: String,
    // 密码
    password: String,
    // 昵称
    nickname: String,
    // 性别
    gender: {
        type: String,
        enum: ['男', '女', '不想说']
    },
    // 生日
    date_of_birth: {
        type: Date,
    },
    // 管理员
    isAdmin: {
        type: Boolean,
        default: false
    },
    // 注册日期
    register_date: Date,
    // 禁用
    is_blocked: {
        type: Boolean,
        default: false
    },
    // 隐藏
    hidden: {
        type: Boolean,
        default: false
    },
    // 菜谱
    recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
    // 关注（发送新菜谱）
    attention: [{type: Schema.Types.ObjectId, ref: 'User'}],
    // 好友（增加的好友）
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
});

module.exports = mongoose.model('User', userSchema);