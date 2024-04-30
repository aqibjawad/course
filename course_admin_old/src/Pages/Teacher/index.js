import React, { useRef, useState, useEffect } from 'react';

import { FormControl, Container, Row, Col, Form, Button, Modal, Table, Card } from 'react-bootstrap';

import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { toast } from "react-toastify";

import { POST, GETID, DELETE, PUT, GET } from "../../apicontroller/ApiController"

const Teacher = () => {

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const departmentRef = useRef();
    const passwordRef = useRef();

    const submit = async (event) => {
        event.preventDefault();
        const formData = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            department: departmentRef.current.value,
            role: 3

        };
        POST("auth", formData).then((res) => {
            toast("Teacher Added Successfully")
            fetchData();
        });
    };
    // Edit Function

    const [teacherid, setTeacherId] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Edit FUNCTION
    const edit = async (event, id) => {
        setTeacherId(id);
        GETID("teacher", id, "");
        handleShow();
    };

    // Edit Ref
    const efirstnameRef = useRef();
    const elastnameRef = useRef();
    const eemailRef = useRef();
    const edepartmentRef = useRef();
    const epasswordRef = useRef();


    // Send edited data to the databse finction
    const eSubmit = (event, id) => {
        event.preventDefault();
        const formData = {
            firstname: efirstnameRef.current.value,
            lastname: elastnameRef.current.value,
            email: eemailRef.current.value,
            password: epasswordRef.current.value,
            department: edepartmentRef.current.value,
            role: 3
        };

        PUT("auth/teacher", id, formData).then((res) => {
            toast("Teacher Updated Successfully");
            fetchData();
        });
    };

    const [teachers, setTeachers] = useState(false);

    const fetchdata = async () => {
        GET("auth/teacher").then((result) => {
            setTeachers(result);
        });
    };

    useEffect(() => {
        fetchdata();
    }, [])

    const remove = async (event, id) => {
        await DELETE("teacher/delete", id, "");
        fetchdata();
    };

    const [departments, setDepartment] = useState([]);

    const fetchData = async () => {
        GET("department").then((result) => {
            setDepartment(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <p style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "-3px", fontStyle: "normal", textAlign: "center", fontFamily: "serif" }}> Teacher 's Profiles </p>
            <Row>
                <Col sm={4}>
                    <Card className="mt-5">
                        <Card.Body>
                            <Container className='card p-4' style={{ borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                                <Form>
                                    <div className="row">
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> First Name </Form.Label>
                                                <Form.Control ref={firstnameRef} type="text" placeholder="Enter Name" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Last Name </Form.Label>
                                                <Form.Control ref={lastnameRef} type="text" placeholder="Enter Name" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Email </Form.Label>
                                                <Form.Control ref={emailRef} type="email" placeholder="Enter Email" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Password </Form.Label>
                                                <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" />
                                            </Form.Group>
                                        </Col>

                                        <Col md={12}>
                                            <Form.Group className="mt-3">
                                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Department </Form.Label>
                                                <Form.Control ref={departmentRef} className="form-control" as="select"  >
                                                    <option value=""> --- Select --- </option>
                                                    {departments.map((department) => (
                                                        <option value={department.id}>{department.department}</option>
                                                    ))}
                                                </Form.Control>
                                            </Form.Group>

                                        </Col>

                                        <Col md={12}>
                                            <Form.Group className='mt-3'>
                                                <Button onClick={submit} variant="primary" type="submit" size="lg" block style={{ fontFamily: "serif", fontWeight: "normal" }}>
                                                    Add Teacher
                                                </Button>
                                            </Form.Group>
                                        </Col>
                                    </div>
                                </Form>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={8} className="mt-5">
                    <div className="card" style={{ fontFamily: "serif", fontWeight: "normal" }}>
                        <div className="card-body">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th> Name</th>
                                        <th>Email</th>
                                        <th> Department </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teachers && teachers.map((teacher) => (

                                        <tr>
                                            <td> {teacher.firstname + " " + teacher.lastname} </td>
                                            <td> {teacher.email} </td>
                                            <td> {teacher.department} </td>
                                            <td>
                                                <AiFillDelete style={{ color: 'red' }} onClick={(e) => remove(e, teacher.id)} />
                                                <BsFillPencilFill style={{ color: 'blue', marginLeft: '1rem' }} onClick={(e) => edit(e, teacher.id)} />
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
                        <Col>

                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> First Name </Form.Label>
                            <Form.Control ref={efirstnameRef} type="text" placeholder="Enter First Name" />
                        </Col>

                        <Col>
                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Last Name </Form.Label>
                            <Form.Control ref={elastnameRef} type="text" placeholder="Enter Last Name" />
                        </Col>

                        <Col>
                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Email </Form.Label>
                            <Form.Control ref={eemailRef} type="email" placeholder="Enter Email" />

                        </Col>

                        <Col>
                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Password </Form.Label>
                            <Form.Control ref={epasswordRef} type="password" placeholder="Enter Password" />
                        </Col>

                        <Col md={6}>

                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Department </Form.Label>
                            <Form.Control ref={edepartmentRef} className="form-control" as="select"  >
                                <option value=""> --- Select --- </option>
                                {departments.map((department) => (
                                    <option value={department.id}>{department.department}</option>
                                ))}
                            </Form.Control>
                        </Col>
                    </Row>
                </Modal.Body>
                <div className="my-2 pl-3 mb-5">
                    <Button className="btn-custom border-0 mx-3" variant="danger" onClick={(e) => eSubmit(e, teacherid)} style={{ fontFamily: "serif", fontWeight: "normal" }}>
                        Modify
                    </Button>
                </div>
            </Modal>
        </div >
    );

};
export default Teacher;