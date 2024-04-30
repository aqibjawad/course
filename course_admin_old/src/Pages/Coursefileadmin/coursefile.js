import React, { useEffect, useState } from "react";

import { Card, Row, Col } from "react-bootstrap";

import "./coursefile.css";

import { GET } from "../../apicontroller/ApiController";

import currentlogo from './Currentlogo.png';

import oldlogo from './oldlogo.png';

import completedlogo from './completedlogo.png';

const Dashboard = () => {

    

    return (
        <div>
            <p style={{fontWeight:"bold",fontSize:"30px" ,marginBottom:"-3px",fontStyle:"normal",textAlign:"center",fontFamily:"serif"}}>Course Files</p>
        <Row>
            <Col sm={4}>
                <Card className="mt-5">
                    <div className="card-head7">
                        <Card.Body>
                            <div className="">
                                <img src={currentlogo} alt="Logo" style={{ height: "45px", width: "45px",borderRadius:60 }} />
                                <div className="total-head"style={{fontFamily:"serif"}}> Current Course Files </div>

                                <div className="total-no"></div>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </Col>

            <Col sm={4}>
                <Card className="mt-5">
                    <div className="card-head5">
                        <Card.Body>
                            <div className="">
                                <img src={oldlogo} alt="Logo" style={{ height: "45px", width: "45px",borderRadius:60}} />
                                <div className="total-head" style={{fontFamily:"serif"}}> Old Course Files</div>
                                <div className="total-no"> </div>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </Col>

            <Col sm={4}>
                <Card className="mt-5">
                    <div className="card-head8">
                        <Card.Body>
                            <div className="">
                                <img src={completedlogo} alt="Logo"  style={{ height: "45px", width: "45px",borderRadius:60}} />
                                <div className="total-head" style={{fontFamily:"serif"}}> Completed Course Files</div>

                                <div className="total-no"> </div>
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