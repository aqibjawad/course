import React, { useState, useRef, useEffect } from 'react';

import { Card, Row, Col, Form, Button } from 'react-bootstrap';

import { toast } from "react-toastify";
import { POST, GET } from "../../apicontroller/ApiController"

const Quiz = () => {

    const [questionpaperquiz1, setQuestionPaperQuiz1] = useState();
    const [quiz1lowest, setQuiz1lowest] = useState();
    const [quiz1average, setQuiz1Average] = useState();
    const [quiz1best, setQuiz1best] = useState();
    const [resultquiz1, setResultQuiz1] = useState();

    const [questionpaperquiz2, setQuestionPaperQuiz2] = useState();
    const [quiz2lowest, setQuiz2lowest] = useState();
    const [quiz2average, setQuiz2Average] = useState();
    const [quiz2best, setQuiz2best] = useState();
    const [resultquiz2, setResultQuiz2] = useState();

    const nameRef = useRef();

    const submit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        if (questionpaperquiz1) formData.append("quiz", questionpaperquiz1);
        if (quiz1lowest) formData.append("quiz", quiz1lowest);
        if (quiz1average) formData.append("quiz", quiz1average);
        if (quiz1best) formData.append("quiz", quiz1best);
        if (resultquiz1) formData.append("quiz", resultquiz1);

        if (questionpaperquiz2) formData.append("quiz", questionpaperquiz2);
        if (quiz2lowest) formData.append("quiz", quiz2lowest);
        if (quiz2average) formData.append("quiz", quiz2average);
        if (quiz2best) formData.append("quiz", quiz2best);
        if (resultquiz2) formData.append("quiz", resultquiz2);

        POST("quiz", formData).then((res) => {
            toast("Course Quiz Added Successfully");
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
                                Quiz Details</p>
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
                                                <Form.Group controlId="quiz1">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal"}}> Quiz 1 Question Paper </Form.Label>
                                                    <Form.Control type="file"  style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setQuestionPaperQuiz1(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student1">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student 1 Quiz 1(Lowest) </Form.Label>
                                                    <Form.Control type="file" style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setQuiz1lowest(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student2">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student2 Quiz 1(Average) </Form.Label>
                                                    <Form.Control type="file" style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setQuiz1Average(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student3">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal"}}> Student3 Quiz 1(Best) </Form.Label>
                                                    <Form.Control type="file"style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setQuiz1best(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="result">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Result Quiz 1 </Form.Label>
                                                    <Form.Control type="file"   style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setResultQuiz1(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>

                                            <Col md={6}>
                                                <Form.Group controlId="quiz2">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Quiz 2 Question Paper </Form.Label>
                                                    <Form.Control type="file" style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setQuestionPaperQuiz2(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student1">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student 1 Quiz 2(Lowest) </Form.Label>
                                                    <Form.Control type="file"   style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setQuiz2lowest(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student2">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student2 Quiz 2(Average) </Form.Label>
                                                    <Form.Control type="file" style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setQuiz2Average(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="student3">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Student3 Quiz 2(Best) </Form.Label>
                                                    <Form.Control type="file"  style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}onChange={(e) => setQuiz2best(e.target.files[0])} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="result">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Result Quiz 2 </Form.Label>
                                                    <Form.Control type="file"  style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}onChange={(e) => setResultQuiz2(e.target.files[0])} />

                                                </Form.Group>
                                            </Col>

                                            <Col md={12}>
                                                <Form.Group controlId="Add">
                                                    <Button onClick={submit} variant="primary" type="submit" size="lg" block style={{ marginTop:"20px",fontFamily: "serif", fontWeight: "normal", background: "rgba(7,48,111,1)", borderColor: "rgba(7,48,111,1)" }}>
                                                        Add Quiz
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
export default Quiz;