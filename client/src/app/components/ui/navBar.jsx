import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoggedIn } from "../../store/users";
import NavProfile from "./navProfile";
const NavBar = () => {
    const { cartItems } = useSelector(state => state.cart);
    const isLoggedIn = useSelector(getIsLoggedIn());
    const { isAdmin } = useSelector(state => state.users);
    console.log(isAdmin);

    return (
        <nav className="navbar navbar-expand-md bg-light navbar-dark">
            <div className="container-fluid d-flex align-content-center">
                <ul className="nav">
                    <li className="nav-item ">
                        <Link className="nav-link fw-bold link-dark" aria-current="page" to="/">
                            Main
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fw-bold link-dark" aria-current="page" to="/products">
                            Products
                        </Link>
                    </li>
                </ul>
                <div className="d-flex align-content-center">
                    <div className="d-flex align-items-center ">
                        <Link className="nav-link link-dark" to="/cart">
                            <i className="bi bi-cart-fill">
                                <span className="badge rounded-pill badge-notification bg-danger">{cartItems.length}</span>
                            </i>
                        </Link>
                    </div>
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <Link
                            className="nav-link "
                            aria-current="page"
                            to="/login"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
