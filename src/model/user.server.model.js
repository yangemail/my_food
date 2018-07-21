'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , crypto = require('crypto');

// If set timestamps, mongoose assigns "createdAt" and "updatedAt" fields to your schema, the type assigned is Date.

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    // 昵称
    nickname: {
        type: String,
        index: true,
    },
    username: {
        type: String,
        unique: true,
        required: '用户名不能为空',
        trim: true,
    },
    avatar: String,
    score: Number,
    // 性别
    gender: {
        type: String,
        enum: ['男', '女', '不想说']
    },
    // 生日
    dateOfBirth: Date,
    // 电子邮箱
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    // 密码
    password: {
        type: String,
        validate: [(password) => {
            return password && password.length > 3;
        }, '密码需要多于3位']
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {},
    // 管理员
    isAdmin: {
        type: Boolean,
        default: false,
        require: true
    },
    // 禁用
    isBlocked: {
        type: Boolean,
        default: false
    },
    // 菜谱
    recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
    // 关注（发送新菜谱）
    attention: [{type: Schema.Types.ObjectId, ref: 'User'}],
    // 好友（增加的好友）
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
    // 菜单
    bookmark: [{
        type: Schema.Types.ObjectId,
        ref: 'Bookmark'
    }],
    // 美食成品
    work: [{
        type: Schema.Types.ObjectId,
        ref: 'Work'
    }],
    // 积分/动作/历史
    timeline: {
        type: Schema.Types.ObjectId,
        ref: 'Timeline'
    }
});

UserSchema.virtual('fullname').get(function () {
    return this.firstname + this.lastname;
}).set(function (fullname) {
    const splitName = fullname.split(' ');
    this.firstname = splitName[0] || '';
    this.lastname = splitName[1] || '';
});

UserSchema.methods.hashPassword = function (password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha1').toString('base64');
};

UserSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

UserSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueUsername = function (username, suffix, callback) {
    var possibleUsername = username + (suffix || '');
    this.findOne({
        username: possibleUsername
    }, (err, user) => {
        if (!err) {
            if (!user) {
                callback(possibleUsername);
            } else {
                return this.findUniqueUsername(username, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};

UserSchema.set('toJSON', {
    getters: true,
    virtual: true
});

mongoose.model('User', UserSchema);