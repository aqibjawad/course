import React, { useRef, useState, useEffect } from "react";


import {
    Form,
    Card,
    Container,
    Row,
    Col, Table, Button, Modal, FormControl
} from "react-bootstrap";

import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';

import { POST, GETID, DELETE, PUT, GET } from "../../apicontroller/ApiController"

import { toast } from "react-toastify";

const Session = () => {

    const sessionRef = useRef();
    const departmentRef = useRef();

    const submit = async (event) => {
        event.preventDefault();
        const formData = {
            session: sessionRef.current.value,
            department: departmentRef.current.value,
        };
        POST("session", formData).then((res) => {
            toast("Session Added Successfully")
            fetchData();

        });
    };

    // Edit Function

    const [sessionid, setSessionId] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Edit FUNCTION
    const edit = async (event, id) => {
        setSessionId(id);
        GETID("session", id, "");
        handleShow();
    };

    // Edit Ref
    const esessionRef = useRef();
    const edepartmentRef = useRef();


    // Send edited data to the databse finction
    const eSubmit = (event, id) => {
        event.preventDefault();
        const formData = {
            session: esessionRef.current.value,
            department: edepartmentRef.current.value,
        };

        PUT("session", id, formData).then((res) => {
            toast("Session Updated Successfully");
            fetchData();
        });
    };


    const [sessions, setSessions] = useState(false);

    const [departments, setDepartments] = useState([]);

    const fetchData = async () => {
        GET("session").then((result) => {
            setSessions(result);
        });

        GET("department").then((result) => {
            setDepartments(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    const remove = async (event, id) => {
        await DELETE("session/delete", id, "");
        fetchData();
    };

    return (
        <div>
            <p style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "-3px", fontStyle: "normal", textAlign: "center", fontFamily: "serif" }}>Session</p>
            <Row>

                <Col sm={4}>
                    <Card className="mt-3">
                        <Card.Body>
                            <Form>
                                <div className="row">
                                    <Col md={12}>

                                        <Form.Group className="mt-3">
                                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Department </Form.Label>
                                            <Form.Control ref={departmentRef} className="form-control" as="select">
                                                <option value=""> --- Select --- </option>
                                                {departments.map((department) => (
                                                    <option value={department.id}>{department.department}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>

                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="">
                                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}>   Session </Form.Label>
                                            <Form.Control ref={sessionRef} type="text" placeholder="hint i.e; 2019" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Button onClick={submit} variant="primary" type="submit" size="lg" block style={{ fontFamily: "serif", fontWeight: "normal", backgroundColor: "blue" }}>
                                                Add Session
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={8} className="mt-5">
                    <div className="card" style={{ fontFamily: "serif", fontWeight: "normal" }}>
                        <div className="card-body">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th> Department </th>
                                        <th>Session </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sessions && sessions.map((session) => (

                                        <tr>
                                            <td> {session.department} </td>
                                            <td> {session.session} </td>

                                            <td>
                                                <AiFillDelete style={{ color: 'red' }} onClick={(e) => remove(e, session.id)} />
                                                <BsFillPencilFill style={{ color: 'blue', marginLeft: '1rem' }} onClick={(e) => edit(e, session.id)} />
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontFamily: "serif", fontWeight: "normal" }}>  Edit Details </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="">
                        <Col md={6}>
                            <Form.Label htmlFor="basic-url" style={{ fontFamily: "serif", fontWeight: "normal" }}> Department </Form.Label>
                            <Form.Control ref={edepartmentRef} className="form-control" as="select">
                                <option value=""> --- Select --- </option>
                                {departments.map((department) => (
                                    <option value={department.id}>{department.department}</option>
                                ))}
                            </Form.Control>
                        </Col>

                        <Col md={6}>
                            <Form.Label htmlFor="basic-url" style={{ fontFamily: "serif", fontWeight: "normal" }}> Session </Form.Label>
                            <FormControl ref={esessionRef} className="form-control" />
                        </Col>
                    </Row>
                </Modal.Body>
                <div className="my-2 pl-3 mb-5">
                    <Button className="btn-custom border-0 mx-3" variant="danger" onClick={(e) => eSubmit(e, sessionid)} style={{ fontFamily: "serif", fontWeight: "normal" }}>
                        Modify
                    </Button>
                </div>
            </Modal>
        </div>
    )
};
export default Session