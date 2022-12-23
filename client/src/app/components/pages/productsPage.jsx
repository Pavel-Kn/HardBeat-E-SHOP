import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/pagination";
import GroupList from "../common/groupList";
import SearchStatus from "../ui/searchStatus";
import _ from "lodash";
import { getCategories, getCategoriesLoadingStatus } from "../../store/categories";
import { useSelector } from "react-redux";
import { getCurrentProductId, getProducts } from "../../store/products";
import ProductsList from "../ui/productsList";
import Sort from "../ui/sort";

const ProductsPage = () => {
    const products = useSelector(getProducts());
    const currentProductId = useSelector(getCurrentProductId());

    const categories = useSelector(getCategories());
    const categoriesLoading = useSelector(getCategoriesLoadingStatus());
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 6;

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchQuery]);

    const handleProfessionSelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedCategory(item);
    };
    const handleSearchQuery = ({ target }) => {
        setSelectedCategory(undefined);
        setSearchQuery(target.value);
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
        console.log(item);
    };

    function filterUsers(data) {
        const filteredProducts = searchQuery
            ? data.filter(
                (products) =>
                    products.name
                        .toLowerCase()
                        .indexOf(searchQuery.toLowerCase()) !== -1
            )
            : selectedCategory
                ? data.filter((product) => product.category === selectedCategory.name)
                : data;
        return filteredProducts.filter((p) => p._id !== currentProductId);
    }
    const filteredProducts = filterUsers(products);
    const count = filteredProducts.length;
    const sortedProducts = _.orderBy(filteredProducts, [sortBy.path], [sortBy.order]);
    const productsCrop = paginate(sortedProducts, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedCategory();
    };

    return (
        <div className="d-flex">
            {categories && !categoriesLoading && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedCategory}
                        items={categories}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Clear
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                <input
                    className="w-25"
                    type="text"
                    name="searchQuery"
                    placeholder="Search..."
                    onChange={handleSearchQuery}
                    value={searchQuery}
                />
                <Sort
                    onSort={handleSort}
                    selectedSort={sortBy}
                />
                {count > 0 && (
                    <ProductsList
                        products={productsCrop}
                    />
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};
ProductsPage.propTypes = {
    products: PropTypes.array
};

export default ProductsPage;
