import React, { useState, useEffect } from 'react';
import './Course.css';
import { GET } from "../../apicontroller/ApiController"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Link, useParams } from "react-router-dom"
const Course = () => {

    const { course } = useParams()

    const [semesters, setSemester] = useState([])

    const [courses, setCourse] = useState([])


    let array = course.split('-')
    const id = array[array.length - 1]

    useEffect(() => {

        GET(`semester/${id}`).then((result) => {
            setSemester(result)
        })

        GET(`course/${id}`).then((result) => {
            setCourse(result)

        })

    }, [course])

    return (
            <div id="main-body content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2" >
                            <div className="col-sm-6">
                                <p className="m-0" style={{ color: "black", textAlign: "center", fontWeight: "bold", fontSize: "30px", fontStyle: "normal", fontFamily: "serif" }}>
                                    Select Course </p>
                            </div>{/* /.col */}

                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                <section class="content">

                    <div className="conatiner-fluid">

                        <div>
                            
                                {courses && courses.map((course) => (
                                    <div className="button-arrow1">
                                        <Link to={`/coursefile/${course.department.replaceAll(" ", "-")}-${course.dpt_id}/session/${course.session}-${course.sess_id}/semester/${course.semester}-${course.sem_id}/${course.id}`} style={{ color: "white", textDecoration: 'none' }}>
                                            {course.coursename}
                                        </Link>

                                    </div>
                                ))}
                           
                        </div>
                    </div>
                </section>
            </div>



        )
                                }

export default Course

