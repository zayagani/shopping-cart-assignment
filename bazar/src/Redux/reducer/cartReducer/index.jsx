export function addToCartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CART":
      action.payload.post.qty = 1
      return [action.payload.post, ...state,]
    case "CART_REMOVE":
      const filtData = state.filter(rem => rem.id != action.payload.data.id)
      return filtData
    case "CART_INCREMENT":
      const incCount = state.map(item => item.id === action.payload.data.id
        ? {
          ...item,
          qty: item.qty + 1,
        }
        : item
      )
      return incCount
    case "CART_DECREMENT":
      const decCount = state.map(item => item.id === action.payload.data.id
        ? {
          ...item,
          qty: item.qty - 1,
        }
        : item
      )
      return decCount
    default:
      return state
  }
}

