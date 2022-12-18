import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../../services/product.service";

const ProductsList = () => {
    const [productsList, setProductsList] = useState();
    useEffect(() => {
        productService.get().then((data) => setProductsList(data));
    }, []);
    if (productsList) {
        return (
            <div>
                {productsList.content.map((elem) => {
                    const { _id, name, model, price } = elem;
                    return (
                        <article key={_id}>
                            <div>
                                <h4>{name} {model}</h4>
                                <h5 className='price'>price: {price}</h5>
                                <Link to={`/products/${_id}`} className='btn'>
                                    Details
                                </Link>
                            </div>
                        </article>
                    );
                })}
            </div>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

export default ProductsList;
