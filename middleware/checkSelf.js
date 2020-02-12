module.exports = (req, res, next) => {
	if (req.userData.user.admin || req.userData.user._id === req.params.id) {
		next();
	}
	else {
		res.status(401).json({ message: "Authorization failed" });
	}
};
