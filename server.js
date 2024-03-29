const cloudinary = require('cloudinary').v2
const app = require('./app')
const db = require('./db/mongoose')

//Handled uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`)
  console.log(`Shutdown the server due to uncaught Exception`)
  process.exit(1)
})
const port = process.env.PORT || 3001

db()

// Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET
});

const server = app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

//Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  console.log(`Shutdown the server due to unhandled Promise Rejection`)
  server.close(() => {
    process.exit(1)
  })
})
