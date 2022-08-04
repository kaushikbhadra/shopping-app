const Product = require('../models/productModel')
const ErrorHandler = require('../utils/Errorhandler')
const AsynsErrorhandler = require('../middleware/asynsErrorhandler')
const ApiFeatures = require('../utils/ApiFeatures')
//create product --admin use
exports.createProduct = AsynsErrorhandler(async (req, res, next) => {
  req.body.user = req.user.id
  const product = await Product.create(req.body)
  res.status(201).json({
    success: true,
    product,
  })
})

//show all product
exports.getAllProducts = AsynsErrorhandler(async (req, res) => {
  const resultPerPage = 5
  const productCount = await Product.countDocuments()
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage)
  const product = await apiFeature.query
  res.status(200).json({ success: true, product, productCount })
})

//show single product
exports.getProduct = AsynsErrorhandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    return next(new ErrorHandler('Product not found', 404))
  }

  res.status(200).json({ success: true, product })
})

//update product ==admin use only
exports.updateProduct = AsynsErrorhandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id)
  if (!product) {
    return next(new ErrorHandler('Product not found', 404))
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    product,
  })
})

//delete product ==admin use only
exports.deleteProduct = AsynsErrorhandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    return next(new ErrorHandler('Product not found', 404))
  }
  await product.remove()
  res.status(200).json({
    success: true,
    message: 'product deleted successfully',
    product,
  })
})

//Create new review or update old review
exports.createProductReview = AsynsErrorhandler(async (req, res, next) => {
  const { rating, comment, productId } = req.body
  const review = {
    user: req.user.id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  }

  const product = await Product.findById(productId)
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user.id.toString()
  )
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user.id.toString())
        (rev.rating = rating), (rev.comment = comment)
    })
  } else {
    product.reviews.push(review),
      (product.numOfReviews = product.reviews.length)
  }
  let avg = 0
  product.reviews.forEach((rev) => {
    avg += rev.rating
  })
  product.ratings = avg / product.reviews.length

  await product.save({ validateBeforeSave: false })
  res.status(200).json({
    success: true,
    product,
  })
})

//show  product reviews
exports.getProductReviewsByUser = AsynsErrorhandler(async (req, res, next) => {
  const product = await Product.findById(req.query.id)

  if (!product) {
    return next(new ErrorHandler('Product not found', 404))
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  })
})

//Delete product review
exports.deleteProductReviews = AsynsErrorhandler(async (req, res, next) => {
  const product = await Product.findById(req.query.productId)
  if (!product) {
    return next(new ErrorHandler('Product not found', 404))
  }

  const reviews = product.reviews.filter(
    (rev) => rev.id.toString() !== req.query.id.toString()
  )
  const deleteReview = product.reviews.filter(
    (rev) => rev.id.toString() === req.query.id.toString()
  )
  if (deleteReview.length === 0) {
    return next(new ErrorHandler('Review not exist', 404))
  }
  let avg = 0
  reviews.forEach((rev) => {
    avg += rev.rating
  })

  let ratings = 0

  if (reviews.length === 0) {
    ratings = 0
  } else {
    ratings = avg / reviews.length
  }
  const numOfReviews = reviews.length
  await Product.findByIdAndUpdate(
    req.query.productId,
    { reviews, ratings, numOfReviews },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  )

  res.status(200).json({ success: true, reviews: deleteReview })
})
