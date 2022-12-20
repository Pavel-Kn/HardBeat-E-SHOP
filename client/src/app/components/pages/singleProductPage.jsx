import React from "react";
import propTypes from "prop-types";
import { addToCart } from "../../store/cart";
import { useDispatch } from "react-redux";
import image from "../../assets/thor.jpg";

const SingleProductPage = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <h3 className="center">Product Details - {product.name}</h3>
            Details page of Product.
            <div>
                <div>
                    <div className="text-center d-flex align-content-center">
                        <img className="rounded-circle" width={300} alt={product.name} src={image} />
                    </div>
                    <p className="card-text description">
                        {product.descriptionFull}
                    </p>
                    <p className="card-text"><b>Category:</b> {product.category}</p>
                    <p className="card-text"><b>Price:</b> ${product.price}</p>
                    <button
                        onClick={() => {
                            let item = null;
                            item = {
                                id: product._id,
                                model: product.model,
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
    );
};

SingleProductPage.propTypes = {
    product: propTypes.object
};
export default SingleProductPage;
