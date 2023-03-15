const mongoose = require('mongoose');

const schemaUser = mongoose.Schema({
    name: {
        type: String,
        min: [3, 'Name must contain 3 charecter.'],
        required: [true, "Name required"],
        trim: true,
        validate: (v) => {
            return /^[^\W\d_](?:(?:[^\W\d_]|['’\-_ ](?=[^\W\d_])){0,48}[^\W\d_])?$/iu.test(v)
        }
    },
    email: {
        type: String,
        required: [true, "Email Required"],
        unique: true,
        trim: true,
        validate: (v) => {
            return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(v);
        }
    },
    password: {
        type: String,
        require: [true, "Password Required."],
        minLength: [3, "Minimum password length 3."]
    }
})


const User = mongoose.model('users', schemaUser);
module.exports = User;