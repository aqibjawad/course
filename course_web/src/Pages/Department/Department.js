import React, { useState, useEffect } from 'react';

import { GET } from "../../apicontroller/ApiController"

import { Link } from "react-router-dom"

import './Department.css';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Department = () => {


    const [departments, setDepartments] = useState(false);

    const fetchData = async () => {
        GET("department").then((result) => {
            setDepartments(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div id="main-body content-wrapper" style={{backgroundColor:"white",width:"100%",height:"500px"}}>
            <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2" >
                    <div className="col-sm-6">
                    <p className="m-0" style={{color: "black",textAlign:"center",fontWeight: "bold", fontSize: "30px", fontStyle: "normal", fontFamily: "serif"}}>
                                Select Category </p>
                    </div>{/* /.col */}
                    
                </div>{/* /.row */}
            </div>{/* /.container-fluid */}
        </div>
        <section class="content">

                <div className="conatiner-fluid">
           
            <div>
                <Row>
                    {departments && departments.map((department) => (

                        <Col sm={6} className='mt-4'>
                            <Link className="bt" to={`/session/${department.department.replaceAll(" ", "-").toLowerCase()}-${department.id}`}>
                                {department.department}
                            </Link>
                        </Col>
                    ))}

                </Row>

            </div>

        </div>
        </section>
        </div>
    )
}

export default Department

