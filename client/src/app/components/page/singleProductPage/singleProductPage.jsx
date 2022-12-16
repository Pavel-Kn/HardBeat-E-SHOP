import React, { useEffect, useState } from "react";
import { products } from "../../../api/fake.api/product";
// import PropTypes from "prop-types";
import { useParams } from "react-router";

const SingleProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        setProduct(products.find(p => p._id === id));
}, []);
    console.log(product);
    console.log(setProduct);
    console.log(id);
    return (
        <div>
            <h1>page {product.name} </h1>
        </div>
    );
};

// SingleProductPage.propTypes = {
//     prodId: PropTypes.string.isRequired
// };

export default SingleProductPage;
