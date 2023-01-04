import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import { toast } from 'react-toastify'
import './App.css'
import Header from './component/layout/Header/Header'
import Footer from './component/layout/Footer/Footer'
import Home from './component/Home/Home'
import ProductDetails from './component/Product/ProductDetails'
import { fetchProductData } from './store/product/productAction'
import { showLoading } from './store/layout/loaderSlice'
import { showError } from './store/layout/errorSlice'

function App() {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.error.error)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lato', 'Roboto'],
      },
    })
  }, [])

  useEffect(() => {
    dispatch(fetchProductData())
    return () => {
      dispatch(
        showError({
          error: null,
        })
      )
    }
  }, [dispatch])

  useEffect(() => {
    toast.error(error)
    if (error) {
      dispatch(showLoading(false))
    }
  }, [dispatch, error])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
