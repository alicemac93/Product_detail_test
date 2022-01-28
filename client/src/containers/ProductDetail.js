import React from 'react'
import ProductHero from '../components/ProductHero';
import ProductAdd from '../components/ProductAdd';
import ProductDescription from '../components/ProductDescription';
import ProductSpecification from '../components/ProductSpecification';
import PropTypes from 'prop-types';

function ProductDetail({ product }) {

    return (
        <div className="product-detail">
            <div className="container-lg">
                <ProductHero product={product} />
                <div className="side-layout">
                    <ProductAdd product={product} />
                    <ProductDescription product={product} />
                    <ProductSpecification product={product} />
                </div>
            </div>
        </div>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.shape({
        brand: PropTypes.string,
        colour: PropTypes.string,
        description: PropTypes.string,
        height: PropTypes.number,
        id: PropTypes.string, // number?
        imgUrl: PropTypes.string,
        length: PropTypes.number,
        modelCode: PropTypes.string,
        name: PropTypes.string,
        power: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
        weight: PropTypes.number,

    })
}

export default ProductDetail
