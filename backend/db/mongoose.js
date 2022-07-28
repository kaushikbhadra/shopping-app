const mongoose = require('mongoose')

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`connect with mongodb port: ${data.connection.port}`)
    })
    .catch((err) => console.log(err))
}

module.exports = db
