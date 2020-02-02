const User = require('../models/User.js');
const userSelect = '_id name email phone';

const readAllUsers = (req, res) => {
	User.find().select(userSelect).exec()
	.then(users => res.status(200).json(users))
	.catch(err => res.status(500).json(err));
};

const createUser = (req, res) => {
	User.create(req.body)
	.then(user => res.status(201).json(user))
	.catch(err => res.status(500).json(err));
};

const readUser = (req, res) => {
	User.findById(req.params.id).select(userSelect).exec()
	.then(user => res.status(200).json(user))
	.catch(err => res.status(500).json(err));
};

const updateUser = (req, res) => {
	User.updateOne({ _id: req.params.id }, { $set: req.body }).exec()
	.then(result => res.status(200).json(result))
	.catch(err => res.status(500).json(err));
};

const deleteUser = (req, res) => {
	User.deleteOne({ _id: req.params.id }).exec()
	.then(result => res.status(200).json(result))
	.catch(err => res.status(500).json(err));
};

module.exports = {
	readAllUsers,
	createUser,
	readUser,
	updateUser,
	deleteUser,
};
