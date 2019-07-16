const Post = require('../models/post');

module.exports = {
    getAllPosts,
    createPost,
    showPost,
    deletePost,
    editPost,
    addComment

}

function getAllPosts (req,res){
    Post.find({}).then(function(posts){
        res.status(200).json(posts)
    })
};

function createPost (req,res) {
    console.log(req.body)
    Post.create(req.body).then(function(post){
        res.status(201).json(post)
    })
}
function showPost (req,res) {
    Post.findById(req.params.id)
    .populate('userId')
    .populate('comments.userId')
    .then(function(post){
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
    console.log("In edit post function")
    console.log(req.body)
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(post){
        res.status(200).json(post)
    })
}

function addComment(req, res){
    Post.findById(req.params.id)
    // .populate('userId')
    .then(function(post){
        post.comments.push(req.body);
        post.save(function(comment){
            // console.log('post=>',post);
            // console.log('comment=>',comment)
            res.status(200).json(comment);
        });
    })
}



