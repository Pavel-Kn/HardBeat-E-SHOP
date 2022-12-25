import React from "react";
import { useHistory } from "react-router";
const BackHistoryButton = () => {
    const history = useHistory();
    return (
        <button className="btn btn-primary w-25 mb-5 mx-auto" onClick={() => history.goBack()}>
            <i className="bi bi-caret-left"></i>
            Back
        </button>
    );
};

export default BackHistoryButton;
