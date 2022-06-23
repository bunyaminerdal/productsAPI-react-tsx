import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { product, RootState } from '../Redux/store'
import ProductDetail from './productdetail'
import ProductDetails from './ProductDetails'
import { useDispatch } from 'react-redux'
import { GetProducts, GetProductsSeacrh } from '../Redux/action-creator'
import { AppDispatch } from '../Redux/store'

const Products = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { paramid } = useParams()
    const { data, loading, error } = useSelector((state: RootState) => state.productsReducer)
    const [selectedProduct, setSelectedProduct] = useState<product | null>(null)
    const inputRef = useRef<HTMLInputElement>(null!)
    const onclickHandler = (product: product) => {
        setSelectedProduct(product)
    }
    const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // dispatch(GetProductsSeacrh(e.target.value))
    }
    const onclickSearch = () => {
        dispatch(GetProductsSeacrh(inputRef.current.value))
    }
    const onkeydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            dispatch(GetProductsSeacrh(inputRef.current.value))
        } else if (e.key === "Backspace") {
            if (inputRef.current.value.length === 1) {
                dispatch(GetProductsSeacrh(""))
            }
        }
    }
    useEffect(() => {
        dispatch(GetProducts())
    }, [dispatch, paramid])

    return (<>
        {paramid ? <ProductDetails product={selectedProduct} /> : <div className='container row ' >
            <div className="input-group m-3">
                <input ref={inputRef} type="text" className="form-control" placeholder="Search Product..." aria-describedby="button-addon2" onChange={onchangeHandler} onKeyDown={onkeydownHandler} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={onclickSearch}>Search</button>
            </div>
            {data.products.map((product) => {
                return (<ProductDetail onclick={onclickHandler} product={product} key={product.id} />)
            })}

        </div>}

    </>

    )
}

export default Products
