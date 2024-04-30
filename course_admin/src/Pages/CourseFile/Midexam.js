import React, { useState, useRef, useEffect } from 'react';

import { Card, Row, Col, Form, Button } from 'react-bootstrap';

import { toast } from "react-toastify";
import { POST, GET } from "../../apicontroller/ApiController"

const Midexam = () => {


    const [mid, setMid] = useState();
    const [midlowest, setMidLowest] = useState();
    const [midaverage, setMidAverage] = useState();
    const [midbest, setMidBest] = useState();
    const [midresult, setMidResult] = useState();


    const nameRef = useRef();

    const submit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        if (mid) formData.append("mid", mid);
        if (midlowest) formData.append("mid", midlowest);
        if (midaverage) formData.append("mid", midaverage);
        if (midbest) formData.append("mid", midbest);
        if (midresult) formData.append("mid", midresult);

        POST("mid", formData).then((res) => {
            toast("Course Mid Added Successfully");
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
                                Mid Term Details</p>
                        </div>{/* /.col */}

                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <section class="content">

                <div className="conatiner-fluid">
                    <Row className="bg-white rounded-0 border-0">
                        <Col sm={12}>
                            <Card >

                                <Card.Body>

                                    <Form>
                                        <Row md={12} >

                                            <Col md={6}>
                                                <Form.Group className="">
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
                                                <Form.Group controlId="question_paper">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Question Paper </Form.Label>
                                                    <Form.Control type="file" style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setMid(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student1">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student1 Paper(Lowest) </Form.Label>
                                                    <Form.Control type="file" style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setMidLowest(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student2">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student2 Paper(Average) </Form.Label>
                                                    <Form.Control type="file" style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setMidAverage(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student3">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student3 Paper(Best) </Form.Label>
                                                    <Form.Control type="file"style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setMidBest(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="result">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Result </Form.Label>
                                                    <Form.Control type="file"style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setMidResult(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>

                                            <Col md={12}>
                                                <Form.Group controlId="Add">
                                                    <Button onClick={submit} variant="primary" type="submit" size="lg" block style={{ marginTop:"20px",fontFamily: "serif", fontWeight: "normal", background: "rgba(7,48,111,1)", borderColor: "rgba(7,48,111,1)" }}>
                                                        Add Mid Term
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
export default Midexam;