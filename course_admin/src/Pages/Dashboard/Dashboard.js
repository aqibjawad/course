import React, { useEffect, useState } from "react";

import { Card, Row, Col, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./index.css";

import { GET } from "../../apicontroller/ApiController";

import deptlogo from './Deptlogo.png';

import courselogo from './courselogo.png';

import teacherlogo from './teacherlogo.png';

import sessionlogo from './sessionlogo.png';

import semesterlogo from './semesterlogo.png';

import BackgroundImage from './dash.jpg';

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"

import { MdKeyboardVoice } from "react-icons/md";

const Dashboard = () => {

    const [RedirectUrl, setredirectUrl] = useState("");

    const [teachers, setTeachers] = useState([]);

    const [department, setDepartment] = useState([]);

    const [users, setUsers] = useState([]);

    const [course, setCourse] = useState([]);

    const [session, setSession] = useState([]);

    const [semester, setSemester] = useState([]);

    const [active, setActive] = useState(1);

    const [activebutton, setActiveButton] = useState();


    useEffect(() => {
        GET("auth/teacher/count").then((result) => {
            setTeachers(result[0]);
        });

        GET("auth/user/count").then((result) => {
            setUsers(result[0]);
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
    const commands = [
        {
            command: ["Open *"],
            callback: RedirectPage => setredirectUrl(RedirectPage),
        },
    ]

    const { transcript } = useSpeechRecognition({ commands })
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    const pages = ["category", "session", "section", "course", "teacher","website user","course file"]
    let Redirect = ""

    if (RedirectUrl) {
        if (pages.includes(RedirectUrl)) {
            window.location.href = `/${RedirectUrl}`
        } else {
            Redirect = <p>Could not find page: {RedirectUrl}</p>
        }
    }

    return (
        <div className="main-body content-wrapper" style={{ backgroundColor: "white" }}>
            <div
                style={{
                    background: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
            >
                <section class="content">
                    <div className="conatiner-fluid">
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-4">
                                <div className="col-sm-6">
                                        <p className="m-0" style={{ marginRight:"10px",fontWeight: "bold", fontSize: "30px", fontStyle: "normal", fontFamily: "serif" }}>
                                            Dashboard</p>

                                    </div>
                                    <div className="col-sm-6" >
                                    
                                        <button onClick={SpeechRecognition.startListening} style={{
                                            fontFamily: "serif", color: "black", fontWeight: "normal",
                                            background: "#ECEDEF", width: "280px", maxHeight: "30px", marginLeft:"200px",
                                            borderColor: "#ECEDEF", borderRadius: "10px"
                                        }} variant="primary" size="lg">

                                            Start to Speak and Navigate the page <MdKeyboardVoice style={{ color: 'black' }} /> </button>
                                            <p id="transcript" style={{ fontFamily: "serif", color: "White", marginLeft:"200px" }}>Transcript: {transcript}</p>
                                            <p style={{ fontFamily: "serif", color: "White", marginLeft:"200px", marginTop:"0px"}}>{Redirect }</p> </div>
                                    {/* /.col */}
                                </div>{/* /.row */}

                            </div>{/* /.container-fluid */}

                        </div>

                        <div className="conatiner-fluid">
                            <Row style={{ marginTop: "120px", padding: " 10px 10px", marginRight: "30px ", justifyItems: "center" }}>
                                <Col sm={4}>
                                    <Card className="mt-5" style={{ width: " 250px" }}>
                                        <div className="card-head1" >
                                            <Card.Body>

                                                <div className="" >
                                                    <img src={deptlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60, flexDirection: 'row' }} />

                                                    <Link to="/category" className="menu-item" onClick={() => setActive(1)} style={{ textDecoration: "none" }}>

                                                        <span className='d-flex'>
                                                            <div className="total-head" style={{ fontFamily: "serif", color: "white" }}> Category </div>
                                                        </span>
                                                    </Link>

                                                    <div className="total-no" style={{ fontFamily: "serif", color: "white" }}> {department.id}  </div>
                                                </div>

                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={4} >
                                    <Card className="mt-5" style={{ width: " 250px" }}>
                                        <div className="card-head2">
                                            <Card.Body>
                                                <div className="">
                                                    <img src={sessionlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />

                                                    <Link to="/session" className="menu-item" onClick={() => setActive(1)} style={{ textDecoration: "none" }}>

                                                        <span className='d-flex'>
                                                            <div className="total-head" style={{ fontFamily: "serif", color: "white" }}> Session </div>
                                                        </span>
                                                    </Link>

                                                    <div className="total-no" style={{ fontFamily: "serif", color: "white" }}> {session.id}  </div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Col>


                                <Col sm={4} >
                                    <Card className="mt-5" style={{ width: " 250px" }}>
                                        <div className="card-head3">
                                            <Card.Body>
                                                <div className="">
                                                    <img src={courselogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />

                                                    <Link to="/course" className="menu-item" onClick={() => setActive(1)} style={{ textDecoration: "none" }}>

                                                        <span className='d-flex'>
                                                            <div className="total-head" style={{ fontFamily: "serif", color: "white" }}> Course</div>
                                                        </span>
                                                    </Link>

                                                    <div className="total-no" style={{ fontFamily: "serif", color: "white" }}> {course.id}  </div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={4} >
                                    <Card className="mt-5" style={{ width: " 250px" }}>
                                        <div className="card-head4">
                                            <Card.Body>
                                                <div className="">
                                                    <img src={teacherlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />

                                                    <Link to="/teacher" className="menu-item" onClick={() => setActive(1)} style={{ textDecoration: "none" }}>

                                                        <span className='d-flex'>
                                                            <div className="total-head" style={{ fontFamily: "serif", color: "white" }}> Teacher</div>
                                                        </span>
                                                    </Link>
                                                    <div className="total-no" style={{ fontFamily: "serif", color: "white" }}> {teachers.id}  </div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Col>

                                <Col sm={4} >
                                    <Card className="mt-5" style={{ width: " 250px" }}>
                                        <div className="card-head6" >
                                            <Card.Body>
                                                <div className="">
                                                    <img src={semesterlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />
                                                    <Link to="/section" className="menu-item" onClick={() => setActive(1)} style={{ textDecoration: "none" }}>

                                                        <span className='d-flex'>
                                                            <div className="total-head" style={{ fontFamily: "serif", color: "white" }}> Section </div>
                                                        </span>
                                                    </Link>
                                                    <div className="total-no" style={{ fontFamily: "serif", color: "white" }}> {semester.id}  </div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Col>

                                <Col sm={4} >
                                    <Card className="mt-5" style={{ width: " 250px" }}>
                                        <div className="card-head10" >
                                            <Card.Body>
                                                <div className="">
                                                    <img src={deptlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />
                                                    <Link to="/website user" className="menu-item" onClick={() => setActive(1)} style={{ textDecoration: "none" }}>

                                                        <span className='d-flex'>
                                                            <div className="total-head" style={{ fontFamily: "serif", color: "white" }}> Website User </div>
                                                        </span>
                                                    </Link>
                                                    <div className="total-no" style={{ fontFamily: "serif", color: "white" }}> {users.id}  </div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Col>

                            </Row>
                            <div style={{marginLeft:"20px",marginTop: "20px" }}>
                                
                                <Col md={12} >
                                    
                                </Col>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>

    )


}

export default Dashboard