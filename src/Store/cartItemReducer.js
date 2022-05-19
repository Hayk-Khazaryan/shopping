import { ADD_TO_BASKET, CHANGE_PRODUCT_COUNT, REMOVE_BASKET } from "./type"

const intialState = {
       cartItems: []
}


export function cartItemReducer(state = intialState, action) {
       switch (action.type) {
              case CHANGE_PRODUCT_COUNT:
                     const result = state.cartItems.map(item => {
                            if (action.data.id === item.id) {
                                   let count = action.data.value
                                   item.count = count
                                   return item
                            }
                            return item
                     })
                     return {
                            ...state,
                            cartItems: result
                     }
              case REMOVE_BASKET:
                     const removeBasket = state.cartItems.filter(item =>
                            item.id !== action.id
                     )
                     return {
                            ...state,
                            cartItems: removeBasket
                     }
              case ADD_TO_BASKET: {
                     let itemExists = false
                     const newCartItems = state.cartItems.map(item => {
                            if (item.id === action.data.id) {
                                   itemExists = true
                                   let newCount = item.count + 1
                                   item.count = newCount
                            }
                            return item
                     })
                     return {
                            ...state,
                            cartItems:
                                   itemExists
                                          ? newCartItems
                                          : [...state.cartItems, action.data]

                     }
              }
              default:
                     return state
       }
}