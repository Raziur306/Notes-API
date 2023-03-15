const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');

require('dotenv').config();
require('./config/passport');

const app = require('./config/express');
const userRouter = require('./routes/user.routes');
const notesRouter = require('./routes/notes.routes');




app.use(session({
    secret: 'You are a dog.',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_DB_URL,
        collectionName: "session"
    }),
    cookie: {
        httpOnly: true,
        maxAge: 1296000000
    }
}));


app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRouter);
app.use("/api", notesRouter);



//base route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Home Page" });
})

//undefine route
app.use("*", (req, res) => {
    res.status(404).json({ message: "404! Bad Request." });
})


