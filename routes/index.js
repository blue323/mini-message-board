const express = require('express')
const router = express.Router()
let messages = require('../messages.js')

router.get('/', (req, res) => {
    res.render('index', {title: 'Mini Message Board', messages})
});

module.exports = router