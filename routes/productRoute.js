const express = require('express')
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  deleteProductReviews,
  getProductReviewsByUser,
} = require('../controllers/productController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')
const router = express.Router()

router.route('/products').get(getAllProducts)
router
  .route('/admin/products/new')
  .post(isAuthenticatedUser, authorizeRoles('admin'), createProduct)
router
  .route('/admin/products/:id')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct)
router.route('/product/:id').get(getProduct)
router.route('/products/review/all').get(getProductReviewsByUser)
router
  .route('/products/review')
  .put(isAuthenticatedUser, createProductReview)
  .delete(isAuthenticatedUser, deleteProductReviews)
module.exports = router
