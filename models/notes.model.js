const express = require('express');
const { default: mongoose, model } = require('mongoose');

const schemaNotes = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
}, { timestamps: true })


const Notes = mongoose.model('Notes', schemaNotes);
module.exports = Notes;