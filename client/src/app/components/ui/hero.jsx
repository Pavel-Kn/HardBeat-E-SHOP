import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-top.jpg";

const Hero = () => {
    return (
        <div className="bg-image p-5 text-center">
            <img width={1200} src={heroImage}/>
            <h1 className="text-dark"> Music is our life, live with music </h1>
            <Link to="/products" className="btn btn-info">
                SHOP NOW
            </Link>
        </div>
    );
};

export default Hero;
