import Task2Table from "../table/Table";
import CandidatesFormModal from "../../Pages/candidates/CandidatesFormModal";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Axios from "axios";

const doAlert = (rowData) => {
    alert(`button alert for row with id: ${rowData["ID"]} was clicked` )
}

function CandidatesTable(params) {
    const [candidateToUpdate, setCandidateToUpdate] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const handleClose = () => {
        setShowUpdateForm(false);
    };

    const update = (candidate) => {
        setCandidateToUpdate(candidate);
        setShowUpdateForm(true);
    }

    const handleSave = (candidate) => {
        Axios({
            url: `http://localhost:3001/candidate/${candidate.ID}`,
            method: 'PUT',
            data: candidate,
        }).then(_ => {
            params.refreshTable();
            setShowUpdateForm(false);
        }).catch(err => {
            alert(`could not update candidate: ${JSON.stringify(candidate)}`)
            console.error("could not update candidate", candidate, err)
        })
    }

    const handleDelete = (candidate) => {
        Axios({
            url: `http://localhost:3001/candidate/${candidate.ID}`,
            method: 'DELETE',
        }).then(_ => {
            params.refreshTable();
        }).catch(err => {
            alert(`could not update candidate: ${JSON.stringify(candidate)}`)
            console.error("could not update candidate", candidate, err)
        })
    }


    const tableHeadDefs = {
        extractRowKey: (rowData) => {
            return rowData["ID"]
        },
        columnDefinitions: [
            {
                columnName: "ID",
                renderCell: (rowData) => rowData["ID"],
            },
            {
                columnName: "Name",
                renderCell: (rowData) => rowData["Candidate_name"],
            },
            {
                columnName: "Email",
                renderCell: (rowData) => rowData["Email"],
            },
            {
                columnName: "Start date",
                renderCell: (rowData) => rowData["Start_date"],
            },
            {
                columnName: "Salary",
                renderCell: (rowData) => rowData["Salary"],
            },
            {
                columnName: "Candidate link",
                renderCell: (rowData) => rowData["Candidate_link"],
            }, 
             {
                columnName: "Candidate doc",
                renderCell: (_) => "",
            },
            {
                columnName: "Actions",
                renderCell: rowData => {
                    return <><button onClick={update.bind(this, rowData)}>Update</button>
                     <button onClick={handleDelete.bind(this, rowData)}>Delete</button></>
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
        <h1>Candidates</h1>
        <Modal show={showUpdateForm} onHide={handleClose} >
            <CandidatesFormModal handleSave={handleSave}  handleClose={handleClose}{...candidateToUpdate} ></CandidatesFormModal>
        </Modal>
        <Task2Table tableHeadDefinitions={tableHeadDefs} tableData={tableData} tableHeadComponent={tableHeadComponent}/>
    </div>
}

export default CandidatesTable
