const Note = require('../models/Note');

const controller = {
    getNotes: async (req, res) => {
        const notes = await Note.find();
        res.json(notes);
    },
    createNote: async (req, res) => {
        const newNote = new Note({
            title: req.body.title,
            content: req.body.content,
            date: req.body.date,
            author: req.body.author
        });
        await newNote.save();
        res.json({message: 'Note created'});
    },
    getNote: async (req, res) => {
        const note = await Note.findById(req.params.id);
        res.json(note);
    },
    updateNote: async (req, res) => {
        const {title, author, content, date} = req.body;
        await Note.findOneAndUpdate({_id: req.params.id}, {
            title,
            author,
            content,
            date
        });
        
        res.json({message: 'Note updated'});
    },
    deleteNote: async (req, res) => {
        const note = await Note.findByIdAndDelete(req.params.id);
        res.json({message: 'Note deleted'});
    }
};

module.exports = controller;