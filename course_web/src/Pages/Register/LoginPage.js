import React, { useRef } from "react";
import { Link } from 'react-router-dom'

import "./LoginPage.css";
import Axios from "axios";

import { Auth } from "../../context/Auth.Context";

import { useNavigate } from 'react-router-dom';

import { Card, Button, Form, Row,Col } from "react-bootstrap";

import '../../App.css'

import logo from './lock2.png';


const Signin = () => {

    const emailRef = useRef();
    const passwordRef = useRef()

    let navigation = useNavigate();


    /* Auth Context */
    const auth = Auth();

    console.log(Auth());

    // const history = useHistory();

    /* Submit Form */
    const submit = async (e) => {
        e.preventDefault();

        var check = 0;
        /* Form Validators - Empty Check */
        emailRef.current.value.length === 0 && check++;
        passwordRef.current.value.length === 0 && check++;

        if (check === 0) {

            const formData = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };
            const result = await Axios.post(`${process.env.REACT_APP_API_URL}auth/login`, formData);

            if (result.data.error == 0) {

                /* Successful Login */
                auth.activateToken(localStorage.setItem("token", result.data.token));
                localStorage.setItem("user", JSON.stringify(result.data.user));
                auth.activateToken(localStorage.setItem("token", result.data.token));
                auth.activateAuthentication(true);
                if (result.data.user.role === "user") {
                    navigation("/test");
                }
            }
        }
    };


    return (
        <div className="" style={{ backgroundColor: "white" }}>
            <div className="d-flex justify-content-center" style={{ padding: "0px 0px", height: "575px", backgroundColor: "white" }} >
                <div className="text-center m-5-auto" style={{ marginTop: "40px" }}>
                    <h2 style={{ fontFamily: "serif", fontWeight: "normal", fontWeight: "bold", color:"#51247A" }}>Sign In </h2>
                    <Card style={{ height: "465px", width: "450px", backgroundColor: "white", alignItems: "center",
                    boxShadow:"10px 10px 21px 0px rgba(0,0,0,0.75)",
                            WebkitBoxShadow:"10px 10px 21px 0px rgba(0,0,0,0.75)", 
                            MozBoxShadow:"10px 10px 21px 0px rgba(0,0,0,0.75)" }} className="border-0">
                        <Card.Body >
                            <img src={logo} alt="Logo" style={{ maxWidth: '130px', maxHeight: '75px', 
                            borderRadius: 50, display: "inline-block", 
                            marginTop: "20px"}} />

                            <Form onSubmit={submit} style={{ backgroundColor: "white", height: "170px", borderRadius:10 }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        ref={emailRef}
                                        type="text"
                                        placeholder="Username" required
                                        style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        ref={passwordRef}
                                        type="password"
                                        placeholder="Password" required
                                        style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}
                                    />
                                    {/* <p style={{
                                        fontSize: "14px", float: "right", color: "black",
                                        fontFamily: "serif", fontWeight: "normal", marginTop: "10px"
                                    }}> Forget password?
                                        <Link to="/forgetpassword"
                                            style={{ color: "blue",fontFamily: "serif", fontWeight: "normal" }}> Reset </Link></p> */}
                                </Form.Group>
                            </Form>
                            <Col md={6}style={{marginLeft:"105px"}}>
                                <button id="sub_btn" className="border-0 w-100" type="submit" onClick={submit} style={{
                                    fontFamily: "serif", fontWeight: "normal", background: "#51247A",
                                    borderColor: "rgba(7,48,111,1)"
                                }}>Sign In</button>
                            </Col>
                            <footer>
                                <p style={{ color: "black",fontFamily: "serif", fontWeight: "normal" }}>First time? <Link to="/register" 
                                style={{ color: "blue",fontFamily: "serif", fontWeight: "normal" }}>Create an account</Link>.</p>
                                <p style={{ color: "black",fontFamily: "serif", fontWeight: "normal" }}><Link to="/" style={{ color: "blue",fontFamily: "serif", fontWeight: "normal" }}>Back to Homepage</Link>.</p>
                            </footer>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    )
}
export default Signin
