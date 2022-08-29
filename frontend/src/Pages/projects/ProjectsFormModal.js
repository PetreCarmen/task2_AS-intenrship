import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

export default function ProjectsFormModal(params) {
  const [projectNo, setNumber] = useState( params.Project_no || 0);
  const [description, setDescription] = useState( params.Project_short_description || "");
  const [requestDate, setRequestDate] = useState((params.Request_date && params.Request_date.substring(0, 10)) || "");
  const [projectStartDate, setStartDate] = useState((params.Start_date && params.Start_date.substring(0, 10)) || "");
  const [projectDuration, setDuration] = useState(params.Duration || 0);
  const [projectCurrency, setCurrency] = useState(params.Project_currency || "");
  const [client, setClient] = useState(params.Client || "");
  const [location, setLocation] = useState(params.Working_location || "");
  const [travelReq, setTravelReq] = useState(params.Travel_required || "");
  const [members, setMembers] = useState(params.Team_members || "");
  const [workingHours, setWorkingHours] = useState(params.Working_hours || "");
  const [mandatorySkills, setMandatorySkills] = useState(params.Mandatory_skills || "");
  const [skills, setSkills] = useState(params.Nice_to_have_skills || "");
  const [toDo, setToDo] = useState(params.To_Do || "");


  const createHandler = (setter) => {
    return (event) => setter(event.target.value);
  }

  const handleNumberChange = createHandler(setNumber);
  const handleDescriptionChange = createHandler(setDescription);
  const handleRequestDateChange = createHandler(setRequestDate)
  const handleStartDateChange = createHandler(setStartDate);
  const handleDurationChange = createHandler(setDuration);
  const handleCurrencyChange = createHandler(setCurrency);
  const handleClientChange = createHandler(setClient);
  const handleWorkLocationChange = createHandler(setLocation);
  const handleTravelReqChange = createHandler(setTravelReq);
  const handleTeamMembersChange = createHandler(setMembers);
  const handleWorkingHoursChange = createHandler(setWorkingHours);
  const handleMandatorySkillsChange = createHandler(setMandatorySkills);
  const handleNiceToHaveSkillsChange = createHandler(setSkills);
  const handleToDoChange = createHandler(setToDo);



  const handleSave = () => {
    const project = {
        Project_no: projectNo,
        Project_short_description: description,
        Request_date: requestDate,
        Project_start_date: projectStartDate,
        Project_duration: projectDuration,
        Project_currency: projectCurrency,
        Client: client,
        Working_location: location,
        Travel_required: travelReq,
        Team_members: members,
        Working_hours: workingHours,
        Mandatory_skills: mandatorySkills,
        Nice_to_have_skills: skills,
        To_Do: toDo,
    };
    if (params.ID !== undefined) {
      project.ID = params.ID;
    }
    params.handleSave(project);
  }

  return <>
    <Modal.Header closeButton>
      <Modal.Title>{params.actionTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="md-3" controlId="projectNo">
          <Form.Label>Project number</Form.Label>
          <Form.Control type="projectNo" placeholder="Enter project number" value={projectNo} onChange={handleNumberChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="description">
          <Form.Label>Project short description</Form.Label>
          <Form.Control type="text" placeholder="Enter project short description" value={description} onChange={handleDescriptionChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="reqDate">
          <Form.Label>Request date</Form.Label>
          <Form.Control type="date" placeholder="Enter request date" value={requestDate} onChange={handleRequestDateChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="projectStartDate">
          <Form.Label>Start date</Form.Label>
          <Form.Control type="date" placeholder="Enter start date" value={projectStartDate} onChange={handleStartDateChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="projectDuration">
          <Form.Label>Project duration</Form.Label>
          <Form.Control type="number" placeholder="Enter project duration" value={projectDuration} onChange={handleDurationChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="projectCurrency">
          <Form.Label>Project currency</Form.Label>
          <Form.Control type="text" placeholder="Enter project currency" value={projectCurrency} onChange={handleCurrencyChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="client">
          <Form.Label>Client</Form.Label>
          <Form.Control type="text" placeholder="Enter client" value={client} onChange={handleClientChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="location">
          <Form.Label>Working location</Form.Label>
          <Form.Control type="number" placeholder="Enter working location" value={location} onChange={handleWorkLocationChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="travelReq">
          <Form.Label>Travel required</Form.Label>
          <Form.Control type="text" placeholder="Enter travel required" value={travelReq} onChange={handleTravelReqChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="members">
          <Form.Label>Team members</Form.Label>
          <Form.Control type="text" placeholder="Enter working members" value={members} onChange={handleTeamMembersChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="workingHours">
          <Form.Label>Working hours</Form.Label>
          <Form.Control type="text" placeholder="Enter working hours" value={workingHours} onChange={handleWorkingHoursChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="mandatorySkills">
          <Form.Label>Mandatory skills</Form.Label>
          <Form.Control type="text" placeholder="Enter mandatory skills" value={mandatorySkills} onChange={handleMandatorySkillsChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="skills">
          <Form.Label>Nice to have skills</Form.Label>
          <Form.Control type="text" placeholder="Enter nice to have skills" value={skills} onChange={handleNiceToHaveSkillsChange}/>
        </Form.Group>
        <Form.Group className="md-3" controlId="toDo">
          <Form.Label>To do</Form.Label>
          <Form.Control type="text" placeholder="Enter to do" value={toDo} onChange={handleToDoChange}/>
        </Form.Group>
      </Form>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={params.handleClose}>Close</Button>
      <Button variant="primary" onClick={handleSave}>Save Project</Button>
    </Modal.Footer>
  </>
}
