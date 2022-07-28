const Product = require('../models/productModel')

//create product --admin use
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body)
  res.status(201).json({
    success: true,
    product,
  })
}

//show all product
exports.getAllProducts = async (req, res) => {
  const product = await Product.find()
  res.status(200).json({ success: true, product })
}

//show single product
exports.getProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(500).json({
      success: false,
      message: 'not found!',
    })
  }

  res.status(200).json({ success: true, product })
}

//update product ==admin use only
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id)
  if (!product) {
    res.status(500).json({
      success: false,
      message: 'not found!',
    })
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
}

//delete product ==admin use only
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(500).json({
      success: false,
      message: 'not found!',
    })
  }
  await product.remove()
  res.status(200).json({
    success: true,
    message: 'product deleted successfully',
    product,
  })
}
