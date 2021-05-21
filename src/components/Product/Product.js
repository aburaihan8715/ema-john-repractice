import React from "react";
import "./Product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



const Product = (props) => {
  // console.log(props.product);

  
  return (
    <div className="pd_wrapper">
      <div>
        <img src={props.product.img} alt="product-img" />
      </div>
      <div className="pd_details">
        <h3 className="pd_name">{props.product.name}</h3>
        <p>by: {props.product.seller}</p>
        <h3>$ {props.product.price}</h3>
        <p>only {props.product.stock} left in stock-order soon</p>
        <button className="main_btn"
          onClick={() =>props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
