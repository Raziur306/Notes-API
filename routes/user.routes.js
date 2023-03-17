const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../models/users.model');



//register new user

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (password.length < 3) {
            return res.status(400).json({ respones: false, message: "Minimum password length 3." });
        }
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(200).json({ response: true, message: 'User created successfully!' });
    } catch (error) {
        res.status(500).json({ respones: false, message: "Error creating user!" });
    }



})


//login with session

router.post('/login', (req, res) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ response: false, message: err.message })
        }
        if (!user) {
            return res.status(500).json({ success: false, message: 'Authentication failed' });
        }

        //request for login
        req.login(user, loginErr => {
            if (loginErr) {
                return res.status(500).json({ success: false, message: loginErr.message });
            }
            res.status(200).json({ response: true, message: "Loggedin successful." })
        });


    })(req, res);
});


router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ response: false, message: err.message });
        }
        res.status(200).json({ response: true, message: "Logout successful." })
    });
});



module.exports = router;