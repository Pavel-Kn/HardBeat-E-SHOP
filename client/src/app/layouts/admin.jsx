import React from "react";
import AdminPage from "../components/pages/adminPage";
import { useParams } from "react-router-dom";
import ProductCreatePage from "../components/pages/productCreatePage";

const Admin = () => {
    const params = useParams();
    const { create } = params;

    return (
        <div className="container py-5 bg-light">
            {create ? (
                <ProductCreatePage/>
            ) : (
                <AdminPage/>
            )}
        </div>
    );
};

export default Admin;
