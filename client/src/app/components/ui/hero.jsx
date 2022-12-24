import React from "react";
import heroImage from "../../assets/hero-top.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", height: "30rem" }}>
            <div className="container py-5 bg-light bg-opacity-25" >
                <h2 className="display-6 fw-bold text-light">Music is our life, live with music</h2>
                <p className="lead text-light">We offer a variety of products and services</p>
                <Link to="/products" className="btn btn-info">
                    SHOP NOW
                </Link>
            </div>
        </div>
    );
};

export default Hero;
