import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import { useNavigate } from 'react-router-dom';

import { Auth } from '../../context/Auth.Context';

import { toast } from "react-toastify";

import logo from './logo.png';

console.log(logo);

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const { isAuthenticated } = Auth()

  const navigate = useNavigate()

  const auth = Auth();


  const logout = () => {
    auth.activateAuthentication(false);
    auth.activateToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshCycle");
    localStorage.removeItem("user");
    toast("Logout")
    navigate("/");
  };

  const about = () => {
    navigate("/about");
  };

  return (

    <>
      <nav className="main-header navbar navbar-white navbar-light" style={{flexDirection:"row",marginLeft:"0px",marginRight:"0px",width:"100%"}}>
        <div className="nav-container">
         {/* Left navbar links */}
         <ul className="navbar-nav">
           
          </ul>
          <ul className="navbar-nav ml-auto" style={{display:"flex",flexDirection:"row"}}>

            <li className="nav-item d-none d-sm-inline-block" style={{marginRight:"5px"}} >
              <a onClick={about} className="nav-link" role="button" style={{ color: "white", fontWeight: "bold", fontFamily: "serif" }}>About</a>
            </li>

            <li className="nav-item d-none d-sm-inline-block" style={{marginRight:"5px",marginLeft:"10px"}}>
              <a onClick={logout} className="nav-link" role="button" style={{ color: "#DC1C1C", fontWeight: "bold", fontFamily: "serif" }}>Logout</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-widget="fullscreen" href="#" role="button"style={{marginRight:"5px",marginLeft:"10px"}}>
                <i className="fas fa-expand-arrows-alt" />
              </a>
            </li>
            </ul>

        </div>
      </nav>
    </>
  );
}

export default NavBar;
