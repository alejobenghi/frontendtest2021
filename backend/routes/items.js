const express = require('express')
const { getItems, getItemById } = require('../controllers/itemsController')
const api = express.Router()

api.get('/items/',getItems)


api.get('/items/:id',getItemById)

module.exports = api