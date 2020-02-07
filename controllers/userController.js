const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const userSelect = '_id username email';

exports.readAllUsers = (req, res) => {
	User.find().select(userSelect).exec()
	.then(users => res.status(200).json(users))
	.catch(err => res.status(500).json(err));
};

exports.createUser = async (req, res) => {
	try {
		const checkUserExists = await User.findOne({ email: req.body.email }).exec();
		if (checkUserExists) {
			res.status(409).json({ message: "Account already exists with that email." });
			return;
		}
	
		const hash = await bcrypt.hash(req.body.password, 10);
		if (!hash) {
			res.status(500).json({ message: "Failed to create account" });
			return;
		}
	
		const user = new User({
			username: req.body.username,
			email: req.body.email,
			password: hash,
		});
		
		user.save()
		.then(result => res.status(201).json(user))
		.catch(err => res.status(500).json(err));
	}
	catch(err) {
		res.status(500).json(err);
	}
};

exports.readUser = (req, res) => {
	User.findById(req.params.id).select(userSelect).exec()
	.then(user => res.status(200).json(user))
	.catch(err => res.status(500).json(err));
};

exports.updateUser = (req, res) => {
	User.updateOne({ _id: req.params.id }, { $set: req.body }).exec()
	.then(result => res.status(200).json(result))
	.catch(err => res.status(500).json(err));
};

exports.deleteUser = (req, res) => {
	User.deleteOne({ _id: req.params.id }).exec()
	.then(result => res.status(200).json(result))
	.catch(err => res.status(500).json(err));
};

exports.authenticate = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email }).exec()
		if (!user) {
			res.status(400).json({ message: "Email address is unrecognised" });
			return;
		}
		
		const match = await bcrypt.compare(req.body.password, user.password);
		if (match) {
			const token = jwt.sign(
				{ user },
				process.env.JWT_KEY,
				{ expiresIn: '1h' },
			);

			res.status(200).json({
				message: "Authenticated",
				token,
			});
		}
		else res.status(401).json({ message: "Authentication failed" });
	}
	catch(err) {
		res.status(500).json(err);
	}
};
