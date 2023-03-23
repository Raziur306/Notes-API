const jwt = require("jsonwebtoken");
require('dotenv').config();


const auth = async (req, res, next) => {
    try {
        let token = req.headers.authorization
        if (token) {
            token = token.split(" ")[1];
            const user = await jwt.verify(token, process.env.SECRET_KEY);
            req.userId = user.id;

        } else {
            res.status(401).json({ message: "Unauthorized user" });
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized user" })
    }
}

module.exports = auth;