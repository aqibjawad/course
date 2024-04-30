import React, { useState, useEffect } from 'react';
import './Semester.css';
import { GET } from "../../apicontroller/ApiController"

import { Link, useParams } from "react-router-dom"

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Semester = () => {

    const { semester } = useParams()

    const [sessions, setSession] = useState([])

    const [semesters, setSemester] = useState([])


    useEffect(() => {

        let array = semester.split('-')
        const id = array[array.length - 1]

        GET(`session/${id}`).then((result) => {
            setSession(result)
        })

        GET(`semester/${id}`).then((result) => {
            setSemester(result)

        })

    }, [semester])


    return (
        <div id="main-body content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2" >
                        <div className="col-sm-6">
                            <p className="m-0" style={{ color: "black", textAlign: "center", fontWeight: "bold", fontSize: "30px", fontStyle: "normal", fontFamily: "serif" }}>
                                Select Section </p>
                        </div>{/* /.col */}

                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <section class="content">

                <div className="conatiner-fluid">

                    <Row>
                        {semesters && semesters.map((semester) => (
                            <Col sm={6} className='mt-4'>

                                {/* {session.semester} */}
                                <Link className="gradient-button" to={`/course/${semester.department.replaceAll(" ", "-")}-${semester.dpt_id}/session/${semester.session}-${semester.sessid}/semester/${semester.semester}`} style={{ color: 'white', textDecoration: 'none' }}> {semester.semester} </Link>

                            </Col>



                        ))}
                    </Row>

                </div>
</section>
        </div>
        
    )
}

export default Semester

