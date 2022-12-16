import React from "react";
import ProductsList from "../../ui/productsList";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
    const params = useParams();
    const { prodId } = params;

    return (
        <div>
            <ProductsList prodId={prodId}/>
        </div>
    );
};

export default ProductsPage;
