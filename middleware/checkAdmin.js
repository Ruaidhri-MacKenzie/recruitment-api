module.exports = (req, res, next) => {
	if (req.userData.user.admin) {
		next();
	}
	else {
		res.status(401).json({ message: "Authorization failed" });
	}
};
