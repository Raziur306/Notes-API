const express = require('express');
const router = express.Router();

const isAuthorized = require('../middleware/authorization');
const Note = require('../models/notes.model');

//create new note
router.post('/notes', isAuthorized, async (req, res) => {
    try {
        const newNote = new Note({
            user_id: req.user._id,
            title: req.body.title,
            content: req.body.content
        })
        await newNote.save();
        res.status(200).json({ response: true, message: "Note save successfuly." });

    } catch (error) {
        res.status(500).json({ response: false, message: "Something went wrong." });
    }

})


//get all notes
router.get('/notes', isAuthorized, async (req, res) => {
    try {
        const notes = await Note.find({ user_id: req.user._id });

        const filteredNote = notes.map(note => {
            const { user_id, ...rest } = note._doc;
            return rest;
        });
        res.status(200).json({ response: true, notes: filteredNote })

    } catch (error) {
        res.status(500).json({ response: false, message: error.message });
    }
})


//update note
router.patch('/notes', isAuthorized, async (req, res) => {
    try {
        await Note.findByIdAndUpdate(req.body.id, {
            title: req.body.title,
            content: req.body.content
        });
        res.status(200).json({ resposne: true, message: "Update successful." });
    } catch (error) {
        res.status(500).json({ response: false, message: error.message });
    }
})


//delete note
router.delete('/notes', isAuthorized, async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.body.id);
        res.status(200).json({ response: true, message: "Note successfuly deleted." })
    } catch (error) {
        res.status(500).json({ response: false, message: error.message });
    }
})


module.exports = router;