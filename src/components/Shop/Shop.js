import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]= useState([]);
    // const firstTen = fakeData.slice(0, 10);
    useEffect(() => {
        setProducts(fakeData);
    }, []);
    // console.log(products);
    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        // console.log(cart);
    }
    return (
        <div className="shop_wrapper">
            <div className="product">
                {
                    products.map((product) => <Product 
                        product={product}
                        handleAddProduct = {handleAddProduct}
                        key={Math.random()}
                        ></Product>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;