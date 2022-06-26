import React from "react";
import "../CartPage/cartpage.scss";
import { MdNavigateNext } from "react-icons/md";
import Button from "../Button";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import { cartRemove } from '../../Redux/action/cartAction/cartRemove'
import { useSelector, useDispatch } from "react-redux";

const CartModel = ({ handleCartOpen, props, _addToCartReducer }) => {

  const dispatch = useDispatch()

  const [itemPrice, setItemPrice] = useState(null)
  const [cartData, setCartData] = useState([])
  const [totalPrice,setTotalPrice]=useState(null)

  useEffect(() => {
    _addToCartReducer && _addToCartReducer.map((data, i) => {
      return setItemPrice(data.price)
    })
    setCartData(_addToCartReducer)

  }, [])

  const removeCartItem = (id) => {
    dispatch(cartRemove(id))
  }

  const increment = (data, i) => {
    const crtdata = cartData && cartData.map((item, i) => {
      if (item.id === data.id) {
        return ({ ...item, qty: item.qty + 1, price: item.price + itemPrice })
      } else {
        return item
      }
    })
    setCartData(crtdata)


  }
  const decrement = (data, i) => {
    const crtdata = cartData && cartData.map((item, i) => {
      if (item.id === data.id) {
        return ({ ...item, qty: item.qty - 1, price: item.price - (itemPrice) })
      } else {
        return item
      }
    })
    setCartData(crtdata)
  }

  useEffect(()=>{
if(cartData){
  cartData && cartData.map((data,i)=>{
    let totPrice= 0
    totPrice=data.price+totalPrice 
     setTotalPrice(totPrice)
  })
  
}
  },[cartData])

  return (
    <div className="CartModel-container">
      <div className="cartPopUp">
        {console.log(totalPrice,"msmndsmndmsnd")}
        <header className="cartPopUp-header-container">
          <div className="cartModel-header-left">
            My Cart <span>({cartData && cartData.length} item)</span>
          </div>
          <div className="cartModel-header-right" onClick={handleCartOpen}>
            x
          </div>
        </header>

        <div className="cart-content">
          {_addToCartReducer && _addToCartReducer.length > 0 && _addToCartReducer.map((items, i) => {
            return (
              <div className="cartModel-itmes-container">
                <img
                  className="cartModel-itmes-image"
                  src={items && items.imageURL}
                  alt="product"
                />
                <div className="cartModel-name-price-container">
                  <div className="cartModel-itmes-name">{items && items.name}</div>
                  <div className="cartModel-itmes-price">
                    <div className="cartModel-itmes-price-calculator">
                      <button className={items.qty === 1 ? "cartModel-price-button disable" : "cartModel-price-button"} onClick={() => decrement(items && items, i)}>-</button>{items.qty}
                      <button className="cartModel-price-button" onClick={() => increment(items && items, i)}>+</button>
                      <span onClick={() => removeCartItem(items)}>x</span>
                    </div>
                    <span>Rs{items && items.price}</span>
                  </div>
                </div>
              </div>
            )

          })

          }
          {_addToCartReducer && _addToCartReducer.length === 0 &&
            <div className="cartModel-itmes-container">
              <div className="nocartItem">
                <div className="nocart">No Item in Your Cart </div>
                <div className="favourite">Your Favoruit Item Just a Click away</div>
              </div>
            </div>

          }
        </div>

        {_addToCartReducer && _addToCartReducer.length > 0 && <div className="cartModel-priceBanner">
          <img src="/static/images/lowest-price.png" alt="lowest-price png" />
          <p>You won't find it cheaper anywhere</p>
        </div>}
        {_addToCartReducer && _addToCartReducer.length > 0 ? <div className="cartModel-checkout-container">
          <span className="promo">
            Promo code can be applied on payment page.
          </span>
          <Button type="checkout">
            <span>Proceed to cart</span>
            <div className="cart-proceed">
              <span>Rs.{totalPrice && totalPrice}</span>
              <MdNavigateNext />
            </div>
          </Button>
        </div> :
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


const mapStateToProps = state => {
  return {
    _addToCartReducer: state.addToCartReducer
  }
}

export default connect(mapStateToProps)(CartModel)