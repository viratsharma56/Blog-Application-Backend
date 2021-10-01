const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    categories: {
        type: String,
        required: false,
        default: 'general'
    },
    createdDate: {
        type: Date,
        required: true
    }
})

const post = mongoose.model('post', postSchema);
post.createIndexes();
module.exports = post;