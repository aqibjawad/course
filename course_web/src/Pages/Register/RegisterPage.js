import React, { useRef, useState } from "react";

import { Card, Button, Form ,Col} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { POST } from "../../apicontroller/ApiController";

import logo from './lock2.png';
import "./RegisterPage.css";

const Signup = () => {


    let navigation = useNavigate();

    const [passError, setPassError] = useState(false);

    /* Function to match password */
    const matchPass = (confirm, password) => {
        if (confirm.length != 0 || password.length != 0) {
            if (password === confirm) {
                setPassError(false);
            } else {
                setPassError(true);
            }
        } else {
            setPassError(true);
        }
    };

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const submit = async (event) => {
        event.preventDefault();
        const formData = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            role: 1
        };
        POST("auth", formData).then((res) => {
            toast("Your Account Added Successfully")
            navigation("/login");
        });
    };


    return (
        <div className="" style={{ backgroundColor: "white" }}>
            <div className="d-flex justify-content-center" style={{ padding: "0px 0px", height: "700px", backgroundColor: "white" }} >
                <div className="text-center m-5-auto" style={{ marginTop: "20px" }}>
                    <h2 style={{ fontFamily: "serif", fontWeight: "normal", fontWeight: "bold", color:"#51247A" }}>Sign Up </h2>
                    <h5 style={{ fontFamily: "serif", fontWeight: "normal", color:"#51247A" }}>Create your personal account</h5>
                    <Card style={{ height: "560px", width: "450px", backgroundColor: "white", alignItems: "center",
                    boxShadow:"10px 10px 21px 0px rgba(0,0,0,0.75)",
                            WebkitBoxShadow:"10px 10px 21px 0px rgba(0,0,0,0.75)", 
                            MozBoxShadow:"10px 10px 21px 0px rgba(0,0,0,0.75)" }} className="border-0">
                        <Card.Body >
                            <img src={logo} alt="Logo" style={{ maxWidth: '130px', maxHeight: '75px', 
                            borderRadius: 50, display: "inline-block", 
                            marginTop: "20px"}} />

                <Form onSubmit={submit} style={{alignItems:"center", backgroundColor: "white", height: "300px", borderRadius:10 }}>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicName"
                        
                    >
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            ref={firstnameRef}
                            required
                            style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}
                        />
                    </Form.Group>


                    <Form.Group
                        className="mb-3"
                        controlId="formBasicEamil"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            ref={lastnameRef}
                            required
                            style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}

                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicEamil"
                    >
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            ref={emailRef}
                            required
                            style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}

                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                    >
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                            requiredc
                            style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}

                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmPassword"
                    >
                        <Form.Control
                            onChange={(e) =>
                                matchPass(e.target.value, passwordRef.current.value)
                            }
                            type="password"
                            placeholder="Confirm Password"
                            required
                            style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}

                        />
                        {passError && (
                            <span style={{ fontSize: "0.8rem", fontFamily: "serif", fontWeight: "normal" }} className="text-danger">
                                Both passwords don't match
                            </span>
                        )}
                    </Form.Group>

                    <Col md={6}style={{marginLeft:"80px"}}>
                                <button id="sub_btn" className="border-0 w-100" type="submit" onClick={submit} style={{
                                    fontFamily: "serif", fontWeight: "normal", background: "#51247A",
                                    borderColor: "rgba(7,48,111,1)",marginTop:" 30px"
                                }}>
                                    Sign Up
                                </button>
                            </Col>
                </Form>
            
            <footer>
            <p style={{ color: "black",fontFamily: "serif", fontWeight: "normal",marginTop:"10px"}}>Back To<Link to="/" style={{ color: "blue",fontFamily: "serif", fontWeight: "normal" }}>Homepage</Link></p>
            <p style={{ color: "black",fontFamily: "serif", fontWeight: "normal",marginTop:"10px"}}>Back To<Link to="/login" style={{ color: "blue",fontFamily: "serif", fontWeight: "normal" }}>Sign In</Link></p>
               
            </footer>
            </Card.Body>
            </Card>
            </div>
            </div>
        </div>
    )

}
export default Signup
