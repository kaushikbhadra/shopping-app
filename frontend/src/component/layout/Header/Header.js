import React from 'react'
import { ReactNavbar } from 'overlay-navbar'
import { FaUserAlt, FaSistrix, FaShoppingCart } from 'react-icons/fa'
import logo from '../../../images/linkImage/logo.png'

const Header = () => {
  return (
    <div>
      <ReactNavbar
        navColor1='white'
        navColor2='hsl(219, 48%, 8%)'
        burgerColor='hsl(250, 100%, 75%)'
        burgerColorHover='hsl(250, 100%, 75%)'
        logo={logo}
        logoWidth='250px'
        logoHoverColor='hsl(250, 100%, 75%)'
        nav2justifyContent='space-around'
        nav3justifyContent='space-around'
        link1Text='Home'
        link2Text='Products'
        link3Text='Contact'
        link4Text='About'
        link1Url='/'
        link2Url='/products'
        link3Url='/contact'
        link4Url='/about'
        link1ColorHover='white'
        link1Color='HSL(250, 100%, 75%)'
        link1Size='1.5rem'
        link1Padding='3vmax'
        profileIcon={true}
        ProfileIconElement={FaUserAlt}
        profileIconColor='HSL(250, 100%, 75%)'
        profileIconColorHover='white'
        profileIconMargin='5'
        searchIcon={true}
        SearchIconElement={FaSistrix}
        searchIconColor='HSL(250, 100%, 75%)'
        searchIconColorHover='white'
        searchIconMargin='5'
        cartIcon={true}
        CartIconElement={FaShoppingCart}
        cartIconColor='HSL(250, 100%, 75%)'
        cartIconColorHover='white'
        cartIconMargin='5'
      />
    </div>
  )
}

export default Header
