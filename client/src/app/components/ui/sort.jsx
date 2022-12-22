import React from "react";
import { getProducts } from "../../store/products";
import { useSelector } from "react-redux";
import SearchStatus from "./searchStatus";

const Sort = () => {
    const filteredList = useSelector(getProducts());
    return (
        <div className='row'>
            SORT:
            <SearchStatus length={filteredList.length}/>
            <h5 className='col-md-5'>{filteredList.length} products found</h5>
            <form className='col-md-5'>
                <label htmlFor='sort'>Sort by: </label>
                <select
                    name='sort'
                    id='sort'
                    // value={sort}
                    // onChange={updateSort}
                    className='form-select'
                >
                    <option value='name-a'>name(a-z)</option>
                    <option value='name-z'>name(z-a)</option>
                    <option value='price-lowest'>price(lowest)</option>
                    <option value='price-highest'>price(highest)</option>
                </select>
            </form>
            <hr />
        </div>
    );
};

export default Sort;
