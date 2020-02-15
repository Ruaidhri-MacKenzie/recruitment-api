// Post model can read, create, update, and delete posts
const Post = require('../models/Post.js');

// Post select string shows the fields returned when reading a post
const postSelect = '_id user_id title company location salary description requirements postedDate closeDate startDate';

// Controller functions - the end-point of a request after any middleware has ran
exports.readAllPosts = (req, res) => {
	Post.find().select(postSelect).exec()
	.then(posts => res.status(200).json(posts))
	.catch(err => res.status(500).json(err));
};

exports.createPost = async (req, res) => {
	const { title, company, location, salary, description, requirements, closeDate, startDate } = req.body;

	const post = new Post({
		user_id: req.userData.user._id,
		title,
		company,
		location,
		salary,
		description,
		requirements,
		closeDate,
		startDate,
	});
	
	post.save()
	.then(result => res.status(201).json(post))
	.catch(err => res.status(500).json(err));
};

exports.readPost = (req, res) => {
	Post.findById(req.params.id).select(postSelect).exec()
	.then(post => res.status(200).json(post))
	.catch(err => res.status(500).json(err));
};

exports.updatePost = (req, res) => {
	Post.updateOne({ _id: req.params.id }, { $set: req.body }).exec()
	.then(result => res.status(200).json(result))
	.catch(err => res.status(500).json(err));
};

exports.deletePost = (req, res) => {
	Post.deleteOne({ _id: req.params.id }).exec()
	.then(result => res.status(200).json(result))
	.catch(err => res.status(500).json(err));
};
