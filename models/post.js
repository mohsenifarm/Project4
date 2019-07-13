const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotosSchema = new Schema({
    photo: String
});

const PostSchema = new Schema ({
    title: String,
    photos:[PhotosSchema],
    content: String,
    comments:[{comment:String}]
});
module.exports = mongoose.model('Post',PostSchema)