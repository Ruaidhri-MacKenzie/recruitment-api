const express = require('express');
const checkAuth = require('../middleware/checkAuth.js');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.get('/', checkAuth, userController.readAllUsers);
router.post('/', userController.createUser);

router.get('/:id', checkAuth, userController.readUser);
router.put('/:id', checkAuth, userController.updateUser);
router.delete('/:id', checkAuth, userController.deleteUser);

router.post('/:id', userController.authenticate);

module.exports = router;
