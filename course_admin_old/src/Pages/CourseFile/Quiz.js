import React, { useState } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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

    const [assignment, setAsssignment] = useState();
    const [assignmentlowest, setAsssignmentLowest] = useState();
    const [assignmentaverage, setAsssignmentAverage] = useState();
    const [assignmentbest, setAsssignmentBest] = useState();
    const [resultassignment, setResultAsssignment] = useState();


    const submit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        if (questionpaperquiz1) formData.append("files", questionpaperquiz1);
        if (quiz1lowest) formData.append("files", quiz1lowest);
        if (quiz1average) formData.append("files", quiz1average);
        if (quiz1best) formData.append("files", quiz1best);
        if (resultquiz1) formData.append("files", resultquiz1);

        if (questionpaperquiz2) formData.append("files", questionpaperquiz2);
        if (quiz2lowest) formData.append("files", quiz2lowest);
        if (quiz2average) formData.append("files", quiz2average);
        if (quiz2best) formData.append("files", quiz2best);
        if (resultquiz2) formData.append("files", resultquiz2);

        if (assignment) formData.append("files", assignment);
        if (assignmentlowest) formData.append("files", assignmentlowest);
        if (assignmentaverage) formData.append("files", assignmentaverage);
        if (assignmentbest) formData.append("files", assignmentbest);
        if (resultassignment) formData.append("files", resultassignment);

        POST("coursefile", formData).then((res) => {
            toast("Course File Added Successfully");
        });
    };

    return (
        <div className="quiz">
            <Container>
                <Form>
                    <Col>
                        <h1>Quiz  & Assignment Details</h1>

                        <Form.Group controlId="quiz1">
                            <Form.Label> Quiz 1 Question Paper </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setQuestionPaperQuiz1(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student1">
                            <Form.Label> Student 1 Quiz 1(Lowest) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setQuiz1lowest(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student2">
                            <Form.Label> Student2 Quiz 1(Average) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setQuiz1Average(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student3">
                            <Form.Label> Student3 Quiz 1(Best) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setQuiz1best(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="result">
                            <Form.Label> Result Quiz 1 </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setResultQuiz1(e.target.files[0])} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="quiz2">
                            <Form.Label> Quiz 2 Question Paper </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setQuestionPaperQuiz2(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student1">
                            <Form.Label> Student 1 Quiz 2(Lowest) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setQuiz2lowest(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student2">
                            <Form.Label> Student2 Quiz 2(Average) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setQuiz2Average(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student3">
                            <Form.Label> Student3 Quiz 2(Best) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setQuiz2best(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="result">
                            <Form.Label> Result Quiz 2 </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setResultQuiz2(e.target.files[0])} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="assignment / Project">
                            <Form.Label> Assignment/Project Details </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setAsssignment(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student1">
                            <Form.Label> Student 1 Assignment/Project (Lowest) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setAsssignmentLowest(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student2">
                            <Form.Label> Student2 Assignment/Project(Average) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setAsssignmentAverage(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student3">
                            <Form.Label> Student3 Assignment/Project(Best) </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setAsssignmentBest(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="result">
                            <Form.Label> Result Assignment/Project </Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={(e) => setResultAsssignment(e.target.files[0])} />
                        </Form.Group>
                    </Col>



                </Form>
            </Container>

        </div>
    );

};
export default Quiz;