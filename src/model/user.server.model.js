const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    register_date: Date,
    is_blocked: {
        type: Boolean,
        default: false
    },
    hidden: {
        type: Boolean,
        default: false
    },
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
    recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
});

module.exports = mongoose.model('User', userSchema);