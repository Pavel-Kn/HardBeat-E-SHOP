import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/users";
import TextAreaField from "../common/form/textAreaField";

const ProductCreateForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        model: "",
        category: "",
        image: "",
        descriptionFull: "",
        descriptionShort: "",
        price: 0,
        rating: 1,
        quantity: 0
    });
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            }
        },
        model: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            }
        },
        category: {
            isRequired: {
                message: "Пароль обязательна для заполнения"
            }
        },
        price: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без подтреврждения лицензионного соглашения"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = { ...data };
        dispatch(signUp(newData));
    };

    return (
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
                name="image"
                value={data.image}
                onChange={handleChange}
                error={errors.name}
            />
            <TextAreaField
                label="description Full"
                name="descriptionFull"
                value={data.descriptionFull}
                onChange={handleChange}
                error={errors.text}
            />
            <TextAreaField
                label="description Short"
                name="descriptionShort"
                value={data.descriptionShort}
                onChange={handleChange}
                error={errors.text}
            />
            <TextField
                label="Price"
                name="price"
                type="number"
                value={data.price}
                onChange={handleChange}
                error={errors.price}
            />
            <TextField
                label="Rate"
                name="rating"
                type="number"
                value={data.rating}
                onChange={handleChange}
                error={errors.rate}
            />
            <TextField
                label="Quantity"
                name="quantity"
                type="number"
                value={data.quantity}
                onChange={handleChange}
                error={errors.rate}
            />
            <div>
                <button
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-primary w-100 mx-auto"
                >
                    Update
                </button>
            </div>
        </form>
    );
};

export default ProductCreateForm;
