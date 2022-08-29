import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProjectsTable from "../../components/example/ProjectsTable";
import { Button, Modal } from "react-bootstrap";
import ProjectsFormModal from "./ProjectsFormModal";


function Projects() {
  const [tableData, setTableData] = useState([]);

  const updateTableData = () => {
    Axios({
      method: "GET",
      url: "http://localhost:3001/projects",
    }).then(res => {
      setTableData(res.data);
    }).catch(err => {
      console.error("err", err);
    });
  };

  useEffect(() => {
    updateTableData();
  }, []);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleSave = (newProject) => {
    Axios({ url: "http://localhost:3001/project", method: "POST", data: newProject })
      .then(() => {
        setShow(false);
        updateTableData();
      })
      .catch(err => {
        setShow(false);
        alert(`could not save candidate error: ${err}`);
      });
  };


  return (<>
      <Button variant="primary" onClick={handleShow}>
        Add project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ProjectsFormModal actionTitle={"Add Project"} handleSave={handleSave} handleClose={handleClose}/>
      </Modal>
      <div className="Candidates">
        <ProjectsTable tableData={tableData} refreshTable={updateTableData}/>
      </div>
    </>
  );
}

export default Projects;
