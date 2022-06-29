import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreatePending = ({ addPending, lengthPendings }) => {
    const [show, setShow] = useState(false);
    const [pendingForm, setPendingForm] = useState({
        id: lengthPendings,
        title: '',
        priority: '',
        description: '',
        status: 'Active'
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () => {
        console.log(pendingForm);
        addPending(pendingForm);
        setPendingForm({
            id: lengthPendings,
            title: '',
            priority: '',
            description: '',
            status: 'Active'
        })
        setShow(false);
    };

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create pending</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" 
                            name="title"
                            onChange={(event) =>  {
                                pendingForm.title = event.target.value;
                                setPendingForm(pendingForm);
                            }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPriority">
                            <Form.Label>Priority</Form.Label>
                            <Form.Select aria-label="Select priority"
                            name="priority" 
                            onChange={(event) =>  {
                                pendingForm.priority = event.target.value;
                                setPendingForm(pendingForm);
                            }}>
                                <option>Select priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} 
                            name="description"
                            onChange={(event) =>  {
                                pendingForm.description = event.target.value;
                                setPendingForm(pendingForm);
                            }}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default CreatePending;