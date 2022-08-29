import Task2Table from "../table/Table";
import ProjectsFormModal from "../../Pages/projects/ProjectsFormModal";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Axios from "axios";

const doAlert = (rowData) => {
    alert(`button alert for row with id: ${rowData["rowNo"]} was clicked` )
}

function ProjectsTable(params) {
    const [projectsToUpdate, setProjectToUpdate] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const handleClose = () => {
        setShowUpdateForm(false);
    };

    const update = (project) => {
        setProjectToUpdate(project);
        setShowUpdateForm(true);
    }

    const handleSave = (project) => {
        Axios({
            url: `http://localhost:3001/candidate/${project.ID}`,
            method: 'PUT',
            data: project,
        }).then(_ => {
            params.refreshTable();
            setShowUpdateForm(false);
        }).catch(err => {
            alert(`could not update project: ${JSON.stringify(project)}`)
            console.error("could not update project", project, err)
        })
    }
    const tableHeadDefs = {
        extractRowKey: (rowData) => {
            return rowData["ID"]
        },
        columnDefinitions: [
            {
                columnName: "Project number",
                renderCell: (rowData) => {
                    return rowData["Project_no"];
                },
            },
            {
                columnName: "Project short description",
                renderCell: (rowData) => {
                    return rowData["Project_short_description"];
                },
            },
            {
                columnName: "Request date",
                renderCell: (rowData) => {
                    return rowData["Request_date"];
                },
            },
            {
                columnName: "Project start date",
                renderCell: (rowData) => {
                    return rowData["Project_start_date"];
                },
            },
            {
                columnName: "ProjecProject durationt",
                renderCell: (rowData) => {
                    return rowData["Project_duration"];
                },
            }, 
             {
                columnName: "Project currency",
                renderCell: (rowData) => {
                    return rowData["Project_currency"];
                },
            },
            {
                columnName: "Client",
                renderCell: (rowData) => {
                    return rowData["Client"];
                },
            },
            {
                columnName: "Working location",
                renderCell: (rowData) => {
                    return rowData["Working_location"];
                },
            },
            {
                columnName: "Travel required",
                renderCell: (rowData) => {
                    return rowData["Travel_required"];
                },
            },
            {
                columnName: "Team members",
                renderCell: (rowData) => {
                    return rowData["Team_members"];
                },
            },
            {
                columnName: "Working hours",
                renderCell: (rowData) => {
                    return rowData["Working_hours"];
                },
            },
            {
                columnName: "Mandatory skills",
                renderCell: (rowData) => {
                    return rowData["Mandatory_skills"];
                },
            },
            {
                columnName: "Nice to have skills",
                renderCell: (rowData) => {
                    return rowData["Nice_to_have_skills"];
                },
            },
            {
                columnName: "To Do",
                renderCell: (rowData) => {
                    return rowData["To_Do"];
                },
            },
            {
                columnName: "Actions",
                renderCell: rowData => {
                    return <><button onClick={update.bind(this, rowData)}>Update</button>
                     <button onClick={doAlert.bind(this, rowData)}>Delete</button></>
                } // here you can render data as well as components(for example a delete button, an update button, etc.)
            }
        ]
    };

    const tableData = params.tableData;

    // in this property you can add a component that is above the row with the column names
    // here you can insert for example a button which creates the Add Project modal and finally
    // updates the state of your Projects component(from Pages folder). Then the updated state
    // of the Projects component will be propagated in the table through parameters and render() eventually
    // being called
    const tableHeadComponent = <p></p>

    return <div>
        <h1>Projects</h1>
        <Modal show={showUpdateForm} onHide={handleClose} >
            <ProjectsFormModal handleSave={handleSave}  handleClose={handleClose}{...projectsToUpdate} ></ProjectsFormModal>
        </Modal>
        <Task2Table tableHeadDefinitions={tableHeadDefs} tableData={tableData} tableHeadComponent={tableHeadComponent}/>
    </div>
}

export default ProjectsTable
