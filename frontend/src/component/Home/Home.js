import React, { Fragment } from 'react'
import { BsMouse } from 'react-icons/bs'
import Product from './Product.js'

import './Home.css'
const product = {
    name: "Blue Shirt",
    _id: "1e1r1t1t1y1",
    price: "3000",
    images: [{url: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444"}]
}
const Home = () => {
  return (
    <Fragment>
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
      <div className='container' id='container'>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>

      </div>
    </Fragment>
  )
}

export default Home
