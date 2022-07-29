const express = require('express')
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')
const router = express.Router()

router.route('/products').get(getAllProducts)
router
  .route('/products/new')
  .post(isAuthenticatedUser, authorizeRoles('admin'), createProduct)
router
  .route('/products/:id')
  .get(getProduct)
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct)

module.exports = router
