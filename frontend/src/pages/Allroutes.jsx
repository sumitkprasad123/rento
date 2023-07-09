import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from './Login'
import Signup from './Signup'
import PagenoteFound from "./PagenoteFound"
import Product from './Product'
import EachProductPage from './EachProductPage'

function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>} />
        <Route path='/products/:propertyId' element={<EachProductPage />}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<PagenoteFound/>} />
    </Routes>
  )
}

export default Allroutes