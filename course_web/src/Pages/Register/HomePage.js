import React from 'react'
import { Link } from 'react-router-dom'
import "./Homepage.css";
export default function HomePage() {
    return (
        <div className="" style={{backgroundColor:"#CADDFE"}}>
    <div className="d-flex justify-content-center" style={{ padding: "50px 0px",height:"550px",backgroundColor:"#CADDFE" }} >

            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/ ">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
        </div>
    )
}
