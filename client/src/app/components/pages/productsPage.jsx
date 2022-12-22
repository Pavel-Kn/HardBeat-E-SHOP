import React from "react";
import ProductsList from "../ui/productsList";
import FiltersProducts from "../ui/filtersProducts";
import Sort from "../ui/sort";

const ProductsPage = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <FiltersProducts/>
                </div>
                <div className='col-9'>
                    <Sort />
                    <ProductsList />
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
