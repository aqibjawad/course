import React, { useEffect, useState, useRef } from "react";

import { Card, Row, Col, Dropdown, Container } from "react-bootstrap";

import "./coursefile.css";

import { GET } from "../../apicontroller/ApiController";

import currentlogo from './Currentlogo.png';

import oldlogo from './oldlogo.png';

import completedlogo from './completedlogo.png';

import { MdArrowDropDown } from "react-icons/md";
const Dashboard = () => {
    const courseRef = useRef();

    const [coursefiles, setCoursefiles] = useState([]);

    const fetchData = async () => {
        GET("coursefile").then((result) => {
            setCoursefiles(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])


    const [active, setActive] = useState(1);



    return (
        <div className="main-body content-wrapper" style={{ backgroundColor: "white" }}>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <p className="m-0" style={{ fontWeight: "bold", fontSize: "30px", fontStyle: "normal", fontFamily: "serif" }}>
                                Course Files</p>
                        </div>{/* /.col */}

                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <section class="content">

                <div className="conatiner-fluid">
                    <Row>
                        <Col sm={4}>
                            <Card className="mt-5">
                                <div className="card-head5" style={{ background: "#087B50" }}>
                                    <Card.Body onClick={() => setActive(1)}>
                                        <div className="">
                                            <img src={oldlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />
                                            <div className="total-head" style={{ fontFamily: "serif", color: "white" }}> Old Course Files</div>
                                            <div className="total-no" style={{ fontFamily: "serif", color: "white" }}> </div>
                                            <MdArrowDropDown className="drop-down" style={{ justifyItems: "left" }} />

                                        </div>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>

                        <Col sm={4}>
                            <Card className="mt-5">
                                <div className="card-head7" style={{ background: "#26A7A2" }}>
                                    <Card.Body onClick={() => setActive(2)}>
                                        <div className="">
                                            <img src={completedlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />
                                            <div className="total-head" style={{ fontFamily: "serif", color: "white" }}> Completed Course Files </div>
                                            <div className="total-no" style={{ fontFamily: "serif", color: "white" }}></div>
                                            <MdArrowDropDown className="drop-down" style={{ justifyItems: "left" }} />

                                        </div>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>

                        <Col sm={4}>
                            <Card className="mt-5">
                                <div className="card-head8" style={{ background: "#01796F" }}>
                                    <Card.Body onClick={() => setActive(3)}>
                                        <div className="">
                                            <img src={currentlogo} alt="Logo" style={{ height: "45px", width: "45px", borderRadius: 60 }} />

                                            <div className="total-no" style={{ fontFamily: "serif", color: "white" }}> </div>
                                            <div className="total-head" style={{ fontFamily: "serif", color: "white" }}> Current Course Files</div>
                                            <MdArrowDropDown className="drop-down" style={{ justifyItems: "left" }}>

                                            </MdArrowDropDown>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Card>

                        </Col>

                    </Row>

                </div>

                {active === 1 ? (
                    <div >
                        <Container>

                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/files/${coursefiles.courseoutline,
                                    coursefiles.attendence}`} alt="Course Outline"/>

                            </Col>


                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/quiz/${coursefiles.quizquestion,
                                    coursefiles.quiz_lowest, coursefiles.quiz_average, coursefiles.quiz_best,
                                     coursefiles.quiz_result}`} alt="Quiz" />
                            </Col>


                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/mid/${coursefiles.midquestion,
                                    coursefiles.mid_lowest, coursefiles.mid_average, coursefiles.mid_best,
                                     coursefiles.mid_result}`}alt="Mid" />

                            </Col>
                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/assignment/${coursefiles.assignmentquestion,
                                    coursefiles.assignment_lowest, coursefiles.assignment_average, coursefiles.assignment_best,
                                    coursefiles.assignment_result}`} alt="Assignment"/>
                            </Col>
                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/final/${coursefiles.finalquestion,
                                    coursefiles.final_lowest, coursefiles.final_average, coursefiles.final_best,
                                    coursefiles.final_result}`} alt="Final" />
                            </Col>

                        </Container>
                    </div>
                ) : (
                    <>
                    </>)}
                {active === 2 ? (
                    <div>
                        <Container>

                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/files/${coursefiles.courseoutline,
                                    coursefiles.attendence}`}alt="Course-Outline" />

                            </Col>


                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/quiz/${coursefiles.quizquestion,
                                    coursefiles.quiz_lowest, coursefiles.quiz_average, 
                                    coursefiles.quiz_best, coursefiles.quiz_result}`} alt="Quiz"/>
                            </Col>


                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/mid/${coursefiles.midquestion,
                                    coursefiles.mid_lowest, coursefiles.mid_average, coursefiles.mid_best, 
                                    coursefiles.mid_result}`} alt="Mid" />

                            </Col>
                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/assignment/${coursefiles.assignmentquestion,
                                    coursefiles.assignment_lowest, coursefiles.assignment_average, coursefiles.assignment_best,
                                    coursefiles.assignment_result}`} alt="Assignment" />
                            </Col>
                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/final/${coursefiles.finalquestion,
                                    coursefiles.final_lowest, coursefiles.final_average, coursefiles.final_best,
                                    coursefiles.final_result}`} alt="Final" />
                            </Col>

                        </Container>
                    </div>
                ) : (
                    <>
                    </>)}
                {active === 3 ? (
                    <div>
                        <Container>

                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/files/${coursefiles.courseoutline,
                                    coursefiles.attendence}`} alt="Course-Outline" />

                            </Col>


                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/quiz/${coursefiles.quizquestion,
                                    coursefiles.quiz_lowest, coursefiles.quiz_average, coursefiles.quiz_best,
                                    coursefiles.quiz_result}`} alt="Quiz" />
                            </Col>


                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/mid/${coursefiles.midquestion,
                                    coursefiles.mid_lowest, coursefiles.mid_average, coursefiles.mid_best, 
                                    coursefiles.mid_result}`}
                                    alt="mid" />

                            </Col>
                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/assignment/${coursefiles.assignmentquestion,
                                    coursefiles.assignment_lowest, coursefiles.assignment_average, coursefiles.assignment_best,
                                    coursefiles.assignment_result}`} alt="mid" />
                            </Col>
                            <Col>
                                <img src={`${process.env.REACT_APP_MEDIA_URL}/final/${coursefiles.finalquestion,
                                    coursefiles.final_lowest, coursefiles.final_average, coursefiles.final_best,
                                    coursefiles.final_result}`} alt="final" />
                            </Col>

                        </Container>
                    </div>
                ) : (
                    <>
                    </>)}
            </section>
        </div>
    )
}

export default Dashboard