import React from 'react'
import './Product.css'

const Product = (productItems) => {
    console.log(productItems[0].title);
    return (
        <div className='productStyles'>
            <h1>Hello</h1>
            <ul>
                <li>
                  <strong>Actor Name:</strong> {productItems[0].title}
                </li>
                <li>
                  <strong>Nickname:</strong> {productItems[0].amount}
                </li>
                <li>
                  <strong>Birthday:</strong> {productItems[0].date}
                </li>
                <li>
                  <strong>Status:</strong> {productItems[0].id}
                </li>
            </ul>

        </div>
    )
}

export default Product
