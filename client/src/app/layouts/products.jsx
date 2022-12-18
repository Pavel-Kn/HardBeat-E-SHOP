import React from "react";
import ProductsList from "../components/ui/productsList";
import { useSelector } from "react-redux";
import { getProductById, getProducts, getProductsLoadingStatus } from "../store/products";
import { useParams } from "react-router-dom";
import SingleProductPage from "../components/pages/singleProductPage";
import ProductCardEdit from "../components/pages/productEdit";

const Products = () => {
    const params = useParams();
    const { productId, edit } = params;
    const isLoading = useSelector(getProductsLoadingStatus());
    const productsList = useSelector(getProducts());
    const product = useSelector(getProductById(productId));
    console.log(product);
    return (
        <div className="container">
            <>
                {productId ? (
                    edit ? (
                            <ProductCardEdit productId={productId}/>
                        )
                        : (
                            !isLoading && <SingleProductPage product={ product }/>
                        )
                ) : (
                    <div className="container__products">
                        <h2 className="subtitle">Our products.</h2>
                        { !isLoading && <ProductsList productsList={productsList}/> }
                    </div>
                )}
            </>
        </div>
    );
};

export default Products;