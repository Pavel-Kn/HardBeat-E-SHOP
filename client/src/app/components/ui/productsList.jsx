import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsLoadingStatus } from "../../store/products";
import { addToCart } from "../../store/cart";
import image from "../../assets/thor.jpg";
import { getCategories } from "../../store/categories";

const ProductsList = () => {
    const isLoading = useSelector(getProductsLoadingStatus());
    const productsList = useSelector(getProducts());
    const dispatch = useDispatch();
    const cat = useSelector(getCategories());
    console.log(cat);
    return (
        <div className="container">
                <h3 className="center">Product List</h3>
            <div className="row">
            {!isLoading && productsList.map((prod) => (
                <div className="col-md-4 mb-2" key={ prod._id } >
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5>
                                <Link className="card-title" to={`/products/${prod._id}`} > { prod.name } </Link>
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

export default ProductsList;
