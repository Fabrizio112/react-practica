function CartItem({ data, removeFromCart }) {
    const { id, name, price, quantity } = data
    return (
        <div>
            <h3>{name}</h3>
            <h4>${price}.00</h4>
            {quantity > 1 && <h3>X{quantity}</h3>}
            <button onClick={() => removeFromCart(id)}>Eliminar uno</button>
            {quantity > 1 && <button onClick={() => removeFromCart(id, true)}>Eliminar Todos</button>}
        </div>
    );
}
export default CartItem;