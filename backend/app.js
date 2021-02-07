const express = require('express')
const itemsRoutes = require('./routes/items')
const app = express()

app.use('/api',itemsRoutes)
module.exports = app