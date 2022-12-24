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
        <h4 className="col-3 align-content-center align-items-center m-auto">
            <span
                className={"badge " + (length > 0 ? "bg-secondary" : "bg-danger")}
            >Find:
                {length > 0
                    ? ` ${length + " " + renderPhrase(length)}`
                    : " no one"}
            </span>
        </h4>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
