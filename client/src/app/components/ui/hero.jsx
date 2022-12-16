import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <h1> Music is our life, live with music </h1>
            <h1> Go to shopping  </h1>
            <Link to="/products" className="btn btn-primary">
                SHOP NOW
            </Link>
        </div>
    );
};

export default Hero;
