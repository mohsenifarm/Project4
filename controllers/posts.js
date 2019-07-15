const Post = require('../models/post');

module.exports = {
    getAllPosts,
    createPost,
    showPost,
    deletePost,
    editPost

}

function getAllPosts (req,res){
    Post.find({}).then(function(posts){
        res.status(200).json(posts)
    })
};

function createPost (req,res) {
    Post.create(req.body).then(function(post){
        res.status(201).json(post)
    })
}
function showPost (req,res) {
    Post.findById(req.params.id).then(function(post){
        console.log("Show Post");
        res.status(200).json(post)
    })
}
function deletePost(req,res){
    console.log(req.body)
    console.log(req.params.id)
    console.log("In delete Function")

    
    Post.findByIdAndDelete(req.params.id).then(function(post){
        console.log(req.params.id)
        res.status(200).json(post)
    })
}
function editPost(req,res){
    Post.findByIdAndUpdate(req.params.id, req.body).then(function(post){
        res.status(200).json(post)
    })
}
