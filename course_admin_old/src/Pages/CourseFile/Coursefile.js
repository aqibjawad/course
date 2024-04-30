import React, { useRef, useState, useEffect } from "react";


import { Form, Card, Row, Col, InputGroup } from "react-bootstrap";

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
        <div className='Coursefile'>
            <Card className="rounded-0 border-0 mt-3">
                <Card.Body className="pb-3 pt-0 pt-5">
                    <h3 className="mb-3"> Add Course File</h3>
                    <Row className="bg-white rounded-0 border-0">

                        <Col md={6}>
                            <Form.Label htmlFor="basic-url" style={{ fontFamily: "serif", fontWeight: "normal" }}> Name </Form.Label>
                            <Form.Control type="text" ref={nameRef} placeholder=" hint i.e; CS" />
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mt-3">
                                <Form.Label> Department </Form.Label>
                                <Form.Control ref={departmentRef} className="form-control" as="select">
                                    <option value=""> --- Select --- </option>
                                    {departments.map((department) => (
                                        <option value={department.id}>{department.department}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col md={6}>
                            <Form.Group className="">
                                <Form.Label> Session </Form.Label>
                                <Form.Control ref={sessionRef} className="form-control" as="select">
                                    <option>Choose Session </option>
                                    {sessions.map((session) => (
                                        <option value={session.id}>{session.session}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mt-3">
                                <Form.Label> Semester </Form.Label>
                                <Form.Control ref={semesterRef} className="form-control" as="select">
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
                        <Col md={12}>
                            <Form.Group className="mt-3">
                                <Form.Label> Course </Form.Label>
                                <Form.Control ref={coursenameRef} className="form-control" as="select">
                                    <option value=""> --- Select --- </option>
                                    {courses.map((course) => (
                                        <option value={course.id}>{course.coursename}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Form.Group className="mt-3">
                                <Form.Label> Assigned Teacher </Form.Label>
                                <Form.Control ref={teacherRef} className="form-control" as="select">
                                    <option value=""> --- Select --- </option>
                                    {teachers.map((teacher) => (
                                        <option value={teacher.id}>{teacher.firstname + " " + teacher.lastname}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>



                        <Col md={6}>
                            <Form.Group className="mt-3">
                                <Form.Label> Course Outline </Form.Label>
                                <InputGroup className="mb-3">
                                    <input type="file" accept="image/*" onChange={(e) => setCourse(e.target.files[0])} />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="">
                                <Form.Label> Attendence </Form.Label>
                                <InputGroup className="mb-3">
                                    <input type="file" accept="image/*" onChange={(e) => setAttendence(e.target.files[0])} />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Body>

                <button onClick={submit}>
                    Add
                </button>
            </Card>

        </div>
    );

};
export default Coursefile;