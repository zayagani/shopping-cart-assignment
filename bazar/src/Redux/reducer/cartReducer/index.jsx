

export function addToCartReducer(state = [], action) {

    switch (action.type) {
        case "ADD_CART":
            action.payload.post.qty = 1
            return [action.payload.post, ...state,]
        case "CART_REMOVE":
            // return [...state]
            const filtData=state.filter(rem=> rem.id !=action.payload.data.id)
            return filtData
        default:
            return state
    }
}

