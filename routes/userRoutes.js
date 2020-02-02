const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.get('/', userController.readAllUsers);
router.post('/', userController.createUser);

router.get('/:id', userController.readUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
