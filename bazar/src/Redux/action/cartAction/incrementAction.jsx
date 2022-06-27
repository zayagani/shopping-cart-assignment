function cartIncrement(data){
    return{
        type:"CART_INCREMENT",
        payload:{data}
    }
}

export {cartIncrement}