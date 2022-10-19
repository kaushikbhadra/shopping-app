import { getProducts, showError } from './productSlice'
export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch('api/v1/products')
      if (!response.ok) {
        throw new Error('Not fetch success. Something wrong!')
      }
      const data = await response.json()
      return data
    }
    try {
      const productData = await fetchRequest()
      dispatch(
        getProducts({
          products: productData.products || [],
          productsCount: productData.productCount,
        })
      )
    } catch (error) {
      dispatch(
        showError({
          error: error.message,
        })
      )
    }
  }
}
