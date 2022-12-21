import React from "react";
import ProductsList from "../components/ui/productsList";
import { useSelector } from "react-redux";
import { getProductById, getProductsLoadingStatus } from "../store/products";
import { useParams } from "react-router-dom";
import SingleProductPage from "../components/pages/singleProductPage";
import ProductForm from "../components/ui/productForm";

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
                            <ProductForm prodId={prodId}/>
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
