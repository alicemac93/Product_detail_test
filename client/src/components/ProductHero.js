import React from 'react'

function ProductHero({ product }) {
    const { name, power, imgUrl, quantity } = product;

    return (
        <section className="product-detail-section hero bg-dark">
            <div className="hero-top">
                <div className="content-container">
                    <img alt={name} src={imgUrl} className="product-detail-section--image-hero" />
                </div>
            </div>
            <div className="hero-bottom bg-light">
                <div className="content-container">
                    <h1 className="hero-h1">{name}</h1>
                    <p className="small-text">
                        {power}
                        <span> // Packet of {quantity}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProductHero
