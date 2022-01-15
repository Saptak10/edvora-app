import React from 'react'
import './Product.css';
import Products from './Products/Products';

const Product = (items) => {
    return (
        <div>
            <h2 className='productHeading'>Product Name</h2>
            <div className='line'></div>
            <Products items={items}/>
            {/* <h2 className='productHeading'>Product Name</h2> */}
            
        </div>
    )
}

export default Product
