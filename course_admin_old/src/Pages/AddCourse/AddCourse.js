import React, { useRef, useState, useEffect } from "react";


import {
    Form,
    Card,
    Container,
    Row,
    Col, Table, Button, Modal, FormControl
} from "react-bootstrap";

import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';

import { POST, GETID, DELETE, PUT, GET } from "../../apicontroller/ApiController"

import { toast } from "react-toastify";

const Course = () => {

    const coursenameRef = useRef();
    const courseidRef = useRef();
    const departmentRef = useRef();
    const teacherRef = useRef();
    const shiftRef = useRef();
    const sessionRef = useRef();
    const semesterRef = useRef();


    const submit = async (event) => {
        event.preventDefault();
        const formData = {
            department: departmentRef.current.value,
            coursename: coursenameRef.current.value,
            courseid: courseidRef.current.value,
            shift: shiftRef.current.value,
            teacher: teacherRef.current.value,
            semester: semesterRef.current.value,
            session: sessionRef.current.value,
        };
        POST("course", formData).then((res) => {
            toast("Course Added Successfully");
            fetchData();
        });
    };

    // Edit Function

    const [courseid, setCourseId] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Edit FUNCTION
    const edit = async (event, id) => {
        setCourseId(id);
        GETID("course", id, "");
        handleShow();
    };

    // Edit Ref
    const ecoursenameRef = useRef();
    const ecourseidRef = useRef();
    const edepartmentRef = useRef();
    const eteacherRef = useRef();
    const eshiftRef = useRef();
    const esessionRef = useRef();
    const esemesterRef = useRef();


    // Send edited data to the databse finction
    const eSubmit = (event, id) => {
        event.preventDefault();
        const formData = {
            department: edepartmentRef.current.value,
            coursename: ecoursenameRef.current.value,
            courseid: ecourseidRef.current.value,
            shift: eshiftRef.current.value,
            teacher: eteacherRef.current.value,
            semester: esemesterRef.current.value,
            session: esessionRef.current.value,
        };

        PUT("course", id, formData).then((res) => {
            toast("Course Updated Successfully");
            fetchData();
        });
    };


    const [courses, setCourses] = useState(false);

    const [departments, setDepartment] = useState([]);

    const [teachers, setTeachers] = useState([]);

    const [sessions, setSessions] = useState([]);

    const [semesters, setSemesters] = useState([]);

    const fetchData = async () => {
        GET("course").then((result) => {
            setCourses(result);
        });

        GET("department").then((result) => {
            setDepartment(result);
        });

        GET("auth/teacher").then((result) => {
            setTeachers(result);
        });

        GET("session").then((result) => {
            setSessions(result);
        });

        GET("semester").then((result) => {
            setSemesters(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    const remove = async (event, id) => {
        await DELETE("course/delete", id, "");
        fetchData();
    };

    return (
        <div>
            <p style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "-3px", fontStyle: "normal", textAlign: "center", fontFamily: "serif" }}>Session 's Course</p>
            <Row>

                <Col sm={4}>
                    <Card className="mt-3">
                        <Card.Body>
                            <Form>
                                <div className="row">

                                    <Col md={12}>

                                        <Form.Group className="mt-3">
                                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Department </Form.Label>
                                            <Form.Control ref={departmentRef} className="form-control" as="select">
                                                <option value=""> --- Select --- </option>
                                                {departments.map((department) => (
                                                    <option value={department.id}>{department.department}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>

                                    </Col>

                                    <Col md={12}>

                                        <Form.Group className="mt-3">
                                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Session </Form.Label>
                                            <Form.Control ref={sessionRef} className="form-control" as="select">
                                                <option value=""> --- Select --- </option>
                                                {sessions.map((session) => (
                                                    <option value={session.id}>{session.session}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>

                                    </Col>

                                    <Col md={12}>

                                        <Form.Group className="mt-3">
                                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Semester </Form.Label>
                                            <Form.Control ref={semesterRef} className="form-control" as="select">
                                                <option value=""> --- Select --- </option>
                                                {semesters.map((semester) => (
                                                    <option value={semester.id}>{semester.semester}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>

                                    </Col>


                                    <Col md={12}>
                                        <Form.Group className="">
                                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}>   Course Id </Form.Label>
                                            <Form.Control ref={courseidRef} type="text" placeholder="CS-324" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}>  Course Name </Form.Label>
                                            <Form.Control ref={coursenameRef} type="text" placeholder="Computer Science" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Assigned Teacher </Form.Label>
                                            <Form.Control ref={teacherRef} className="form-control" as="select">
                                                <option value=""> --- Select --- </option>
                                                {teachers.map((teacher) => (
                                                    <option value={teacher.id}>{teacher.firstname + " " + teacher.lastname}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Shift </Form.Label>
                                            <Form.Control ref={shiftRef} className="form-control" as="select">
                                                <option value=""> --- Select --- </option>
                                                <option value="Morning"> Morning</option>
                                                <option value="Evening"> Evening</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Button onClick={submit} variant="primary" type="submit" size="lg" block style={{ fontFamily: "serif", fontWeight: "normal" }}>
                                                Add Course
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={8} className="mt-5">
                    <div className="card" style={{ fontFamily: "serif", fontWeight: "normal" }}>
                        <div className="card-body">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Course Id</th>
                                        <th> Course Name</th>
                                        <th> Department </th>
                                        <th> Session </th>
                                        <th> Semester </th>
                                        <th>Shift </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses && courses.map((course) => (

                                        <tr>
                                            <td> {course.courseid} </td>
                                            <td> {course.coursename} </td>
                                            <td> {course.department} </td>
                                            <td> {course.session} </td>
                                            <td> {course.semester} </td>
                                            <td> {course.shift} </td>
                                            <td>
                                                <AiFillDelete style={{ color: 'red' }} onClick={(e) => remove(e, course.id)} />
                                                <BsFillPencilFill style={{ color: 'blue', marginLeft: '1rem' }} onClick={(e) => edit(e, course.id)} />
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
                        <Col md={6}>

                            <Form.Group className="mt-3">
                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Department </Form.Label>
                                <Form.Control ref={edepartmentRef} className="form-control" as="select">
                                    <option value=""> --- Select --- </option>
                                    {departments.map((department) => (
                                        <option value={department.id}>{department.department}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mt-3">
                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Session </Form.Label>
                                <Form.Control ref={esessionRef} className="form-control" as="select">
                                    <option value=""> --- Select --- </option>
                                    {sessions.map((session) => (
                                        <option value={session.id}>{session.session}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mt-3">
                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Semester </Form.Label>
                                <Form.Control ref={esemesterRef} className="form-control" as="select">

                                    <option value=""> --- Select --- </option>
                                    <option value="1"> 1</option>
                                    <option value="2"> 2</option>
                                    <option value="3"> 3</option>
                                    <option value="4"> 4</option>
                                    <option value="5"> 5</option>
                                    <option value="6"> 6</option>
                                    <option value="7"> 7</option>
                                    <option value="8"> 8</option>

                                </Form.Control>
                            </Form.Group>

                        </Col>


                        <Col md={6}>
                            <Form.Group className="">
                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}>   Course Id </Form.Label>
                                <Form.Control ref={ecourseidRef} type="text" placeholder="CS-324" />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mt-3">
                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}>  Course Name </Form.Label>
                                <Form.Control ref={ecoursenameRef} type="text" placeholder="Computer Science" />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mt-3">
                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Assigned Teacher </Form.Label>
                                <Form.Control ref={eteacherRef} className="form-control" as="select">
                                    <option value=""> --- Select --- </option>
                                    {teachers.map((teacher) => (
                                        <option value={teacher.id}>{teacher.name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Form.Group className="mt-3">
                                <Form.Label style={{ fontFamily: "serif", fontWeight: "normal" }}> Shift </Form.Label>
                                <Form.Control ref={eshiftRef} className="form-control" as="select">
                                    <option value=""> --- Select --- </option>
                                    <option value="1"> Morning</option>
                                    <option value="2"> Evening</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <div className="my-2 pl-3 mb-5">
                    <Button className="btn-custom border-0 mx-3" variant="danger" onClick={(e) => eSubmit(e, courseid)} style={{ fontFamily: "serif", fontWeight: "normal" }}>
                        Modify
                    </Button>
                </div>
            </Modal>
        </div>
    )
};
export default Course;