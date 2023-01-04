import { showLoading } from '../layout/loaderSlice'
import { getProducts } from '../product/productSlice'
import { showError } from '../layout/errorSlice'

export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch('/api/v1/products')
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

      dispatch(showLoading(false))
    } catch (error) {
      dispatch(showLoading(true))
      dispatch(
        showError({
          error: error.message,
        })
      )
    }
  }
}
