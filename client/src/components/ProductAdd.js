import React, { useState } from 'react';

function ProductAdd({ product }) {
    const { price } = product;
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1);

    const decrement = () => {
        if (quantity > 1) setQuantity(prev => prev - 1)
    }
    const increment = () => setQuantity(prev => prev + 1)

    const addToCart = (product) => {
        setCart((prev) => [...prev, {
            productId: product.id, // this could be more information but I assume then the next stages it would be mapping the rest of the data based on ID.
            name: product.name,
            quantity: quantity,
            totalPrice: price / 100 * quantity // I am not sure why is the price in thousands so I assumed it's supposed to be like this.
        }])
    }

    return (
        <section className="product-detail-section add bg-dark">
            <div className="content-container">
                <div className="add-top">
                    <h2 className="bold">{price / 100}</h2>
                    <div className="quantity-selection-wrapper">
                        <button className="button-qty" onClick={decrement} data-testid="decrement-button">-</button>
                        <h2 data-testid="product-quantity">{quantity}</h2>
                        <button className="button-qty" onClick={increment} data-testid="increment-button">+</button>
                    </div>
                </div>
                <button
                    className="button--pink-glass"
                    onClick={() => addToCart(product, quantity)}
                    data-testid="cart-add">
                    Add to Cart
                </button>
            </div>
        </section>
    )
}


export default ProductAdd
