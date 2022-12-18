import React from "react";
import propTypes from "prop-types";

const SingleProductPage = ({ product }) => {
    console.log(product);
    return (
        <div>
            <h1>SingleProductPage</h1>
        </div>
    );
};

SingleProductPage.propTypes = {
    product: propTypes.object
};
export default SingleProductPage;
