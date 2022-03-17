const { Router } = require('express');
const res = require('express/lib/response');
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
const router = require('express').Router();
const data = require('../../db/notes.json');
const uuid = require('../../helpers/uuid');

router.get('/notes', (req, res) => {
    let results = data
    res.json(results)
})

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, data);
    if (result) {
        res.json(result)
    } else {
        res.send(404);
    }
});

// Going to use a function that is predefined to get the note and use the .then promises together. newNote variable
router.post('/notes', (req, res) => {
    const {title , text} = req.body
    const newNote = {title, text, id, review_id: uuid()}

    fs.writeFile(path.join(__dirname, '../../db/notes.json'),
    JSON.stringify(data), 
    err => {
        if (err){
            throw err
        }
    })
    res.json(data);
})

module.exports = router
