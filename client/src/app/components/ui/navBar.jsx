import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoggedIn } from "../../store/users";
import NavProfile from "./navProfile";
import brandImg from "../../assets/brand-logo.JPG";
const NavBar = () => {
    const { cartItems } = useSelector(state => state.cart);
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        <nav className="navbar navbar-dark navbar-expand-md sticky-top bg-black py-3 ">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center shadow align-items-center me-2" aria-current="page" to="/">
                    <img className="rounded-circle d-flex justify-content-center" width={50} src={brandImg}/>
                    <span className="fs-3">
                        Hard Beat Music
                    </span>
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/products">
                                Products
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex align-content-center">
                        <div className="d-flex align-items-center ">
                            <Link className="btn nav-link link-dark" to="/cart">
                                <i className="bi bi-cart3 fs-4 text-white">
                                    <span className="badge rounded-pill bg-light fs-6 text-dark">{cartItems.length}</span>
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
            </div>
        </nav>
    );
};

export default NavBar;
