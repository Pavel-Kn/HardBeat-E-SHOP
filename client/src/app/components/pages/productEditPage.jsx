import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import TextAreaField from "../common/form/textAreaField";
import BackHistoryButton from "../common/backButton";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProductData, updateProduct } from "../../store/products";
import PropTypes from "prop-types";
import ProductsForm from "../common/form/productsForm";

const ProductEditPage = ({ prodId }) => {
    const [isLoading, setIsLoading] = useState(true);
    const currentProduct = useSelector(getCurrentProductData(prodId));
    const dispatch = useDispatch();
    const [data, setData] = useState();

    const handleSubmit = (data) => {
        dispatch(updateProduct(data));
    };
    useEffect(() => {
        if (currentProduct && !data) {
            setData({
                ...currentProduct
            });
        }
    }, [currentProduct, data]);

    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Enter name of product"
            }
        },
        text: {
            isRequired: {
                message: "Text has been not empty"
            }
        },
        price: {
            isRequired: {
                message: "Field price does not be empty"
            }
        }
    };

    return (
        <div>
            <h2> Change product card </h2>
            <BackHistoryButton />
            <div>
                <div>
                    { !isLoading ? (
                        <ProductsForm
                            onSubmit={handleSubmit}
                            validatorConfig={validatorConfig}
                            defaultData={data}
                        >
                            <TextField
                                label="Name"
                                name="name"
                            />
                            <TextField
                                label="Model"
                                name="model"
                            />
                            <TextField
                                label="Category"
                                name="category"
                            />
                            <TextField
                                label="Image"
                                name="image"
                            />
                            <TextAreaField
                                label="description Full"
                                name="descriptionFull"
                            />
                            <TextAreaField
                                label="description Short"
                                name="descriptionShort"
                            />
                            <TextField
                                label="Price"
                                name="price"
                                type="number"
                            />
                            <TextField
                                label="Rate"
                                name="rating"
                                type="number"
                            />
                            <TextField
                                label="Quantity"
                                name="quantity"
                                type="number"
                            />
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 mx-auto"
                                >
                                    Update
                                </button>
                            </div>
                        </ProductsForm>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};

ProductEditPage.propTypes = {
    prodId: PropTypes.string
};

export default ProductEditPage;
