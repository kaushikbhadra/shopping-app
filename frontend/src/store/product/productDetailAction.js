import { showLoading } from '../layout/loaderSlice'
import { getProductDetail } from '../product/productDetailSlice'
import { showError } from '../layout/errorSlice'

export const fetchProductDetailData = (id) => {
  return async (dispatch) => {
    const fetchRequest = async (id) => {
      const response = await fetch(`/api/v1/product/${id}`)
      if (!response.ok) {
        throw new Error('Not fetch success. Something wrong!')
      }
      const data = await response.json()
      return data
    }
    try {
      dispatch(showLoading(true))
      const productData = await fetchRequest(id)

      dispatch(
        getProductDetail({
          product: productData.product || [],
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
