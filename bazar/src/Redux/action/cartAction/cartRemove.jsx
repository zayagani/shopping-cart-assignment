function cartRemove(data){
    return{
        type:"CART_REMOVE",
        payload:{data}
    }
}

export {cartRemove}