import React, { Fragment } from 'react'
import { BsMouse } from 'react-icons/bs'
import { useSelector } from 'react-redux'
// import {showLoading} from '../../store/productSlice'
import Product from './Product.js'
import Pagetitle from '../layout/Title/Pagetitle'

import './Home.css'

// https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444
const Home = () => {
  const isloading = useSelector((state) => state.product.isloading)
  const products = useSelector((state) => state.product.products)
  return (
    <Fragment>
      <Pagetitle title='Home Page' />
      <div className='banner'>
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href='#container'>
          <button>
            Scroll <BsMouse />
          </button>
        </a>
      </div>
      <h2 className='homeHeading'>Featured Products</h2>
      {isloading ? (
        'loading...'
      ) : (
        <div className='container' id='container'>
          {products && products.map((product) => <Product key={product._id} product={product} />)}
        </div>
      )}
    </Fragment>
  )
}

export default Home
