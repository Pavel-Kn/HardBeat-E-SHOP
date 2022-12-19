import React from "react";
import ProductsList from "../components/ui/productsList";
import { useSelector } from "react-redux";
import { getProductById, getProductsLoadingStatus } from "../store/products";
import { useParams } from "react-router-dom";
import SingleProductPage from "../components/pages/singleProductPage";
import ProductEditPage from "../components/pages/productEditPage";

const Products = () => {
    const params = useParams();
    const { prodId, edit } = params;
    const isLoading = useSelector(getProductsLoadingStatus());
    const product = useSelector(getProductById(prodId));
    return (
        <div className="container main-container">
            <>
                {prodId ? (
                    edit ? (
                            <ProductEditPage prodId={prodId}/>
                        )
                        : (
                            !isLoading && <SingleProductPage product={product}/>
                        )
                ) : (
                    <div>
                        { !isLoading && <ProductsList /> }
                    </div>
                )}
            </>
        </div>
    );
};

export default Products;
