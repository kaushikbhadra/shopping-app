import React from 'react'
import { Link } from 'react-router-dom'
import ReactStar from 'react-rating-stars-component'

import './Product.css'

const Product = ({ product }) => {
  const options = {
    edit: false,
    color: 'rgba(20,20,20,0.1)',
    activeColor: '#9580ff',
    size: window.innerWidth < 600 ? 15 : 20,
    value: product.rating,
    isHalf: true,
  }
  return (
    <Link to={`/product/${product._id}`} className='productCard'>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStar {...options} />
        <span>({product.numOfReviews})</span>
      </div>
      <span>&#8377;{product.price}</span>
    </Link>
  )
}

export default Product
