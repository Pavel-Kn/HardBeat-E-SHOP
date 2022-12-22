import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, filterProducts } from "../../store/products";
import { getUniqueValues } from "../../utils/getUniqueValues";
import { getCategories } from "../../store/categories";

const FiltersProducts = () => {
    const [searchTerms, setSearchTerms] = useState({ text: "", category: "all" });
    const productsList = useSelector(getProducts());
    const dispatch = useDispatch();
    const categories = getUniqueValues(productsList, "category");
    const categoriesList = useSelector(getCategories());

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearchTerms({ ...searchTerms, [name]: value });
    };
    const handleClick = (e) => {

    };
    useEffect(() => {
        dispatch(filterProducts(searchTerms));
        console.log(searchTerms);
    }, [searchTerms]);

    console.log("searchTerms", searchTerms);
    return (
        <div className="content">
            <form onSubmit={e => e.preventDefault()}>
                {/* search */}
                <div>
                    <input
                        type='text'
                        name='text'
                        placeholder='search...'
                        className='form-control mb-3'
                        value={searchTerms.searchText}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                {/* categories */}
                <div className='mt-3'>
                    <h5>Сategories:</h5>
                    <select
                        name='category'
                        value={searchTerms.category}
                        onChange={(e) => handleChange(e)}
                        className="form-select"
                    >
                        {categories.map((item, index) => {
                            return (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            );
                        })}
                    </select>

                        {categoriesList.map((c) =>
                            <div key={c._id}>
                                <button className="btn btn-info m-1" onClick={handleClick}>
                                    {c.name}
                                </button>
                            </div>
                        )}
                </div>
            </form>
        </div>
    );
};

export default FiltersProducts;
