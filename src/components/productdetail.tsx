import React from 'react'
import { useNavigate } from 'react-router-dom'
import { product } from '../Redux/store'

interface ProductProps {
    product: product
    onclick: (product: product) => void
}
const ProductDetail = (props: ProductProps) => {
    const navigate = useNavigate()
    return (
        <div className="card p-1 m-1" style={{ width: "18rem" }} key={props.product.id}>
            <img src={props.product.thumbnail} className="card-img-top" alt='' style={{ height: "10rem" }} />
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}.</p>
                <div onClick={() => { navigate(`/products/${props.product.id}`); props.onclick(props.product) }} className="btn btn-primary">Details</div>
            </div>
        </div>
    )
}

export default ProductDetail
