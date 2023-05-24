const mongoose = require('mongoose')

const db = () => {
  mongoose
    .set('strictQuery', true)
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`connect with mongodb port number: ${data.connection.port}`)
    })
}

module.exports = db
