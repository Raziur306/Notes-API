const express = require('express');
const app = express();
require('dotenv').config();
require("./database");


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log("Server is Connected.");
})



module.exports = app;