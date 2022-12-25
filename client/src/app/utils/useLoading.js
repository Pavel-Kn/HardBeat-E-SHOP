import { useState, useEffect } from "react";

const useLoading = (data, loadingStatus) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (data && data.length > 0 && loadingStatus === false) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [data]);

    return loading;
};

export default useLoading;
