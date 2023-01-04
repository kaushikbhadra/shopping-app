import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Rating from 'react-rating-stars-component'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { fetchProductDetailData } from '../../store/product/productDetailAction'
import { showError } from '../../store/layout/errorSlice'

import './ProductDetails.css'
const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.productDetail.product)
  //   const error = useSelector((state) => state.error.error)
  useEffect(() => {
    dispatch(fetchProductDetailData(id))
    return () => {
      dispatch(
        showError({
          error: null,
        })
      )
    }
  }, [dispatch, id])

  const options = {
    edit: false,
    color: 'rgba(20,20,20,0.1)',
    activeColor: '#9580ff',
    size: window.innerWidth < 600 ? 15 : 20,
    value: product.rating,
    isHalf: true,
  }

  const quantity = 1

  return (
    <Fragment>
      <div className='productDetails'>
        <div>
          <AliceCarousel mouseDragEnabled={true}>
            {product.images &&
              product.images.map((item, i) => (
                <img
                  className='CarouselImage'
                  key={item.url}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </AliceCarousel>
        </div>
        <div>
          <div className='detailsBlock-1'>
            <h2>{product.name}</h2>
            <p>Product # {product._id}</p>
          </div>
          <div className='detailsBlock-2'>
            <Rating {...options} />
            <span className='detailsBlock-2-span'>
              ({product.numOfReviews} Reviews)
            </span>
          </div>
          <div className='detailsBlock-3'>
            <h1>{`₹${product.price}`}</h1>
            <div className='detailsBlock-3-1'>
              <div className='detailsBlock-3-1-1'>
                <button>-</button>
                <input readOnly type='number' value={quantity} />
                <button>+</button>
              </div>
              <button disabled={product.Stock < 1 ? true : false}>
                Add to Cart
              </button>
            </div>

            <p>
              Status:
              <b className={product.Stock < 1 ? 'redColor' : 'greenColor'}>
                {product.Stock < 1 ? 'OutOfStock' : 'InStock'}
              </b>
            </p>
          </div>

          <div className='detailsBlock-4'>
            Description : <p>{product.description}</p>
          </div>

          <button className='submitReview'>Submit Review</button>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductDetails
