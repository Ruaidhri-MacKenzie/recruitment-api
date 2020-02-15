const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	title: { type: String, required: true },
	company: { type: String, required: true },
	location: { type: String, required: true },
	salary: { type: Number, required: true },
	description: { type: String, required: true },
	requirements: { type: String, required: true },
	postedDate: { type: Date, default: new Date() },
	closeDate: { type: Date, required: true },
	startDate: { type: Date, required: true },
});

module.exports = mongoose.model('Post', PostSchema, 'posts');
