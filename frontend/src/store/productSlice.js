import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isloading: true,
    products: [],
    productsCount: null,
    error: null
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        showLoading(state){
            state.isloading = !state.isloading
        },
        getProducts(state, action){
            state.products = action.payload.products
            state.productsCount = action.payload.productsCount
        },
        showError(state, action){
            state.error = action.payload.error
        }
    }
})

export const { showLoading, getProducts, showError } = productSlice.actions
export default productSlice.reducer