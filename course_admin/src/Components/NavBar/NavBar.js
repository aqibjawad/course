import React, { useState } from "react";

import { useNavigate,Link} from 'react-router-dom';

import { Button } from "react-bootstrap";

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
      <div>{/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{ background: "#14BC5C" }}>
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">

           
          <li className="nav-item d-none d-sm-inline-block" >
              <a onClick={about} className="nav-link" role="button" style={{ color: "white", fontWeight: "bold", fontFamily: "serif" }}>About</a>
            </li>

            <li className="nav-item d-none d-sm-inline-block" >
              <a onClick={logout} className="nav-link" role="button" style={{ color: "#DC1C1C", fontWeight: "bold", fontFamily: "serif" }}>Logout</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                <i className="fas fa-expand-arrows-alt" />
              </a>
            </li>

          </ul>
        </nav>
        {/* /.navbar */}

      </div>
    </>
  );
}

export default NavBar;