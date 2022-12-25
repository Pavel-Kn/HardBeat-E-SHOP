import React from "react";
import propTypes from "prop-types";
import { addToCart } from "../../store/cart";
import { useDispatch } from "react-redux";
import Comments from "../ui/comments";
import LoadingSpinner from "../ui/loadingSpinner";

const SingleProductPage = ({ product }) => {
    const dispatch = useDispatch();
    return (
        product ? (
                <div>
                    <div className="row col-md-12 mt-4">
                            <div className="col-6">
                                {product.image
                                    ? (
                                        <div className="">
                                            <img className="" width={500} alt={product.name} src={product.image} />
                                        </div>
                                    ) : (
                                        <img className="rounded-circle" width={300} alt={product.name}/>
                                    )}
                                    <h2 className="fw-bold">{product.name} {product.model}</h2>
                                <p className="card-text"><b>Category:</b> {product.category}</p>
                                <p className="card-text description">
                                    {product.descriptionFull}
                                </p>
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
                        <div className="col-6">
                                <h3>Product Review</h3>
                                <Comments/>
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingSpinner/>
            )
    );
};

SingleProductPage.propTypes = {
    product: propTypes.object
};

export default SingleProductPage;
