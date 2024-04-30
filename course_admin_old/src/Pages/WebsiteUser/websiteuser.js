import React, { useEffect } from "react";

import "./websiteuser.css";

import {
    Col, Table
} from "react-bootstrap";

import {  GET } from "../../apicontroller/ApiController";


const websiteuser = () => {

    // const [users, setUsers] = useState([]);

    // const fetchData = async () => {
    //     GET("user").then((result) => {
    //         setUsers(result);
    //     });
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [])

    return (
        <div>
            <p style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "-3px", fontStyle: "normal", textAlign: "center", fontFamily: "serif" }}>Website User Status </p>
       
        <Col sm={8} className="mt-5">
        <div className="card" style={{ fontFamily: "serif", fontWeight: "normal" }}>
            <div className="card-body">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th> username </th>
                            <th>email</th>
                            <th> Status</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {users && users.map((user) => (

                            <tr>
                                <td> {user.firstname+" "+ user.lastname} </td>
                                <td>{user.email}</td>
                                <td> {user.status} </td>

                            </tr>
                        ))}

                    </tbody> */}
                </Table>
            </div>
        </div>
    </Col>
    </div>
    )
}

export default websiteuser