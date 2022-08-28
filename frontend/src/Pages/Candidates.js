import React from "react";
import Axios from "axios";
import CandidatesTable from "../components/example/CandidatesTable";


function Candidates(){
    Axios({
        method: "GET",
        url: "http://localhost:3001/projects",
      }).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log("err", err);
    });
    return (
        <div className="Candidates">
            <CandidatesTable/>
        </div>
    );
}

export default Candidates;