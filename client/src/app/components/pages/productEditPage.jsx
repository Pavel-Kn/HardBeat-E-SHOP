import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "../common/form/textField";
import TextAreaField from "../common/form/textAreaField";
import BackHistoryButton from "../common/backButton";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProductData, updateProduct } from "../../store/products";
import { validator } from "../../utils/validator";
import propTypes from "prop-types";

const ProductEditPage = ({ prodId }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState();
    const currentProduct = useSelector(getCurrentProductData(prodId));
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(currentProduct);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        dispatch(
            updateProduct(data)
        );
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
    useEffect(() => validate(), [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    return (
        <div>
            <h2> Change product card </h2>
            <BackHistoryButton />
            <div>
                <div>
                    { !isLoading ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Model"
                                name="model"
                                value={data.model}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Category"
                                name="category"
                                value={data.category}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Image"
                                name="img"
                                value={data.image}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextAreaField
                                label="Text"
                                name="text"
                                value={data.descriptionFull}
                                onChange={handleChange}
                                error={errors.text}
                            />
                            <TextAreaField
                                label="Text"
                                name="text"
                                value={data.descriptionShort}
                                onChange={handleChange}
                                error={errors.text}
                            />
                            <TextField
                                label="Rate"
                                name="rate"
                                value={data.rating}
                                onChange={handleChange}
                                error={errors.rate}
                            />
                            <TextField
                                label="Quantity"
                                name="quantity"
                                value={data.quantity}
                                onChange={handleChange}
                                error={errors.rate}
                            />
                            <TextField
                                label="Price"
                                name="price"
                                value={data.price}
                                onChange={handleChange}
                                error={errors.price}
                            />
                            <div>
                                <button onClick={() => history.goBack()}>
                                    <i className="bi bi-caret-left"></i> Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};

ProductEditPage.propTypes = {
    prodId: propTypes.string
};

export default ProductEditPage;