const { Router } = require('express');
const res = require('express/lib/response');
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
const router = require('express').Router();
const data = require('../../db/notes.json');
// install uuid, create a require file for it.

router.get('/notes', (req, res) => {
    let results = data
    res.json(results)
})

router.post('/notes', (req, res) => {
    let {title , text} = req.body
    let newNote = {title, text, id}

    data.push(newNote)
    fs.writeFile(path.join (__dirname, '../../db/notes.json'),
    JSON.stringify(data), 
    err => {
        if (err){
            throw err
        }
    })
    res.json(data);
})

module.exports = router
