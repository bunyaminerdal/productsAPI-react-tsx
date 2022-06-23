import React from 'react'
import { product } from '../Redux/store'
interface PorductDetailsProps {
    product: product | null
}
const ProductDetails = ({ product }: PorductDetailsProps) => {
    return (
        <div>
            <img src={product?.thumbnail} alt=""></img>
            <h1>Title: {product?.title}</h1>
            <h4>Description: {product?.description}</h4>
            <h4>Price: {product?.price} $</h4>
        </div>
    )
}

export default ProductDetails
