import React from 'react'

function ProductSpecification({ product }) {
    const { brand, colour, weight, width, height, modelCode } = product;

    return (
        <section className="product-detail-section spec bg-dark">
            <div className="content-container">
                <h3 className="product-detail-section--heading">
                    Specifications
                </h3>
                <table>
                    <tbody className="product-detail-section--text">
                        <tr>
                            <td>Brand</td>
                            <td>{brand}</td>
                        </tr>
                        <tr className="spacer" aria-hidden="true"></tr>
                        <tr>
                            <td>Item Weight</td>
                            <td>{weight}</td>
                        </tr>
                        <tr className="spacer" aria-hidden="true"></tr>
                        <tr>
                            <td>Dimensions</td>
                            <td>{width} x {height}</td>
                        </tr>
                        <tr className="spacer" aria-hidden="true"></tr>
                        <tr>
                            <td>Item model number</td>
                            <td>{modelCode}</td>
                        </tr>
                        <tr className="spacer" aria-hidden="true"></tr>
                        <tr>
                            <td>Colour</td>
                            <td>{colour}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section >
    )
}

export default ProductSpecification
