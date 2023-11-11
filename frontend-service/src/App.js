import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import AgregarEstudianteComponent from "./components/AgregarEstudianteComponent";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<MainComponent />} />
                    <Route path="/agregar_estudiante" element={<AgregarEstudianteComponent />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;