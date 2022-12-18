import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProducts, getProductsLoadingStatus } from "../../store/products";

const ProductsList = () => {
    const isLoading = useSelector(getProductsLoadingStatus());
    const productsList = useSelector(getProducts());
    return (
        <ul>
            {!isLoading && productsList.map((prod) => (
                <li key={ prod._id }>
                    <p>rate: ({ prod.rate })</p>
                    <h4>
                        <Link to={`/product/${prod._id}`} > { prod.name } </Link>
                    </h4>
                    <div>
                            <span>
                                ${ prod.price }
                            </span>
                    </div>
                </li>
            ))}
        </ul>);
};

export default ProductsList;
