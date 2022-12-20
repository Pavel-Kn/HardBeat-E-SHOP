import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/pages/userPage";
const Users = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            <UserPage userId={userId} />
        </>
    );
};

export default Users;
