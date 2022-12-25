import React from "react";
import spinner from "../../assets/spinner.JPG";

const LoadingSpinner = () => {
    return (
        <div className="text-center">
            <div className="spinner-border spinner-border-sm fw-bold shadow text-info"
                 role="status"
                 style={{ width: "20rem", height: "20rem" }}>
                <img className="rounded-circle w-75 mb-5" src={spinner}/>
            </div>
            <h1 className="text-info">Please wait...</h1>
        </div>
    );
};

export default LoadingSpinner;
