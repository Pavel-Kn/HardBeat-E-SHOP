import React from "react";
import propTypes from "prop-types";

const SingleProductPage = ({ product }) => {
    return (
        <div>
            <h1>SingleProductPage {product.name}</h1>
        </div>
    );
};

SingleProductPage.propTypes = {
    product: propTypes.object
};
export default SingleProductPage;
