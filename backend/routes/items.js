const express = require('express')
const { getItems } = require('../controllers/itemsController')
const api = express.Router()

//api.post('/items',(req,res) => res.status(201).send({success: true}))
api.get('/items/',getItems)

module.exports = api