const router = require("express").Router();
const {readAndAppend} = require('../../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

router.get("/", (req, res)=>{
    fs.readFile("./db/db.json", "utf-8",(err, data)=>{
        if(err){
            res.status(500).json(err)
        }
        const notes = JSON.parse(data)
        res.json(notes)
    })
})

router.post("/", (req, res) => {
    console.log(req.body);

    const {title, text} = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.status(201).json('Note added successfully');
    } else {
        res.status(500).json('Error in adding note');
    }
})



module.exports = router;