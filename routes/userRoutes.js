// NPM Packages - express helps create a HTTP server with routing
const express = require('express');

// Middleware
const checkAuth = require('../middleware/checkAuth.js');
const checkAdmin = require('../middleware/checkAdmin.js');
const checkSelf = require('../middleware/checkSelf.js');
const userController = require('../controllers/userController.js');

// Create Router
const router = express.Router();

// Routes
router.get('/', checkAuth, checkAdmin, userController.readAllUsers);
router.post('/', userController.createUser);

router.get('/:id', checkAuth, checkSelf, userController.readUser);
router.put('/:id', checkAuth, checkSelf, userController.updateUser);
router.delete('/:id', checkAuth, checkSelf, userController.deleteUser);

router.post('/:id', userController.authenticate);

module.exports = router;
