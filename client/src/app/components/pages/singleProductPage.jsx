import React from "react";
import propTypes from "prop-types";
import { useHistory } from "react-router";

const SingleProductPage = ({ product }) => {
    const history = useHistory();
    const editProduct = () => {
        history.push(history.location.pathname + "/edit");
    };
    return (
        <div>
            <h1>{product.name}</h1>
            <h1>{product.model}</h1>
            <h1>{product.price}</h1>
            <button
                onClick={editProduct}
            >
                <i className="bi bi-gear"></i>
            </button>

        </div>
    );
};

SingleProductPage.propTypes = {
    product: propTypes.object
};
export default SingleProductPage;
