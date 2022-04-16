// require express to set up routes
const router = require('express').Router();
// The path module provides utilities for working with file and directory paths.
const path = require('path');

router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
);

// GET request for notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
);

// export
module.exports = router

