import React, { useRef, useState, useEffect } from "react";


import { Form, Card, Row, Col, InputGroup, Button, FormGroup } from "react-bootstrap";

import { POST, GET } from "../../apicontroller/ApiController"

import { toast } from "react-toastify";


const Coursefile = () => {

    const [courseoutline, setCourse] = useState();
    const [attendence, setAttendence] = useState();

    // Submit Values
    const departmentRef = useRef();
    const semesterRef = useRef();
    const sessionRef = useRef();
    const coursenameRef = useRef();
    const teacherRef = useRef();
    const nameRef = useRef();

    // Submit Functions
    const submit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("department", departmentRef.current.value);
        formData.append("semester", semesterRef.current.value);
        formData.append("session", sessionRef.current.value);
        formData.append("coursename", coursenameRef.current.value);
        formData.append("teacher", teacherRef.current.value);

        if (courseoutline) formData.append("files", courseoutline);
        if (attendence) formData.append("files", attendence);

        POST("coursefile", formData).then((res) => {
            toast("Course File Added Successfully");
            fetchData();
        });
    };

    const [coursefiles, setCoursefiles] = useState(false);

    const [courses, setCourses] = useState([]);

    const [departments, setDepartment] = useState([]);

    const [sessions, setSessions] = useState([]);

    const [teachers, setTeachers] = useState([]);


    const fetchData = async () => {
        GET("coursefile").then((result) => {
            setCoursefiles(result);
        });

        GET("session").then((result) => {
            setSessions(result);
        });

        GET("course").then((result) => {
            setCourses(result);
        });

        GET("department").then((result) => {
            setDepartment(result);
        });

        GET("auth/teacher").then((result) => {
            setTeachers(result);
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
                        <div className="col-sm-6">
                            <p className="m-0" style={{ fontWeight: "bold", fontSize: "30px", fontStyle: "normal", fontFamily: "serif" }}>
                                Course File Details</p>
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
                                                    <FormGroup>
                                                    <Form.Label htmlFor="basic-url" style={{ fontFamily: "serif", fontWeight: "normal" }}> Course File Name </Form.Label>
                                                    <Form.Control type="text" ref={nameRef} placeholder=" hint i.e; CS" style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}/>
                                                    </FormGroup>
                                                </Col>

                                                <Col md={6}>
                                                    <Form.Group >
                                                        <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}>Category </Form.Label>
                                                        <Form.Control ref={departmentRef} className="form-control" as="select"style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}>
                                                            <option value=""> --- Select --- </option>
                                                            {departments.map((department) => (
                                                                <option value={department.id}>{department.department}</option>
                                                            ))}
                                                        </Form.Control>
                                                    </Form.Group>

                                                </Col>
                                            
                                                <Col md={6}>
                                                    <Form.Group >
                                                        <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Session </Form.Label>
                                                        <Form.Control ref={sessionRef} className="form-control" as="select" style={{ fontFamily: "serif", fontWeight: "normal" ,background:"#E6E6E6"}}>
                                                            <option>Choose Session </option>
                                                            {sessions.map((session) => (
                                                                <option value={session.id}>{session.session}</option>
                                                            ))}
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>

                                                <Col md={6}>
                                                    <Form.Group >
                                                        <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Section </Form.Label>
                                                        <Form.Control ref={semesterRef} className="form-control" as="select"style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}>
                                                            <option>Choose Semester</option>
                                                            <option value="1"> 1 </option>
                                                            <option value="2"> 2 </option>
                                                            <option value="3"> 3 </option>
                                                            <option value="4"> 4 </option>
                                                            <option value="5"> 5 </option>
                                                            <option value="6"> 7 </option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>

                                                <Col md={6}>
                                                    <Form.Group >
                                                        <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Course </Form.Label>
                                                        <Form.Control ref={coursenameRef} className="form-control" as="select"style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}>
                                                            <option value=""> --- Select --- </option>
                                                            {courses.map((course) => (
                                                                <option value={course.id}>{course.coursename}</option>
                                                            ))}
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>

                                                <Col md={6}>
                                                    <Form.Group >
                                                        <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Assigned Teacher </Form.Label>
                                                        <Form.Control ref={teacherRef} className="form-control" as="select" style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}>
                                                            <option value=""> --- Select --- </option>
                                                            {teachers.map((teacher) => (
                                                                <option value={teacher.id}>{teacher.firstname + " " + teacher.lastname}</option>
                                                            ))}
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            
                                                <Col md={6}>
                                                <Form.Group controlId="courseoutline">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Course Outline </Form.Label>
                                                    <Form.Control type="file"   style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setCourse(e.target.files[0])} />
                                                </Form.Group>
                                                    
                                                </Col>

                                                <Col md={6}>
                                                <Form.Group controlId="attendance">
                                                    <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Attendence </Form.Label>
                                                    <Form.Control type="file"   style={{ fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }} onChange={(e) => setAttendence(e.target.files[0])} />
                                                </Form.Group>
                                                    
                                                </Col>
                                            
                                            <Col md={12} >
                                                <Form.Group controlId="Add">
                                                    <Button onClick={submit} variant="primary" type="submit" size="lg" block style={{marginTop:"20px", fontFamily: "serif", fontWeight: "normal", background: "rgba(7,48,111,1)", borderColor: "rgba(7,48,111,1)" }}>
                                                        Add Course file
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
            </section >
        </div >
    );

};
export default Coursefile;