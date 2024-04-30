import React, { useState, useEffect } from 'react';
import './Coursefile.css';
import { GET } from "../../apicontroller/ApiController"

import { Link, useParams } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'
const Coursefile = () => {
    const { course } = useParams()

    const [courses, setCourse] = useState([])

    const [coursefiles, setCoursefile] = useState([])

    useEffect(() => {

        let array = course.split('-')
        const id = array[array.length - 1]

        GET(`course/${id}`).then((result) => {
            setCourse(result)
        })

        GET(`coursefile/${id}`).then((result) => {
            setCoursefile(result)
            console.log(result);

        })

    }, [course])

    console.log(process.env.MEDIA_UR);

    return (
        <div id="coursefile">
            <div className="">
                <p style={{
                    color: "#51247A",
                    fontFamily: "serif",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "40px"
                }}>Coursefile</p>
            </div>
            {coursefiles && coursefiles.map((coursefile) => (

                <span>
                    {coursefile.name}
                    <Container>

                        <Col>
                            <img src={`${process.env.REACT_APP_MEDIA_URL}/files/${coursefile.courseoutline,
                                coursefile.attendence}`} />

                        </Col>


                        <Col>
                            <img src={`${process.env.REACT_APP_MEDIA_URL}/quiz/${coursefile.quizquestion,
                                coursefile.quiz_lowest,coursefile.quiz_average,coursefile.quiz_best,coursefile.quiz_result}`} />
                        </Col>


                        <Col>
                            <img src={`${process.env.REACT_APP_MEDIA_URL}/mid/${coursefile.midquestion,
                                coursefile.mid_lowest,coursefile.mid_average,coursefile.mid_best,coursefile.mid_result}`} />

                        </Col>
                        <Col>
                            <img src={`${process.env.REACT_APP_MEDIA_URL}/assignment/${coursefile.assignmentquestion,
                                coursefile.assignment_lowest,coursefile.assignment_average,coursefile.assignment_best,
                                coursefile.assignment_result}`} />
                        </Col>
                        <Col>
                            <img src={`${process.env.REACT_APP_MEDIA_URL}/final/${coursefile.finalquestion,
                                coursefile.final_lowest,coursefile.final_average,coursefile.final_best,
                                coursefile.final_result}`} />
                        </Col>

                    </Container>
                </span>

            ))}

        </div>
    )
}
export default Coursefile

