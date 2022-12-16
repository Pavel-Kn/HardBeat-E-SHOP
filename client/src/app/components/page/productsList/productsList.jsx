import React from "react";
import { products } from "../../../api/fake.api/product";

const ProductsList = () => {
    return (
        <div>
            <h1>Если что, то Вы видите список товаров</h1>
            {products.map((prod) => (
            <p key={prod._id}>{prod.name} {prod.model}</p>
            ))}
        </div>
    );
};

export default ProductsList;
