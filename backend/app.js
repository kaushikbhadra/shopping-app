const express = require('express')
const cookieParser = require('cookie-parser')
const product = require('./routes/productRoute')
const user = require('./routes/userRoute')
const errorMiddleware = require('./middleware/error')
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/v1', product)
app.use('/api/v1', user)
// Middleware for Error
app.use(errorMiddleware)

module.exports = app
