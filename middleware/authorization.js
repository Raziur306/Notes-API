const isAuthorized = (req, res, next) => {
    if (req.isUnauthenticated()) {
        return res.status(401).json({ response: false, message: "Unauthorized access." })
    }
    next();
}

module.exports = isAuthorized;