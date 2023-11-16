import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="*" element={<h2>Page not found...</h2>} />
            </Routes>
        </Router>
    );
};

export default AllRoutes;