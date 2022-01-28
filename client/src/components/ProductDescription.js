import React from 'react'

function ProductDescription({ product }) {
    const { description } = product;

    return (
        <section className="product-detail-section desc bg-light">
            <div className="content-container">
                <h3 className="product-detail-section--heading">
                    Description
                </h3>
                <p className="product-detail-section--text">
                    {description}
                </p>
            </div>
        </section>
    )
}

export default ProductDescription
