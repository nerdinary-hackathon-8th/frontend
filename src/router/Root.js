import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Root() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            navigate("/login");
        } else {
            navigate("/home");
        }
    }, [navigate]);
    return (_jsx("div", { children: _jsx(Outlet, {}) }));
}
