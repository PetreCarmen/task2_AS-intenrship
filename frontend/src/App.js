
import React from "react";
import './App.css';
import TableExample from "./components/example/TableExample";
//import Axios from "axios";
import Navbar from "./Navbar";
import Projects from "./Pages/Projects";
import Candidates from "./Pages/Candidates";
import Home from "./Pages/Home";
import { Route, Routes} from "react-router-dom";
function App() {

  /*  Axios({
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
*/
    return (
        <>
            <Navbar />
            <div class = "container"> 
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/projects" element = {<Projects />} />
                    <Route path="/candidates" element = {<Candidates />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
