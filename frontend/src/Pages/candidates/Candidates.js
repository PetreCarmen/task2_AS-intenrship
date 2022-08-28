import React, { useEffect, useState } from "react";
import Axios from "axios";
import CandidatesTable from "../../components/example/CandidatesTable";
import { Button, Modal } from "react-bootstrap";
import CandidatesFormModal from "./CandidatesFormModal";


function Candidates() {
  const [tableData, setTableData] = useState([]);

  const updateTableData = () => {
    Axios({
      method: "GET",
      url: "http://localhost:3001/candidates",
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

  const handleSave = (newCandidate) => {
    Axios({ url: "http://localhost:3001/candidate", method: "POST", data: newCandidate })
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
        Add candidate
      </Button>

      <Modal show={show} onHide={handleClose}>
        <CandidatesFormModal actionTitle={"Add Candidate"} handleSave={handleSave} handleClose={handleClose}/>
      </Modal>
      <div className="Candidates">
        <CandidatesTable tableData={tableData} refreshTable={updateTableData}/>
      </div>
    </>
  );
}

export default Candidates;
