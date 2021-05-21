import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const productPriceTotal = cart.reduce((total, pd) => total + pd.price, 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shippingCost = 0;
    if(total >= 50) {
        shippingCost = 0;
    }else if(total >= 30) {
        shippingCost = 4.99;
    }else if(total > 0){
        shippingCost = 8.44;
    }

    const vat = (total * 12) / 100;

    const fixedFloatNumber = (num) => {
        const fixed = num.toFixed(2);
        return Number(fixed);
    }



    return (
        <div className="card_details">
            <h4>Order Summary</h4>
            <p>Items Order: {cart.length}</p>
            <p>Product Price: {fixedFloatNumber(total)}</p>
            <p>Shipping Cost: {fixedFloatNumber(shippingCost)}</p>
            <p><small>Tax + VAT (12%): {fixedFloatNumber(vat)}</small></p>
            <h4>Total Price: {fixedFloatNumber(total + shippingCost + vat)}</h4>
        </div>
    );
};

export default Cart;