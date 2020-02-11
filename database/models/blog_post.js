const mongoose = require('mongoose');
 
const blog_post_schema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    username: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});
 
const blog_post_model = mongoose.model('post', blog_post_schema);
 
module.exports = blog_post_model;