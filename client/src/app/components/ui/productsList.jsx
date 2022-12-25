import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import PropTypes from "prop-types";

const ProductsList = ({ products, ...rest }) => {
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((prod) => (
                    <div className="card-group" key={prod._id} >
                        <div className="card-100">
                            <img src={prod.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>
                                    <Link className="card-title" to={`/products/${prod._id}`} > {prod.name} {prod.model} </Link>
                                </h5>
                                <p className="card-text">{prod.descriptionShort}</p>
                                <p className="card-text"><b>Category:</b> {prod.category}</p>
                                <p className="card-text"><b>Price:</b> ${prod.price}</p>
                                <button
                                    onClick={() => {
                                        let item = null;
                                        item = {
                                            id: prod._id,
                                            model: prod.model,
                                            name: prod.name,
                                            image: prod.image,
                                            price: prod.price,
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
                ))}
            </div>
        </div>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductsList;
