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
    
} 

module.exports = db
