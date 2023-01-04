const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const product = require('./routes/productRoute')
const user = require('./routes/userRoute')
const order = require('./routes/orderRoute')
const errorMiddleware = require('./middleware/error')
const app = express()

app.use(cors({
    origin: "http://172.19.208.1:3000"
}))


app.use(express.json())
app.use(cookieParser())

app.use('/api/v1', product)
app.use('/api/v1', user)
app.use('/api/v1', order)
// Middleware for Error
app.use(errorMiddleware)

module.exports = app
