const express = require('express')
const itemsRoutes = require('./routes/items')
const cors = require('cors')
const app = express()

app.use(cors())

app.use('/api',itemsRoutes)
module.exports = app