import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radio.Field";
import CheckBoxField from "../common/form/checkBoxField";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/users";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: "",
        sex: "male",
        name: "",
        isAdmin: false,
        licence: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Email is required"
            },
            isEmail: {
                message: "Email entered incorrectly"
            }
        },
        name: {
            isRequired: {
                message: "Name is required"
            },
            min: {
                message: "Name must be at least 3 characters long",
                value: 3
            }
        },
        password: {
            isRequired: {
                message: "Password is required"
            },
            isCapitalSymbol: {
                message: "Password must contain at least one capital letter"
            },
            isContainDigit: {
                message: "Password must contain at least one number"
            },
            min: {
                message: "Password must be at least 8 characters long",
                value: 8
            }
        },
        licence: {
            isRequired: {
                message:
                    "You may not use our service without confirming the license agreement"
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
            <div className="mb-3">
                <TextField
                    label="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name}
                />
            </div>
            <div className="mb-3">
                <RadioField
                    options={[
                        { name: "Male", value: "male" },
                        { name: "Female", value: "female" }
                    ]}
                    value={data.sex}
                    name="sex"
                    onChange={handleChange}
                    label="What's your gender"
                />
            </div>
            <div className="mb-3">
                <CheckBoxField
                    value={data.licence}
                    onChange={handleChange}
                    name="licence"
                    error={errors.licence}
                >
                    Confirm <a>processing of personal data</a>
                </CheckBoxField>
            </div>
            <div className="mb-3">
                <button
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-primary w-100 shadow d-block"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
