import React from 'react'
import Appstore from '../../../images/linkImage/Appstore.png'
import Playstore from '../../../images/linkImage/playstore.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='leftFooter'>
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={Playstore} alt='playstore' />
        <img src={Appstore} alt='Appstore' />
      </div>

      <div className='midFooter'>
        <h1>ECOMMERCE</h1>
        <p>High Quality is our first priority</p>
        <p>Created by &#9818;Kaushik Bhadra 2022</p>
      </div>

      <div className='rightFooter'>
        <h4>Follow Us</h4>
        <a
          href='http://instagram.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          Instagram
        </a>
        <a href='http://youtube.com' rel='noopener noreferrer' target='_blank'>
          Youtube
        </a>
        <a href='http://facebook.com' rel='noopener noreferrer' target='_blank'>
          Facebook
        </a>
      </div>
    </footer>
  )
}

export default Footer
