import React from 'react'
import { Link } from 'react-router-dom'

import BackgroundImage from './pr.jpeg'
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div className="main-body content-wrapper" style={{
            background: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat:"no-repeat",
           
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            marginLeft:"0px"
        }}>
        
            <div className="content-header"  >

                <h1 className="main-title " style={{ color: "Highlight" ,fontWeight:"bold",marginLeft:"20px"}}>E-Course Profile System</h1>

                <div className="buttons text-center">
                    <Link to="/login" >
                        <button className="primary-button" style={{backgroundColor:"black",marginTop:"250"}}>log in</button>
                    </Link>
                    <Link to="/register" >
                        <button className="primary-button" id="reg_btn"style={{backgroundColor:"black",marginTop:"250"}}><span>register </span></button>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

