import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const navigate = useNavigate();
    return (
        <div >
            <div className="bg-dark overflow-hidden" >
                <nav>
                    <div className='p-1  m-1 btn btn-light' onClick={() => {
                        navigate("/")
                    }}>
                        Home
                    </div >
                    <div className='p-1 btn btn-light' onClick={() => {
                        navigate(`/products/`)
                    }}>
                        Products
                    </div >
                </nav>
            </div>
            <Outlet />

        </div>
    )
}

export default Layout
