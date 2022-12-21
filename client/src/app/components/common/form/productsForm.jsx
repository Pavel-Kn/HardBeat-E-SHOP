import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../utils/validator";

const ProductsForm = ({ children, validatorConfig, onSubmit, defaultData }) => {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState(defaultData || {});

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

    const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = validate();
      if (!isValid) return;
      onSubmit(data);
    };

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            validate();
        }
    }, [data]);

    const isValid = Object.keys(errors).length === 0;

    const clonedElements = React.Children.map(children, (child) => {
        const childType = typeof child.type;
        let config = {};
        if (childType === "function") {
            if (!child.props.name) {
                throw new Error(
                    "Name property is required for field components",
                    child
                );
            }
            config = {
                ...child.props,
                onChange: handleChange,
                value: data[child.props.name] || "",
                error: errors[child.props.name]
            };
        }
        if (childType === "string") {
            if (childType === "button") {
                if (
                    child.props.type === "submit" ||
                    child.props.type === undefined
                ) {
                    config = { ...child.props, disabled: !isValid };
                }
            }
        }
        return React.cloneElement(child, config);
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>{clonedElements}</form>
        </div>
    );
};

ProductsForm.propTypes = {
    defaultData: PropTypes.object,
    validatorConfig: PropTypes.object,
    onSubmit: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProductsForm;
