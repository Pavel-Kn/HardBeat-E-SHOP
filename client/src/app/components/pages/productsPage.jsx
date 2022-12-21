import React from "react";
import ProductsList from "../ui/productsList";
import FiltersProducts from "../ui/filtersProducts";

const ProductsPage = () => {
    return (
        <div>
            <FiltersProducts />
            <div>
            <ProductsList />
            </div>
        </div>
    );
};

export default ProductsPage;
