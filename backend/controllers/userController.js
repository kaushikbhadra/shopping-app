const crypto = require('crypto')
const User = require('../models/userModel')
const ErrorHandler = require('../utils/Errorhandler')
const AsynsErrorhandler = require('../middleware/asynsErrorhandler')
const jwtToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail')

exports.registerUser = AsynsErrorhandler(async (req, res, next) => {
  const { name, email, password } = req.body
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: '58w7y8wy98ycw38799',
      url: 'profileURL',
    },
  })

  jwtToken(user, 201, res)
})

exports.loginUser = AsynsErrorhandler(async (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return next(new ErrorHandler('Please enter email and password', 404))
  }

  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    return next(new ErrorHandler('Invalid email and password', 401))
  }

  const isPasswordMatched = await user.comparePassword(password)

  if (!isPasswordMatched) {
    return next(new ErrorHandler('Invalid email and password', 401))
  }

  jwtToken(user, 200, res)
})

exports.logoutUser = AsynsErrorhandler(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  })

  res.status(200).json({
    success: true,
    message: 'Logout Successfully',
  })
})

exports.forgotPassword = AsynsErrorhandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })
  if (!user) {
    return next(new ErrorHandler('User not found', 404))
  }

  //ResetPassword Token
  const resetToken = user.getResetPasswordToken()
  await user.save({ validateBeforeSave: false })
  const resetPasswordUrl = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/password/reset/${resetToken}`
  const message = `Your password reset token is:= \n\n ${resetPasswordUrl} \n\nIf you have not requested this email than, please ignore it`
  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce Password Recovery`,
      message,
    })
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    })
  } catch (error) {
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save({ validateBeforeSave: false })
    return next(new ErrorHandler(error.message, 500))
  }
})

exports.resetPassword = AsynsErrorhandler(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex')
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  })

  if (!user) {
    return next(new ErrorHandler('Reset password token invalid or expire', 400))
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password doesn't match", 400))
  }

  user.password = req.body.password
  user.resetPasswordToken = undefined
  user.resetPasswordExpire = undefined
  await user.save()
  jwtToken(user, 200, res)
})
