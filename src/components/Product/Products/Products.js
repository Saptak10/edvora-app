import React from 'react'
import './Products.css';
import Product from './Product';

const Products = (items) => {
    return (
        <div className='box'>
             {/* {items.map((item) => ( */}
                    <Product productItems={items}/>
             {/* ))} */}
        </div>
    )
}

export default Products
