var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');
var postsController = require('../controllers/posts');

router.get('/posts',postsController.getAllPosts);
router.get('/posts/:id',postsController.showPost);
router.post('/posts',postsController.createPost);
router.delete('/posts/deletePost/:id', postsController.deletePost);
router.put('/posts/:id/edit',postsController.editPost);
router.post(`/posts/:id/comments`, postsController.addComment);


router.post('/users/signup', usersController.signup);
router.post('/users/login', usersController.login);


module.exports = router;