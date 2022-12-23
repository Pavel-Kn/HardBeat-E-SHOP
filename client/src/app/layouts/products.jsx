import React from "react";
import { useSelector } from "react-redux";
import { getProductById, getProductsLoadingStatus } from "../store/products";
import { useParams } from "react-router-dom";
import SingleProductPage from "../components/pages/singleProductPage";
import ProductEditPage from "../components/pages/productEditPage";
import ProductsPage from "../components/pages/productsPage";

const Products = () => {
    const params = useParams();
    const { prodId, edit } = params;
    const isLoading = useSelector(getProductsLoadingStatus());
    const product = useSelector(getProductById(prodId));
    return (
        <div className="container py-5 bg-light">
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
                        { !isLoading && <ProductsPage/> }
                    </div>
                )
                    }
            </>
        </div>
    );
};

export default Products;
