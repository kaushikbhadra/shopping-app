const ErrorHandler = require('../utils/Errorhandler')

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.message = err.message || 'Internal Server Error'

  // "Cast Error handler for mongodb"
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`
    err = new ErrorHandler(message, 400)
  }

  // "dublicate code Error handler for mongodb"
  if (err.code === 11000) {
    const message = `Dublicate ${Object.keys(err.keyValue)} enter`
    err = new ErrorHandler(message, 400)
  }

  // "JWT Error handler"
  if (err.name === 'JsonWebTokenError') {
    const message = `Json web token is Invalid, Try again`
    err = new ErrorHandler(message, 400)
  }

  // "JWT expireToken Error handler"
  if (err.name === 'TokenExpiredError') {
    const message = `Json web token is Expire, Try again`
    err = new ErrorHandler(message, 400)
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  })
}
