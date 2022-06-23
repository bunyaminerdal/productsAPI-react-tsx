import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout'
import MainPage from './MainPage'
import Products from './Products'

const Navbar = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path='products' >
                        <Route index element={<Products />} />
                        <Route path=':paramid' element={<Products />} />
                    </Route>
                    <Route path='*' element={<div>404: page not found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar
