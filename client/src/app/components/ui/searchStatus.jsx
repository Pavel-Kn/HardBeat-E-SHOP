import React from "react";
import PropTypes from "prop-types";
const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) {
            return "products";
        }
        if (lastOne === 1) return "product";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "products";
        return "products";
    };
    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >Find:
                {length > 0
                    ? ` ${length + " " + renderPhrase(length)}`
                    : " no one"}
            </span>
        </h2>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
