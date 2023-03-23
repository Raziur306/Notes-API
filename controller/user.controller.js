const bcrypt = require('bcrypt');
require('dotenv').config();
var jwt = require('jsonwebtoken');

const userModel = require('../models/users.model');
const saltRounds = 10;


const signUp = async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({ message: "User alreay exist" })
        }

        const hashPassword = await bcrypt.hash(password, saltRounds);
        const result = await userModel.create({
            name,
            email,
            phone,
            password: hashPassword
        })

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET_KEY)
        res.status(201).json({ response: true, message: "Sign up sucessful.", token: token })

    } catch (error) {

        console.log(error)
        res.status(500).json({ message: "Somethig went wrong" })

    }
}

const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" })
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credintials" })
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET_KEY)
        res.status(200).json({ response: true, message: "Sign in sucessful.", token: token })


    } catch (error) {
        console.log(error)
        res.send(500).json({ message: "Somethint went wrong" });
    }
}


module.exports = { signIn, signUp }