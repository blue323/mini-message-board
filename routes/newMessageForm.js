const express = require('express')
const router = express.Router()
let messages = require('../messages.js')

router.get('/', (req, res) => {
    res.render('form')
})

router.post('/', (req, res) => {
    let messageText = req.body.messageText
    let messageUser = req.body.messageUser
    messages.push({ text: messageText, user: messageUser, added: new Date()})
    res.redirect('/')
})

module.exports = router