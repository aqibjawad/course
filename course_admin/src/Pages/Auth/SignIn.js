import { useRef } from "react";
import Axios from "axios";

import { Card, Button, Form, Row } from "react-bootstrap";

import { Auth } from "../../context/Auth.Context";

import { useNavigate } from 'react-router-dom';

import { AiFillLock } from "react-icons/ai";

import { Link } from "react-router-dom";

import logo from './logo.png';

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
        if (result.data.user.role === "admin") {
          navigation("/dashboard");
        }
        else {
          navigation("/teachercoursefile");
        }
      }
    }
  };

  return (
    <div className="" style={{backgroundColor:"#CADDFE"}}>
    <div className="d-flex justify-content-center" style={{ padding: "50px 0px",height:"550px",backgroundColor:"#CADDFE" }} >

      <Card style={{ width: "400px", backgroundColor: "white", alignItems:"center" }} className="border-0">
        <Card.Body style={{ padding: "29px 50px" }}>

          <div className="container">
            <img src={logo} alt="Logo" style={{ marginBottom: '5px',marginLeft:'75px', maxWidth: '130px', maxHeight: '75px', borderRadius: 50, display: "inline-block"}} />
            <p style={{ fontFamily: "serif", fontWeight: "700",fontSize:"23px", textAlign:'center',color:"#233D7B"}}> E-Course Profile System</p>

          </div>
          <Card.Title style={{ color: "#233D7B", fontWeight: "700", fontSize: "24px" }} >
            <span style={{ textAlign: 'center', fontFamily: "serif"}}> Sign In  </span>
          </Card.Title>

          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                ref={emailRef}
                type="text"
                placeholder="Username"
                style={{ width: "290px",fontFamily: "serif", fontWeight: "normal" ,background:"#E6E6E6"}}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
                style={{width: "290px", fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}
              />
              <div
                id="login-error-msg"
                className="mt-3 text-danger font-weight-bold"
              ></div>
              {/* <p style={{fontSize: "14px", float: "right",  
          fontFamily: "serif", fontWeight: "normal"}}> Forget password?
              <Link to="/forgetpass"  
          style={{ fontSize: "14px", float: "right",  color: "blue", 
          fontFamily: "serif", fontWeight: "normal" }}> Reset </Link></p> */}
            </Form.Group>
            

            <Button
              type="submit"
              className="border-0 w-100"
              style={{fontFamily:"serif",fontWeight:"normal",background:"rgba(7,48,111,1)", borderColor:"rgba(7,48,111,1)"}}
            >
              Sign in
            </Button>
          </Form>
         <p  style={{ fontSize: "14px", float: "right", 
            fontFamily: "serif", fontWeight: "normal" ,marginTop:"10px"}}>First Time?
          <Link
            to="/signup"
            style={{ fontSize: "14px", float: "right", color: "blue", 
            fontFamily: "serif", fontWeight: "normal" }}
          >
            Create Account
          </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
    </div>
  )
}
export default Signin