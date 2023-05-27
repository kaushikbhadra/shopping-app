const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const product = require('./routes/productRoute')
const user = require('./routes/userRoute')
const order = require('./routes/orderRoute')
const errorMiddleware = require('./middleware/error')
const bodyParser = require('body-parser')
const app = express()

app.use(cors({
    origin: process.env.CORS
}))


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload({
    useTempFiles: true,
    limits: {fileSize: 50*1024*1024}
}))

app.use('/api/v1', product)
app.use('/api/v1', user)
app.use('/api/v1', order)
// Middleware for Error
app.use(errorMiddleware)

module.exports = app
