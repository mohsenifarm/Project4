const Post = require('../models/post');

module.exports = {
    getAllPosts,
    createPost

}

function getAllPosts (req,res){
    Post.find({}).then(function(posts){
        res.status(200).json(posts)
    })
};

function createPost (req,res) {
    console.log('runninggggggggggh')
    Post.create(req.body).then(function(post){
        res.status(201).json(post)
    })
}
