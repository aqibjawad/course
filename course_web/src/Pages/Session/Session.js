import React, { useState, useEffect } from 'react';
import './Session.css';
import { GET } from "../../apicontroller/ApiController"

import { Link, useParams } from "react-router-dom"
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const Session = () => {

    const { department } = useParams()

    const [departments, setDepartment] = useState([])

    const [sessions, setSession] = useState([])


    useEffect(() => {

        let array = department.split('-')
        const id = array[array.length - 1]

        GET(`department/${id}`).then((result) => {
            setDepartment(result)
        })

        GET(`session/${id}`).then((result) => {
            setSession(result)
        })

    }, [department])

    return (

        <div id="main-body content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2" >
                        <div className="col-sm-6">
                            <p className="m-0" style={{ color: "black", textAlign: "center", fontWeight: "bold", fontSize: "30px", fontStyle: "normal", fontFamily: "serif" }}>
                                Select Session </p>
                        </div>{/* /.col */}

                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <section class="content">

                <div className="conatiner-fluid">

                    <Row>
                        {sessions && sessions.map((session) => (
                            <Col sm={6} className='mt-4'>
                                <Link className="btn1 button-arounder" to={`/session/${session.department.replaceAll(" ", "-")}-${session.dpt_id}/${session.session}-${session.id}`} style={{ color: 'white', textDecoration: 'none' }}> {session.session} </Link>

                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </div>

    )
}

export default Session

