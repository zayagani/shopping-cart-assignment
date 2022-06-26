import React from "react";
import "../ProductCard/productcard.scss";
import Button from "../Button";
import {useDispatch } from "react-redux";
import { addCart } from '../../Redux/action/cartAction/index.jsx'

const ProductCard = ({ product }) => {

  const dispatch = useDispatch()

  const buyNowClick = (product) => {
    dispatch(addCart(product))
  }

  return (
    <div className="product-container">
      <div className="product-name">{product.name}</div>
      <div className="product-tablet">
        <div>
          <img className="product-image" src={product.imageURL} alt="product" />
        </div>
        <div className="product-description">{product.description}</div>
      </div>
      <div className="product-price-button-container">
        <div className="product-price">Rs{product.price}</div>
        <Button type="sign" handleClick={() => buyNowClick(product)}>
          Buy now
          <span
            className="product-card-price--mobile"
            style={{ color: "white" }}
          >
            Rs {product.price}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;