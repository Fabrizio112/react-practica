import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { TYPES } from "../actions/shoppingActions";

function ShoppingCart() {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const { products, cart } = state
    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id })
    }
    const removeFromCart = (id, all = false) => {
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
        }
    }
    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR })
    }
    return (
        <>
            <h2>Shopping Cart</h2>
            <h3>Productos</h3>
            <article className="box">
                {products.length > 0 && products.map((product) => <ProductItem key={product.id} data={product} addToCart={addToCart} />)}
            </article>
            <h3>Carrito</h3>
            <article className="box">
                <button onClick={clearCart}>Limpiar Carrito</button>
                {
                    cart.map((product, index) =>
                        <CartItem key={index} data={product} removeFromCart={removeFromCart} />

                    )}
            </article>
        </>
    );
}

export default ShoppingCart;