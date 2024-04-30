import { useRef ,useState,useEffect} from "react";
import Axios from "axios";

import { Card, Button, Form, Row ,InputGroup,Spinner,FormControl} from "react-bootstrap";

import { Auth } from "../../context/Auth.Context";


import { Link ,useLocation} from "react-router-dom";

import { toast } from "react-toastify";
import queryString from "query-string";

import logo from './logo.png';

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
    <div className="" style={{ backgroundColor: "#CADDFE" }}>
      <div className="d-flex justify-content-center" style={{ padding: "50px 0px", height: "550px", backgroundColor: "#CADDFE" }} >


        <Card style={{ width: "400px", backgroundColor: "white", alignItems: "center" }} className="border-0">
          <Card.Body style={{ padding: "29px 50px" }}>

            <div className="container">
              <img src={logo} alt="Logo" style={{ marginBottom: '5px', marginLeft: '75px', maxWidth: '130px', maxHeight: '75px', borderRadius: 50, display: "inline-block" }} />
              <p style={{ fontFamily: "serif", fontWeight: "700", fontSize: "23px", textAlign: 'center', color: "#233D7B" }}> E-Course Profile System</p>

            </div>
            <Card.Title style={{ color: "#233D7B", fontWeight: "600", fontSize: "24px" }} >
              <span style={{ textAlign: 'center', fontFamily: "serif" }}> Reset Password  </span>
            </Card.Title>
            {id ? (
              loading ? (
                <div className="card pt-3 rounded-0 border-0">
                  <div className="card-body p-0">
                    <Form onSubmit={submit}>
                      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        ref={emailRef}
                        type="text"
                        placeholder="Username"
                        style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}
                      />
                    </Form.Group> */}

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
                style={{width: "290px", fontFamily: "serif", fontWeight: "normal",background:"#E6E6E6" }}
              /> */}

                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          name="password"
                          minlength="8"
                          className="form-control"
                          placeholder="Enter Password"
                          required
                        style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}

                        />

                      </Form.Group>


                      <Button
                        type="submit"
                        className="border-0 w-100"
                        style={{ fontFamily: "serif", fontWeight: "normal", background: "rgba(7,48,111,1)", borderColor: "rgba(7,48,111,1)" }}
                      >
                        Reset Password
                      </Button>
                    </Form>

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
                    style={{ width: "290px", fontFamily: "serif", fontWeight: "normal", background: "#E6E6E6" }}
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
                

                  <p style={{ fontSize: "14px", float: "right",
                     fontFamily: "serif", fontWeight: "normal",marginTop:"10px"}}>Back To
                    <Link
                      to="/"
                      style={{ fontSize: "14px", float: "right", 
                      color: "blue", fontFamily: "serif", fontWeight: "normal" }}
                    >
                      Sign In
                    </Link>
                  </p>
                
              </div>
          
                   )} </Card.Body>
        </Card>
      </div>
      </div>
      );
}