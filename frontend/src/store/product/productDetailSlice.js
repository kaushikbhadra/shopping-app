import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
}

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    getProductDetail(state, action) {
      state.product = action.payload.product
    },
  },
})

export const { getProductDetail } = productDetailSlice.actions
export default productDetailSlice.reducer

