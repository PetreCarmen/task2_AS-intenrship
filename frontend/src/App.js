
import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Projects from "./Pages/Projects";
import Candidates from "./Pages/Candidates";
import TableExample from "./components/example/TableExample";
import Axios from "axios";

function App() {

    Axios({
        method: "GET",
        url: "http://localhost:3001/projects",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        console.log(res.data.message);
      }).catch(err => {
        console.log("err", err);
    });


    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Routes>
                        <Route path="/projects" element={< Projects />}/>
                        <Route path="/candidates" element={< Candidates />}/>
                    </Routes>
                </Router>
            </header>
            <TableExample/>
        </div>
    );
}

export default App;
