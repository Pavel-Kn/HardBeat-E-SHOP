import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    if (!currentUser) return "loading";
    return (
        <div className="dropdown " onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="fw-bold link-info me-2">{currentUser.name}</div>
                <img
                    src={currentUser.image}
                    alt=""
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div className={"w-100 dropdown-menu bg-light" + (isOpen ? " show" : "")}>
                {currentUser.isAdmin ? (
                    <Link to="/admin" className="dropdown-item">
                        Admin Panel
                    </Link>
                ) : (
                    ""
                )}
                <Link to="/logout" className="dropdown-item">
                    Log Out
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
