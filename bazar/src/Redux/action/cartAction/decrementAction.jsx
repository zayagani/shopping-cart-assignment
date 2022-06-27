function cartdecrement(data){
    return{
        type:"CART_DECREMENT",
        payload:{data}
    }
}

export {cartdecrement}