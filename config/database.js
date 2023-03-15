const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log("MongooDB is connected.");
    }).catch((err) => {
        console.log(err.message);
    });


