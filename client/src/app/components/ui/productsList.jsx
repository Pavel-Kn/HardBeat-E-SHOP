import React from "react";
import { products } from "../../api/fake.api/product";
import { Link } from "react-router-dom";

const ProductsList = () => {
    return (
        <div>
            {products.map((elem) => {
                const { _id, name, price } = elem;
                return (
                    <article key={_id}>
                        <div>
                            <h4>{name}</h4>
                            <h5 className='price'>{price}</h5>
                            <Link to={`/products/${_id}`} className='btn'>
                                Details
                            </Link>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default ProductsList;
