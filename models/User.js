const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	verified: { type: Boolean, default: false },
	admin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', UserSchema, 'users');
