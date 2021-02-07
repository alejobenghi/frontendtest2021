require('dotenv').config()
const app = require('./app')


const {appConfig} = require('./config')

const port = process.env.APP_PORT

app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
