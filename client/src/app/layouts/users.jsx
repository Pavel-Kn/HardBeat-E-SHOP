import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import UsersLoader from "../components/ui/hoc/usersLoader";
const Users = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            <UsersLoader>
                <UserPage userId={userId} />
            </UsersLoader>
        </>
    );
};

export default Users;
