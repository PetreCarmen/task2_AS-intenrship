import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

export default function CandidatesFormModal(params) {
  const [name, setName] = useState( params.Candidate_name || "");
  const [email, setEmail] = useState( params.Email || "");
  // take only YYYY-MM-DD from the input if it is not falsey
  const [startDate, setStartDate] = useState(params.Start_date && params.Start_date.substring(0, 10) || "");
  const [salary, setSalary] = useState(params.Salary || 0);
  const [candidateLink, setCandidateLink] = useState(params.Candidate_link || "");


  const createHandler = (setter) => {
    return (event) => setter(event.target.value);
  }

  const handleNameChange = createHandler(setName);
  const handleEmailChange = createHandler(setEmail);
  const handleStartDateChange = createHandler(setStartDate)
  const handleSalaryChange = createHandler(setSalary);
  const handleCandidateLinkChange = createHandler(setCandidateLink);


  const handleSave = () => {
    const candidate = {
      Candidate_name: name,
      Email: email,
      Start_date: startDate,
      Salary: salary,
      Candidate_link: candidateLink,
    };
    if (params.ID !== undefined) {
      candidate.ID = params.ID;
    }
    params.handleSave(candidate);
  }

  return <>
    <Modal.Header closeButton>
      <Modal.Title>{params.actionTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="md-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={handleNameChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="startDate">
          <Form.Label>Start date</Form.Label>
          <Form.Control type="date" placeholder="Enter start date" value={startDate} onChange={handleStartDateChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="salary">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="number" placeholder="Enter salary" value={salary} onChange={handleSalaryChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="candidateLink">
          <Form.Label>Candidate link</Form.Label>
          <Form.Control type="url" placeholder="Enter candidate link" value={candidateLink} onChange={handleCandidateLinkChange}/>
        </Form.Group>
      </Form>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={params.handleClose}>Close</Button>
      <Button variant="primary" onClick={handleSave}>Save Candidate</Button>
    </Modal.Footer>
  </>
}
