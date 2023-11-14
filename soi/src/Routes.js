import React from "react";
import { Route, Routes } from "react-router-dom";
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h2>Page not found...</h2>} />
        </Routes>
    );
};

export default AllRoutes;