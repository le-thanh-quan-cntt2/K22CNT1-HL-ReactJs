import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LtqNavBar from './components/LtqNavBar'
import LtqHome from './pages/LtqHome'
import LtqAbout from './pages/LtqAbout'
import LtqContact from './pages/LtqContact'
import LtqProduct from './pages/LtqProduct'
import LtqProductDetail from './pages/LtqProductDetail'
import LtqNotFound from './pages/LtqNotFound'
import LtqUsers from './pages/LtqUsers'
import LtqUserAdd from './pages/LtqUserAdd'
import LtqUserEdit from './pages/LtqUserEdit'
import LtqCategories from './pages/LtqCategories'

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

                <Route path='/users' element = {<LtqUsers />}> </Route>
                <Route path="/users/add" element = {<LtqUserAdd />} />
                <Route path="/users/edit/:id" element = {<LtqUserEdit />} />

                <Route path='/categories' element = {<LtqCategories />}> </Route>

                {/* 404 page  */}
                <Route path='*' element = {<LtqNotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}