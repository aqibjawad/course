import React, { useState, useEffect,useRef } from 'react';

import { Card ,Row, Col, Form, Button } from 'react-bootstrap';

import { toast } from "react-toastify";
import { POST, GET } from "../../apicontroller/ApiController"

const Assignment = () => {

    const [assignment, setAsssignment] = useState();
    const [assignmentlowest, setAsssignmentLowest] = useState();
    const [assignmentaverage, setAsssignmentAverage] = useState();
    const [assignmentbest, setAsssignmentBest] = useState();
    const [resultassignment, setResultAsssignment] = useState();

    const nameRef = useRef();
    
    const submit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        if (assignment) formData.append("files", assignment);
        if (assignmentlowest) formData.append("files", assignmentlowest);
        if (assignmentaverage) formData.append("files", assignmentaverage);
        if (assignmentbest) formData.append("files", assignmentbest);
        if (resultassignment) formData.append("files", resultassignment);

        POST("assignment", formData).then((res) => {
            toast("Course Assignment Added Successfully");
        });
    };

    const [coursefiles, setCoursefiles] = useState(false);

    const fetchData = async () => {
        GET("coursefile").then((result) => {
            setCoursefiles(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="main-body content-wrapper" style={{ backgroundColor: "white" }}>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-4">
                            <p className="m-0" style={{ fontWeight: "bold", fontSize: "30px", fontStyle: "normal", fontFamily: "serif" }}>
                               Assignment Details</p>
                        </div>{/* /.col */}

                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <section class="content"  >

                <div className="conatiner-fluid">
                    <Row className="bg-white rounded-0 border-0">
                        <Col sm={12}>
                            <Card >

                                <Card.Body>

                                    <Form>
                                        <Row md={12} >
                                        <Col md={6}>
                                                <Form.Group >
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Course File Name </Form.Label>
                                                    <Form.Control ref={nameRef} className="form-control" as="select" style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}>
                                                        <option value=""> --- Select --- </option>
                                                        {coursefiles && coursefiles.map((coursefile) => (
                                                            <option value={coursefile.id}>{coursefile.name}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Form.Group>

                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="assignment / Project">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Assignment/Project Details </Form.Label>
                                                    <Form.Control type="file"  onChange={(e) => setAsssignment(e.target.files[0])} style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student1">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student 1 Assignment/Project (Lowest) </Form.Label>
                                                    <Form.Control type="file"  onChange={(e) => setAsssignmentLowest(e.target.files[0])}style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student2">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student2 Assignment/Project(Average) </Form.Label>
                                                    <Form.Control type="file"  onChange={(e) => setAsssignmentAverage(e.target.files[0])} style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student3">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student3 Assignment/Project(Best) </Form.Label>
                                                    <Form.Control type="file"  onChange={(e) => setAsssignmentBest(e.target.files[0])} style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="result">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Result Assignment/Project </Form.Label>
                                                    <Form.Control type="file"  onChange={(e) => setResultAsssignment(e.target.files[0])} style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}/>
                                                </Form.Group>
                                            </Col>

                                            <Col md={12}>
                                                <Form.Group controlId="Add">
                                                    <Button onClick={submit} variant="primary" type="submit" size="lg" block style={{ marginTop: "20px", fontFamily: "serif", fontWeight: "normal", background: "rgba(7,48,111,1)", borderColor: "rgba(7,48,111,1)" }}>
                                                        Add Assignment
                                                    </Button>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );

};
export default Assignment;

