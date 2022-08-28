import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Projects from "./Pages/Projects";
import Candidates from "./Pages/Candidates";
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/candidates" element={<Candidates/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
