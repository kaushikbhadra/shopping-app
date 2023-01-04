import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  productsCount: null,
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload.products
      state.productsCount = action.payload.productsCount
    },
  },
})

export const { getProducts } = productSlice.actions
export default productSlice.reducer
