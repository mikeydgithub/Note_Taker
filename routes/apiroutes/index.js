const router = require('express').Router();
const notesRoutes = require('../apiroutes/notesroute')

router.use(notesRoutes)

module.exports = router