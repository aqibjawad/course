import React, { useEffect, useState } from "react";

import { Card, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./index.css";

import { GET } from "../../apicontroller/ApiController";

import deptlogo from './Deptlogo.png';

import courselogo from './courselogo.png';

import teacherlogo from './teacherlogo.png';

import sessionlogo from './sessionlogo.png';

import semesterlogo from './semesterlogo.png';

const Dashboard = () => {

    const [teachers, setTeachers] = useState([]);

    const [department, setDepartment] = useState([]);

    const [course, setCourse] = useState([]);

    const [session, setSession] = useState([]);

    const [semester, setSemester] = useState([]);

    const [active, setActive] = useState(1);

    const [activebutton, setActiveButton] = useState();


    useEffect(() => {
        GET("auth/teacher/count").then((result) => {
            setTeachers(result[0]);
        });

        GET("department/count").then((result) => {
            setDepartment(result[0]);
        });

        GET("course/count").then((result) => {
            setCourse(result[0]);
        });

        GET("session/count").then((result) => {
            setSession(result[0]);
        });

        GET("semester/count").then((result) => {
            setSemester(result[0]);
        });

    }, [])

    return (
        <div>
            <p style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "-3px", fontStyle: "normal", textAlign: "center", fontFamily: "serif" }}>Dashboard</p>
            <Row>
                <Col sm={4}>
                    <Card className="mt-5">
                        <div className="card-head1">
                            <Card.Body>

                                <div className="" >
                                    <img src={deptlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60, flexDirection: 'row' }} />

                                    <Link to="/department" className="menu-item" onClick={() => setActive(1)} style={{textDecoration:"none"}}>

                                        <span className='d-flex'>
                                            <div className="total-head" style={{ fontFamily: "serif", color: "black" }}> Departments </div>
                                        </span>
                                    </Link>

                                    <div className="total-no"> {department.id}  </div>
                                </div>

                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col sm={4}>
                    <Card className="mt-5">
                        <div className="card-head4">
                            <Card.Body>
                                <div className="">
                                    <img src={sessionlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />

                                    <Link to="/session" className="menu-item" onClick={() => setActive(1)} style={{textDecoration:"none"}}>

                                        <span className='d-flex'>
                                            <div className="total-head" style={{ fontFamily: "serif", color: "black" }}> Sessions </div>
                                        </span>
                                    </Link>

                                    <div className="total-no"> {session.id}  </div>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col sm={4}>
                    <Card className="mt-5">
                        <div className="card-head6">
                            <Card.Body>
                                <div className="">
                                    <img src={semesterlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />
                                    <Link to="/semester" className="menu-item" onClick={() => setActive(1)} style={{textDecoration:"none"}}>

                                        <span className='d-flex'>
                                            <div className="total-head" style={{ fontFamily: "serif", color: "black" }}> Semesters </div>
                                        </span>
                                    </Link>
                                    <div className="total-no"> {semester.id}  </div>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col sm={4}>
                    <Card className="mt-5">
                        <div className="card-head3">
                            <Card.Body>
                                <div className="">
                                    <img src={teacherlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />

                                    <Link to="/teacher" className="menu-item" onClick={() => setActive(1)} style={{textDecoration:"none"}}>

                                        <span className='d-flex'>
                                            <div className="total-head" style={{ fontFamily: "serif", color: "black" }}> Teachers </div>
                                        </span>
                                    </Link>
                                    <div className="total-no"> {teachers.id}  </div>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col sm={4}>
                    <Card className="mt-5">
                        <div className="card-head2">
                            <Card.Body>
                                <div className="">
                                    <img src={courselogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />

                                    <Link to="/courses" className="menu-item" onClick={() => setActive(1)} style={{textDecoration:"none"}}>

                                        <span className='d-flex'>
                                            <div className="total-head" style={{ fontFamily: "serif", color: "black"}}> Courses </div>
                                        </span>
                                    </Link>

                                    <div className="total-no"> {course.id}  </div>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>







            </Row>
        </div>
    )
}

export default Dashboard