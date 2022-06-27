function addCart(post) {
    return {
        type: "ADD_CART",
        payload: { post}
    }
}

export { addCart }