const express = require('express');
const router = express.Router();
const { signUp, signIn } = require('../controller/user.controller');



//register new user
router.post('/register', signUp);


//signin existing user
router.post('/login', signIn)


module.exports = router;