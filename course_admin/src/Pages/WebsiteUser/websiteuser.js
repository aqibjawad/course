import React, { useRef, useState, useEffect, suspend, activate } from 'react';

import "./websiteuser.css";

import {
    Col, Table
} from "react-bootstrap";


import { PUT, GET } from "../../apicontroller/ApiController"

import { toast } from "react-toastify";


import { FaTimes } from 'react-icons/fa';

import { AiOutlineCheckCircle } from 'react-icons/ai';

const Websiteuser = () => {

    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        GET("auth/user").then((result) => {
            setUsers(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    const suspend = async (event, id) => {
        await PUT("auth/status/suspend", id, "").then((result) =>{
            toast("User Suspended! ")  
            fetchData();
        })
    };

    const activate = async (event, id) => {
        await PUT("auth/status/approve", id, "").then((result) =>{
            toast("User Approve! ")  
            fetchData();
        })
    };

    return (
        <div className="main-body content-wrapper" style={{ backgroundColor: "white" }}>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <p className="m-0" style={{ fontWeight: "bold", fontSize: "30px", fontStyle: "normal", fontFamily: "serif" }}>
                                Website User's Info</p>
                        </div>{/* /.col */}

                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <section class="content">

                <div className="conatiner-fluid">
                    <Col sm={8} className="mt-2">
                        <div className="card" style={{ fontFamily: "serif", fontWeight: "normal" }}>
                            <div className="card-body">
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th> username </th>
                                            <th>email</th>
                                            <th> Status</th>
                                            <th> Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users && users.map((user) => (

                                            <tr>
                                                <td> {user.firstname + " " + user.lastname} </td>
                                                <td>{user.email}</td>
                                                <td>{user.status}</td>
                                                <td>
                                                <FaTimes className="ml-4" onClick={(e) => suspend(e, user.id)} /> 
                                            <AiOutlineCheckCircle className="ml-4" onClick={(e) => activate(e, user.id)} />
                                            </td>

                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </div>
            </section>
        </div>
    )
}

export default Websiteuser