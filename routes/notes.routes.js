const express = require('express');
const router = express.Router();

const { getNote, createNote, updateNote, deleteNote } = require('../controller/note.controller');
const auth = require('../middleware/auth');

//create new note
router.post('/notes', auth, createNote);


//get all notes
router.get('/notes', auth, getNote);


//update note
router.put('/notes:id', auth, updateNote);


//delete note
router.delete('/notes:id', auth, deleteNote);


module.exports = router;