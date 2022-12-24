import React from "react";
import PropTypes from "prop-types";
import SelectField from "../common/form/selectField";

const Sort = ({ onSort, selectedSort }) => {
    const sortArray = [
        { name: "a-z", value: "asc" },
        { name: "z-a", value: "desc" }
    ];

    const sortList = sortArray.map((cat) => ({
        label: cat.name,
        value: cat.name
    }));

    const handleSort = (item) => {
        if (selectedSort.path === item.name) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    return (
        <div className="col-3 m-auto ">
            <form className="w-50">
             <SelectField
                 name="name"
                 defaultOption="Choose..."
                 options={sortList}
                 onChange={handleSort}
             />
            </form>
        </div>
    );
};

Sort.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default Sort;
