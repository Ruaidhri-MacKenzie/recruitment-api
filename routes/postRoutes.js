const express = require('express');

const checkAuth = require('../middleware/checkAuth.js');
const checkSelf = require('../middleware/checkSelf.js');
const postController = require('../controllers/postController.js');

const router = express.Router();

router.get('/', checkAuth, postController.readAllPosts);
router.post('/', checkAuth, postController.createPost);

router.get('/:id', checkAuth, postController.readPost);
router.put('/:id', checkAuth, checkSelf, postController.updatePost);
router.delete('/:id', checkAuth, checkSelf, postController.deletePost);

module.exports = router;
