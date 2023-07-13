function ProductItem({ data, addToCart }) {
    const { id, name, price } = data
    return (
        <div>
            <h3>{name}</h3>
            <h4>${price}.00</h4>
            <button onClick={() => addToCart(id)}>Agregar</button>
        </div>
    );
}

export default ProductItem;