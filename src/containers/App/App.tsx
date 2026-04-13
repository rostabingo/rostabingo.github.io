import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Game } from "../Game";

export const App: React.FC = () => {
    return (
        <Router basename="/">
            <Routes>
                <Route path="/" element={<Game letters={["B", "I", "N", "G", "O"]} />} />
                <Route path="/mars" element={<Game letters={["M", "A", "R", "S", "!"]} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};
