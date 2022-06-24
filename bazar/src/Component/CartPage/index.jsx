import React from "react";
import "../CartPage/cartpage.scss";
import { MdNavigateNext } from "react-icons/md";
import Button from "../Button";
import { useEffect } from "react";
import { useState } from "react";

const CartModel = ({ handleCartOpen }) => {

  const [prodData,setProdData]=useState()
  const [itemData,setItemData]=useState(0)
  const [count,setCount]=useState(1)
  const [itemPrice,setItemPrice]=useState()

useEffect(()=>{
 const prodItem= localStorage.getItem("item")
 const jsonData=JSON.parse(prodItem)
 jsonData && jsonData.map((data,i)=>{
  return setProdData(data)
 })
 jsonData && jsonData.map((data,i)=>{
  return setItemPrice(data.price)
 })
 setItemData(jsonData)
 
},[])

const removeCartItem=()=>{
window.location.reload()
  localStorage.removeItem("item")
}


useEffect(()=>{
  console.log(prodData)
  debugger

},[prodData && prodData.price])

const increment=(data)=>{
  setCount(count+1)
  setItemPrice(data * (count+1))
  //setProdData(data.price*1)
  debugger
}
const decrement=(data)=>{
  setCount(count-1)
  setItemPrice(data * (count-1))
  //setProdData(data.price*1)
  debugger
}

  return (
    <div className="CartModel-container">
      <div className="cartModel">
        <header className="cartModel-header-container">
          <div className="cartModel-header-left">
            My Cart <span>({itemData && itemData.length} item)</span>
          </div>
          <div className="cartModel-header-right" onClick={handleCartOpen}>
            x
          </div>
        </header>
        {itemData && itemData.length > 0 ? <div className="cartModel-itmes-container">
          <img
            className="cartModel-itmes-image"
            src={prodData && prodData.imageURL}
            alt="product"
          />
          <div className="cartModel-name-price-container">
            <div className="cartModel-itmes-name">{prodData && prodData.name}</div>
            <div className="cartModel-itmes-price">
              <div className="cartModel-itmes-price-calculator">
                <button className={count === 1 ? "cartModel-price-button disable" :"cartModel-price-button"} onClick={()=>decrement(prodData && prodData.price)}>-</button>{count}
                <button className="cartModel-price-button" onClick={()=>increment(prodData && prodData.price)}>+</button>
                <span onClick={removeCartItem}>x</span>
                {/* Rs{itemPrice && itemPrice} */}
              </div>
              <span>Rs{itemPrice && itemPrice}</span>
            </div>
          </div>
        </div>:
        <div className="nocartItem">
          <div className="nocart">No Item in Your Cart </div>
          <div className="favourite">Your Favoruit Item Just a Click away</div>
          </div>
        }
        {itemData && itemData.length > 0  && <div className="cartModel-priceBanner">
          <img src="/static/images/lowest-price.png" alt="lowest-price png" />
          <p>You won't find it cheaper anywhere</p>
        </div>}
        {itemData && itemData.length > 0 ?<div className="cartModel-checkout-container">
          <span className="promo">
            Promo code can be applied on payment page.
          </span>
          <Button type="checkout">
            <span>Proceed to cart</span>
            <div className="cart-proceed">
              <span>Rs.{itemPrice && itemPrice}</span>
              <MdNavigateNext />
            </div>
          </Button>
        </div>:
        <div className="cartModel-checkout-container">
          <Button type="checkout">
            <div>Start Shopping</div>
            <div className="cart-proceed">
            </div>
          </Button>
          </div>
          }
      </div>
    </div>
  );
};

export default CartModel;