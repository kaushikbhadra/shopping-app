import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product/productSlice'
import productDetailReducer from './product/productDetailSlice'
import loaderReducer from './layout/loaderSlice'
import errorReducer from './layout/errorSlice'
const store = configureStore({
  reducer: {
    product: productReducer,
    productDetail: productDetailReducer,
    loader: loaderReducer,
    error: errorReducer,
  },
})

export default store
