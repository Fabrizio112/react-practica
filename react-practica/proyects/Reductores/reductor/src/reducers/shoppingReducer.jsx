import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [
        { id: 1, name: "Producto 1", price: 100, quantity: 1 },
        { id: 2, name: "Producto 2", price: 200, quantity: 1 },
        { id: 3, name: "Producto 3", price: 300, quantity: 1 },
        { id: 4, name: "Producto 4", price: 400, quantity: 1 },
        { id: 5, name: "Producto 5", price: 500, quantity: 1 },
        { id: 6, name: "Producto 6", price: 600, quantity: 1 }
    ],
    cart: []
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find((product) => product.id === action.payload)
            let itemInCart = state.cart.find(product => product.id === newItem.id)
            return itemInCart ? {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === itemInCart.id ? { ...item, quantity: item.quantity + 1 } : item)
            } : {
                ...state,
                cart: [...state.cart, newItem]
            }

        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(product => product.id === action.payload)
            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item)
            } : {
                ...state,
                cart: state.cart.filter((item) =>
                    item.id != action.payload)
            }
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) =>
                    item.id != action.payload)
            }
        }
        case TYPES.CLEAR: {
            return shoppingInitialState
        }
        default:
            return state
    }
}