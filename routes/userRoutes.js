const express = require('express');
const checkAuth = require('../middleware/checkAuth.js');
const checkAdmin = require('../middleware/checkAdmin.js');
const checkSelf = require('../middleware/checkSelf.js');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.get('/', checkAuth, checkAdmin, userController.readAllUsers);
router.post('/', userController.createUser);

router.get('/:id', checkAuth, checkSelf, userController.readUser);
router.put('/:id', checkAuth, checkSelf, userController.updateUser);
router.delete('/:id', checkAuth, checkSelf, userController.deleteUser);

router.post('/:id', userController.authenticate);

module.exports = router;
