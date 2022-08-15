import React from 'react'
import { Link } from 'react-router-dom'
import ReactStar from 'react-rating-stars-component'
import './Product.css'
const options = {
  edit: false,
  color: 'rgba(20,20,20,0.1)',
  activeColor: '#9580ff',
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
}
const Product = ({ product }) => {
  return (
    <Link to={`${product._id}`} className='productCard'>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStar {...options} />
        <span>(245 Reviews)</span>
      </div>
      <span>&#8377;{product.price}</span>
    </Link>
  )
}

export default Product
