var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');
var postsController = require('../controllers/posts');

router.get('/posts',postsController.getAllPosts);
router.post('/posts',postsController.createPost);


router.post('/users/signup', usersController.signup);
router.post('/users/login', usersController.login);


module.exports = router;