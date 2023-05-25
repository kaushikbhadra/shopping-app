const mongoose = require('mongoose')

const url = process.env.MONGODB_URL

const db = () => {
  mongoose
    .set('strictQuery', true)
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`connect with mongodb port number: ${data.connection.port}`)
    })
}

module.exports = db
