const express = require('express')
const api = express.Router()

api.post('/items',(req,res) => res.status(201).send({success: true}))

module.exports = api