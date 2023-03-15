const express = require('express');
const { default: mongoose, model } = require('mongoose');

const schemaNotes = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    }
})


const Notes = mongoose.model('notes', schemaNotes);
module.exports = Notes;