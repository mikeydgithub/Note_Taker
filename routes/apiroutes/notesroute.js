const { Router } = require('express');
const res = require('express/lib/response');
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
const router = require('express').Router();
var data = require('../../db/notes.json');
const uuid = require('../../helpers/uuid');


router.get('/notes', (req, res) => {
    let results = data
    res.json(results)
})


// Going to use a function that is predefined to get the note and use the .then promises together. newNote variable
router.post('/notes', (req, res) => {
    const { title, text } = req.body
    const newNote = { title, text, id: uuid() }
    console.log(newNote)

    try {
        data.push(newNote)
        console.log(data)
        fs.writeFile(path.join(__dirname, '../../db/notes.json'),
            JSON.stringify(data),
            err => {
                if (err) {
                    throw err
                }
            })
        // res.json(newNote);
        res.json(data)
    } catch (err) {
        console.error(err)
    }
    // take array from notes.json. add new post to the array. then save that updated array with writefile method to notes.json
})

// delete route
router.delete('/notes/:id', (req, res) => {
    console.log('delete end point hit')
    data = data.filter(note => note.id !== req.params.id)
    fs.writeFile(path.join(__dirname, '../../db/notes.json'),
        JSON.stringify(data),
        err => {
            if (err) {
                console.log(err)
                throw err
            }
        })
    res.send("deleted");
});

module.exports = router
