const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

require('dotenv').config();

const app = require('./config/express');
const userRouter = require('./routes/user.routes');
const notesRouter = require('./routes/notes.routes');





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


