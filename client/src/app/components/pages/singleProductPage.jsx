import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import productService from "../../services/product.service";

const SingleProductPage = () => {
    const { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState();
    useEffect(() => {
        productService.get().then((data) => setProduct(data));
    }, []);
    const one = product.content.map((elem) => { return elem.name; });
    console.log(one);
    if (product) {
        return (
            <div>
                <h1>page </h1>
            </div>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

export default SingleProductPage;
