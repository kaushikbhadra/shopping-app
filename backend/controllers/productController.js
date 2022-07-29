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
