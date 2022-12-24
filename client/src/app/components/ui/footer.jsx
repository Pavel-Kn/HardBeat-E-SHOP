import React from "react";
import footerImage from "../../assets/hero-bottom.jpg";

const Footer = () => {
    return (
        <div className="container py-5 bg-light">
        <div className="p-5 mb-4 bg-light rounded-3" style={{ backgroundImage: `url(${footerImage})`, height: "10rem" }}>
                <h2 className="display-6 fw-bold text-dark">Diplom Result.School</h2>
        </div>
        </div>
    );
};

export default Footer;
