import React, { Fragment } from 'react'
import { BsMouse } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Product from '../Product/Product'
import Pagetitle from '../layout/Title/Pagetitle'
import Loader from '../layout/Loader/Loader'
import './Home.css'

const Home = () => {
  const isloading = useSelector((state) => state.loader.isloading)
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
        <Loader />
      ) : (
        <div className='container' id='container'>
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
      )}
      <ToastContainer />
    </Fragment>
  )
}
 
export default Home
