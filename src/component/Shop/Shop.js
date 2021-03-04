import React, { useState } from 'react';
import './shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Card from '../Card/Card';
const Shop = () => {
    
    const first10 = fakeData.slice(0,10)
    const [products,setProduct] = useState(first10)

    const [cart,setCart] = useState([])


    const handleAddProduct = (product) => {
        // console.log('product added',product)
        const newCart = [...cart,product];
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                {
                    products.map(pd => <Product handleAddProduct = {handleAddProduct} product={pd}></Product>)
                }
                </ul>
            </div>
            <div className="cart-container">
                <Card card={cart}></Card>

            </div>
           
            
        </div>
    );
};

export default Shop;