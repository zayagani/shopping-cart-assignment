function addCart(post) {
    return {
        type: "ADD_CART",
        payload: { text: post.text, id: post.id }
    }
}

export { addCart }