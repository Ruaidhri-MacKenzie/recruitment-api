// NPM packages - express helps create a HTTP server with routing
const express = require('express');

// Middleware
const checkAuth = require('../middleware/checkAuth.js');
const checkSelf = require('../middleware/checkSelf.js');

// Controller
const postController = require('../controllers/postController.js');

// Create Router
const router = express.Router();

// Routes
router.get('/', checkAuth, postController.readAllPosts);
router.post('/', checkAuth, postController.createPost);

router.get('/:id', checkAuth, postController.readPost);
router.put('/:id', checkAuth, checkSelf, postController.updatePost);
router.delete('/:id', checkAuth, checkSelf, postController.deletePost);

module.exports = router;
