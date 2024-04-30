import React, { useState, useEffect, useRef } from 'react';

import { Container, Col, Form, Card, Row, Button } from 'react-bootstrap';

import { POST, GET } from "../../apicontroller/ApiController"

import { toast } from "react-toastify";

const Finalexam = () => {

    const [final, setFinal] = useState();
    const [finallowest, setFinalLowest] = useState();
    const [finalaverage, setFinalAverage] = useState();
    const [finalbest, setFinalBest] = useState();
    const [finalresult, setFinalResult] = useState();

    const nameRef = useRef();
    const completeRef=useRef();

    const submit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("complete", completeRef.current.checked ? '1' : '0' );
        if (final) formData.append("files", final);
        if (finallowest) formData.append("files", finallowest);
        if (finalaverage) formData.append("files", finalaverage);
        if (finalbest) formData.append("files", finalbest);
        if (finalresult) formData.append("files", finalresult);

        POST("final", formData).then((res) => {
            toast("Course Final Added Successfully");
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
                                Final Term Details</p>
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
                                                    <Form.Control ref={nameRef} className="form-control" as="select" style={{ fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}>
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
                                                    <Form.Control type="file" onChange={(e) => setFinal(e.target.files[0])} style={{ fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student1">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student1 Paper(Lowest) </Form.Label>
                                                    <Form.Control type="file" onChange={(e) => setFinalLowest(e.target.files[0])} style={{ fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student2">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student2 Paper(Average) </Form.Label>
                                                    <Form.Control type="file" onChange={(e) => setFinalAverage(e.target.files[0])} style={{ fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student3">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student3 Paper(Best) </Form.Label>
                                                    <Form.Control type="file" onChange={(e) => setFinalBest(e.target.files[0])} style={{ fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="result">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Result </Form.Label>
                                                    <Form.Control type="file" onChange={(e) => setFinalResult(e.target.files[0])} style={{ fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check ref={completeRef} type="checkbox" label="Complete" style={{marginTop:"10px"
                                                , marginBottom:"10px"}}/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group controlId="Add">
                                                    <Button onClick={submit} variant="primary" type="submit" size="lg" block style={{ marginTop: "20px", fontFamily: "serif", fontWeight: "normal", background: "rgba(7,48,111,1)", borderColor: "rgba(7,48,111,1)" }}>
                                                        Add Final Term
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
export default Finalexam;