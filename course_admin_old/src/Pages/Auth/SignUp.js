import React, { useRef, useState } from "react";

import { Card, Button, Form } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { POST } from "../../apicontroller/ApiController";

import logo from './logo.png';
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
            role: 2
        };
        POST("auth", formData).then((res) => {
            toast("Your Account Added Successfully")
            navigation("/");
        });
    };

    return (
        <div
            className="d-flex justify-content-center"
            style={{ padding: "30px 30px" }}
        >
            <Card style={{ width: "400px",backgroundColor: "#E9EEf2", alignItems:"center" }} className="border-0">
                <Card.Body style={{ padding: "20px", backgroundColor: "#E9EEf2" }}>
                    <div className="container">
                        <img src={logo} alt="Logo" style={{ marginBottom: '5px', maxWidth: '120px', maxHeight: '60px', borderRadius: 50, display: "inline-block" }} />
                        <p style={{ fontFamily: "serif", fontWeight: "700", fontSize: "20px", color:"#233D7B" }}> E-Course Profile System</p>

                    </div>
                    <Card.Title style={{ color: "#233D7B", fontWeight: "700", fontSize: "24px",fontFamily: "serif" }} >
                        Sign Up
                    </Card.Title>

                    <Form onSubmit={submit}>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicName"
                            style={{ width: "350px", marginTop: "15px",fontFamily: "serif", fontWeight: "normal" }}
                        >
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                ref={firstnameRef}
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEamil"
                            style={{ width: "350px" ,fontFamily: "serif", fontWeight: "normal"}}
                        >
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                ref={lastnameRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEamil"
                            style={{ width: "350px",fontFamily: "serif", fontWeight: "normal" }}
                        >
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                ref={emailRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                            style={{ width: "350px",fontFamily: "serif", fontWeight: "normal" }}
                        >
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                ref={passwordRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicConfirmPassword"
                            style={{ width: "350px",fontFamily: "serif", fontWeight: "normal" }}
                        >
                            <Form.Control
                                onChange={(e) =>
                                    matchPass(e.target.value, passwordRef.current.value)
                                }
                                type="password"
                                placeholder="Confirm Password"
                                required
                            />
                            {passError && (
                                <span style={{ fontSize: "0.8rem" ,fontFamily: "serif", fontWeight: "normal"}} className="text-danger">
                                    Both passwords don't match
                                </span>
                            )}
                        </Form.Group>

                        <Button
                            className="border-0"
                            type="submit"
                            style={{ width: "350px", backgroundColor: "#233D7B",fontFamily: "serif", fontWeight: "normal" }}
                        >
                            Create Account
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Signup