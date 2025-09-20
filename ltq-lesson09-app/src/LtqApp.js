import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LtqNavBar from './components/LtqNavBar'
import LtqHome from './pages/LtqHome'
import LtqAbout from './pages/LtqAbout'
import LtqContact from './pages/LtqContact'
import LtqProduct from './pages/LtqProduct'
import LtqProductDetail from './pages/LtqProductDetail'
import LtqNotFound from './pages/LtqNotFound'

export default function LtqApp() {
  return (
    <div className='container border'>
        <h1>React Route - Demo [Lê Thanh Quan]</h1>
        <hr/>
        <BrowserRouter>
            <LtqNavBar />
            <Routes>
                <Route path='/' element={<LtqHome />} />
                <Route path='/about' element = {<LtqAbout />} />
                <Route path='/contact' element = {<LtqContact />} />

                {/* Nested route  */}
                <Route path='/products' element = {<LtqProduct />} >
                  <Route path=":id" element = {<LtqProductDetail />} />
                </Route>

                {/* 404 page  */}
                <Route path='*' element = {<LtqNotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}