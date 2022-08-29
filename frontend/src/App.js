import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Projects from "./Pages/projects/Projects";
import Candidates from "./Pages/candidates/Candidates";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Projects/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/candidates" element={<Candidates/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
