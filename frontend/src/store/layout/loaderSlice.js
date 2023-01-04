import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isloading: true,
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoading(state, action) {
      state.isloading = action.payload
    },
  },
})
export const { showLoading } = loaderSlice.actions
export default loaderSlice.reducer
