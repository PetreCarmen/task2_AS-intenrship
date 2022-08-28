import React from "react";
import {useNavigate} from "react-router-dom";
import ProjectTable from "../components/example/ProjectTable";

function Projects()
{
    let navigate = useNavigate();
    return (
        <div className="Projects">
            <ProjectTable/>
        </div>
    );
}

export default Projects;