import React, { useState } from "react";
import { useParams } from "react-router";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";
import rnrImage from "../assets/rnr-star.jpg";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <div className="container py-5 bg-light">
                    {formType === "register" ? (
                        <>
                        <div className="row mb-4 mb-lg-5 ">
                            <div className="col-md-8 col-xl-6 text-center mx-auto">
                                <h1 className="fw-bold">Welcome</h1>
                                <h3 className="text-info">Sign Up</h3>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6 col-xl-4">
                                <div className="card">
                                    <div className="card-body text-center flex-column align-items-center">
                                        <div className="">
                                            <img className="rounded-circle" width={100} src={rnrImage} />
                                        </div>
                                        <RegisterForm />
                                        <p>Already have account?{" "}
                                            <a role="button" onClick={toggleFormType}>
                                                {" "}
                                                Sign In
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                    ) : (
                        <>
                            <div className="row mb-4 mb-lg-5 ">
                                <div className="col-md-8 col-xl-6 text-center mx-auto">
                                    <h1 className="fw-bold">Welcome back</h1>
                                    <h3 className="text-info">Sign In</h3>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6 col-xl-4">
                                    <div className="card">
                                        <div className="card-body text-center flex-column align-items-center">
                                            <div className="">
                                                <img className="rounded-circle" width={100} src={rnrImage} />
                                            </div>
                                            <LoginForm />
                                            <p>Dont have account?{" "}
                                                <a role="button" onClick={toggleFormType}>
                                                    {" "}
                                                    Sign Up
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
        </div>
    );
};

export default Login;
