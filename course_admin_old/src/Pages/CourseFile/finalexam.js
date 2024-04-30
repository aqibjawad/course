import React, { useState, useEffect } from 'react';

import { Container, Col, Form } from 'react-bootstrap';

import { POST, GET } from "../../apicontroller/ApiController"

import { toast } from "react-toastify";

const Finalexam = () => {

    const [final, setFinal] = useState();
    const [finallowest, setFinalLowest] = useState();
    const [finalaverage, setFinalAverage] = useState();
    const [finalbest, setFinalBest] = useState();
    const [finalresult, setFinalResult] = useState();

    const submit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        if (final) formData.append("files", final);
        if (finallowest) formData.append("files", finallowest);
        if (finalaverage) formData.append("files", finalaverage);
        if (finalbest) formData.append("files", finalbest);
        if (finalresult) formData.append("files", finalresult);

        POST("coursefile", formData).then((res) => {
            toast("Course File Added Successfully");
        });
    };

    return (
        <div className="finalexam">


            <Container>
                <Form>
                    <h1>Final Term Exam</h1>
                    <Col>
                        <Form.Group controlId="question_paper">
                            <Form.Label> Question Paper </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setFinal(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student1">
                            <Form.Label> Student1 Paper(Lowest) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setFinalLowest(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student2">
                            <Form.Label> Student2 Paper(Average) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setFinalAverage(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student3">
                            <Form.Label> Student3 Paper(Best) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setFinalBest(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="result">
                            <Form.Label> Result </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setFinalResult(e.target.files[0])} />
                        </Form.Group>
                    </Col>

                    <button onClick={submit}>
                        Add
                    </button>

                </Form>
            </Container>
 
        </div>
    );

};
export default Finalexam;