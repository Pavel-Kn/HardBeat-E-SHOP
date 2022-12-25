import React from "react";
import PropTypes from "prop-types";
import UserCard from "../ui/userCard";
import { useSelector } from "react-redux";
import { getUserById } from "../../store/users";
import LoadingSpinner from "../ui/loadingSpinner";

const UserPage = ({ userId }) => {
    const user = useSelector(getUserById(userId));

    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                    </div>
                </div>
            </div>
        );
    } else {
        return <LoadingSpinner/>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
