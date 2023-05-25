const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter product name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'please enter product details'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'please enter product price maxLimit 6 character'],
    maxlength: [6, 'price maxLimit 6 character'],
    trim: true,
  },

  ratings: {
    type: Number,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, 'please enter product category'],
  },
  stock: {
    type: Number,
    required: [true, 'please enter product stock'],
    maxlength: [4, 'stock maxlength is 4 character'],
    default: 1,
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
