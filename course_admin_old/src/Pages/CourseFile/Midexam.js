import React, { useState, useRef, useEffect } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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

        POST("coursemid", formData).then((res) => {
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
        <div className="midexam">


            <Container>
                <Form>
                    <h1>Mid Term Exam</h1>

                    <Col>
                            <Form.Group className="mt-3">
                                <Form.Label> Department </Form.Label>
                                <Form.Control ref={name} className="form-control" as="select">
                                    <option value=""> --- Select --- </option>
                                    {coursefiles&&coursefiles.map((coursefile) => (
                                        <option value={coursefile.id}>{coursefile.name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                        </Col>
                    <Col>
                        <Form.Group controlId="question_paper">
                            <Form.Label> Question Paper </Form.Label>
                            <Form.Control type="file"  onChange={(e) => setMid(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student1">
                            <Form.Label> Student1 Paper(Lowest) </Form.Label>
                            <Form.Control type="file" onChange={(e) => setMidLowest(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student2">
                            <Form.Label> Student2 Paper(Average) </Form.Label>
                            <Form.Control type="file" onChange={(e) => setMidAverage(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student3">
                            <Form.Label> Student3 Paper(Best) </Form.Label>
                            <Form.Control type="file" onChange={(e) => setMidBest(e.target.files[0])} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="result">
                            <Form.Label> Result </Form.Label>
                            <Form.Control type="file" onChange={(e) => setMidResult(e.target.files[0])} />
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
export default Midexam;