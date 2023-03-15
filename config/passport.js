const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/users.model')


passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return done(null, false, { message: "Incorrect email." });
        }

        if (!bcrypt.compare(password, user.password)) {
            return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
    } catch (error) {
        return done(null, { message: error.message });
    }
}
));


//serialization 

passport.serializeUser((user, done) => {
    done(null, user.id);
});



//deserializeUser
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});