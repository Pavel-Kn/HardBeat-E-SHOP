import React from "react";
import propTypes from "prop-types";
import { useHistory } from "react-router";
import { addToCart } from "../../store/cart";
import { useDispatch } from "react-redux";

const SingleProductPage = ({ product }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const editProduct = () => {
        history.push(history.location.pathname + "/edit");
    };
    return (
        <div>
            <div className="col-md-4 mb-2">
            <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                    <button
                        onClick={() => {
                            let item = null;
                            item = {
                                id: product._id,
                                name: product.name,
                                image: product.image,
                                price: product.price,
                                quantity: 1
                            };
                            dispatch(addToCart(item));
                        }}
                        className="btn btn-primary">
                        <i className="bi bi-cart-check"></i> add to cart
                    </button>
                </div>
            </div>
        </div>
            <h1>{product.name}</h1>
            <h1>{product.model}</h1>
            <h1>{product.price}</h1>
            <button
                onClick={() =>
                    dispatch(addToCart({
                    }))
                }>Add to Cart
            </button>
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
