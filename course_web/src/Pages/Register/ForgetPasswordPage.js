import React, { useRef ,useState,useEffect} from "react";
import { Link } from 'react-router-dom'

import "./LoginPage.css";
import Axios from "axios";

import { Auth } from "../../context/Auth.Context";

import { useLocation } from 'react-router-dom';

import { Card, Button, Form, Row, Col,InputGroup,Spinner,FormControl } from "react-bootstrap";

import '../../App.css'

import logo from './lock2.png';

import { toast } from "react-toastify";
import queryString from "query-string";


export default function ForgetPassword() {
    const [email, setEmail] = useState();
    const [error, setError] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const value = queryString.parse(location.search);
    const [id, setId] = useState();

    const reset = () => {
        setLoading(true);

        if (email && email.length) {
            Axios.get(
                `${process.env.REACT_APP_API_URL}auth/resetpassword?email=${email}`
            ).then((res) => {
                setLoading(false);
                toast.warn("Reset Email sent");
            });
        } else {
            toast.warn("Enter Email");
        }
    };

    useEffect(() => {
        setId(value?.id);

        if (id) {
            Axios.post(`${process.env.REACT_APP_API_URL}auth/resetpassword`, {
                id: id,
            }).then((res) => {
                const { data } = res;
                if (data.error) {
                    setError(true);
                    toast.warn("Token Expired");
                } else {
                    setLoading(!loading);
                }
            });
        }
    }, [id]);

    const submit = (e) => {
        e.preventDefault();

        Axios.post(`${process.env.REACT_APP_API_URL}auth/reset/password`, {
            id,
            password,
        }).then((res) => {
            const { data } = res;
            if (data.error) {
                setError(true);
                toast.warn("Error, Resetting");
            } else {
                toast.success("Password Reset");
            }
        });
    };

    return (
        <div className="" style={{ backgroundColor: "white" }}>
            <div className="d-flex justify-content-center" style={{ padding: "0px 0px", height: "575px", backgroundColor: "white" }} >
                <div className="text-center m-5-auto" style={{ marginTop: "60px" }}>
                    <h2 style={{ fontFamily: "serif", fontWeight: "normal", fontWeight: "bold", color: "#51247A" }}>Reset Your Password </h2>
                    <Card style={{
                        height: "400px", width: "450px", backgroundColor: "white", alignItems: "center",
                        boxShadow: "10px 10px 21px 0px rgba(0,0,0,0.75)",
                        WebkitBoxShadow: "10px 10px 21px 0px rgba(0,0,0,0.75)",
                        MozBoxShadow: "10px 10px 21px 0px rgba(0,0,0,0.75)"
                    }} className="border-0">
                        <Card.Body >
                            <img src={logo} alt="Logo" style={{
                                maxWidth: '130px', maxHeight: '75px',
                                borderRadius: 50, display: "inline-block",
                                marginTop: "20px"
                            }} />
                            {id ? (
                                loading ? (
                                    <div className="card pt-3 rounded-0 border-0">
                                        <div className="card-body p-0">
                                            <h5 className="font-weight-bold">Reset Password</h5>
                                            <Form onSubmit={submit} style={{ backgroundColor: "white", height: "150px", borderRadius: 10 }}>
                                                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        ref={emailRef}
                                        type="text"
                                        placeholder="Username" required
                                        style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}
                                    />
                                </Form.Group> */}

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    {/* <Form.Control
                                        ref={passwordRef}
                                        type="password"
                                        placeholder="Password" required
                                        style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}
                                    /> */}
                                                    <input
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        type="password"
                                                        name="password"
                                                        minlength="8"
                                                        className="form-control"
                                                        placeholder="Enter Password"
                                                        required
                                                    />
                                                </Form.Group>
                                            </Form>
                                            <Col md={6} style={{ marginLeft: "105px" }}>
                                                <button id="sub_btn" className="border-0 w-100" type="submit" onClick={submit} style={{
                                                    fontFamily: "serif", fontWeight: "normal", background: "rgba(7,48,111,1)",
                                                    borderColor: "rgba(7,48,111,1)"
                                                }}>Reset</button>
                                            </Col>
                                        </div>
                                    </div>

                                ) : error ? (
                                    <>
                                        <div className="d-flex justify-content-center">
                                            {/* <FontAwesomeIcon
                      className="text-danger"
                      //icon={faTimes}
                      style={{ fontSize: "80px" }}
                    /> */}
                                        </div>
                                        <h5 className="text-center mt-3 font-weight-bold">
                                            Token Expired, try again ...
                                        </h5>
                                    </>
                                ) : (
                                    <>
                                        <div className="d-flex justify-content-center">
                                            {/* <FontAwesomeIcon
                      className="text-success"
                      // icon={faSpinner}
                      spin
                      pulse
                      style={{ fontSize: "80px" }}
                    /> */}
                                        </div>
                                        <h5 className="text-center mt-3 font-weight-bold">
                                            Wait, while we verify your token ...
                                        </h5>
                                    </>
                                )
                            ) : (
                                <div>
                                    <Form.Label
                                        htmlFor="inlineFormInputGroupUsername"
                                        visuallyHidden
                                        style={{ fontSize: "15px", marginTop: "20px" }}
                                    >
                                        Type your email below to reset your password.
                                    </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                                        </InputGroup.Text>
                                        <FormControl
                                            type="email"
                                            placeholder="Type Your Email"
                                            id="inlineFormInputGroupUsername"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </InputGroup>

                                    <Button
                                        className="border-0"
                                        onClick={reset}
                                        style={{
                                            width: "290px",
                                            backgroundColor: "#233D7B",
                                            marginTop: "30px",
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <Spinner animation="grow" size="sm" /> Reseting...
                                            </>
                                        ) : (
                                            "Continue"
                                        )}

                                    </Button>
                                    <footer>
                                        <p style={{ color: "black", fontFamily: "serif", fontWeight: "normal" }}>Back To <Link to="/login"
                                            style={{ color: "blue", fontFamily: "serif", fontWeight: "normal" }}>Sign In</Link>.</p>
                                        <p style={{ color: "black", fontFamily: "serif", fontWeight: "normal" }}><Link to="/" style={{ color: "blue", fontFamily: "serif", fontWeight: "normal" }}>Back to Homepage</Link>.</p>
                                    </footer>
                                    </div>
                            )}  </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    );
}