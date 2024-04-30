import React, { useState } from "react";
import { Link } from "react-router-dom";

import './index.css'

import { AiFillDashboard, AiFillFilePdf, AiFillBook  } from 'react-icons/ai';
import { FaSchool,FaCalendarAlt } from 'react-icons/fa';
import { FcDepartment } from 'react-icons/fc';
import { GiTeacher } from 'react-icons/gi';
 
import {BsClipboard2PlusFill} from "react-icons/bs";

import { BiUserCircle } from "react-icons/bi";

const SideBar = () => {

  const [active, setActive] = useState(1);

  const [activebutton, setActiveButton] = useState();



  return (
    <div className="sidebar col-3"style={{maxWidth:"250px",color:"#4a7594"}}>

      <ul className="list-unstyled user-menubar">
      <li className="menu-item"><p style={{ textDecoration: 'none' ,fontFamily:"serif"}}> Admin Panel </p></li>
        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/dashboard" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard style={{color:'white'}} />
              <p style={{ textDecoration: 'none',fontFamily:"serif" }}> Dashboard </p>
            </span>
          </Link>
        </li>
 
        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/department" className="menu-item" >
            <span className='d-flex'>
              <FaSchool style={{color:'white'}} />
              <p style={{ textDecoration: 'none',fontFamily:"serif" }}> Department </p>
            </span>
          </Link>
        </li>
        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/session" className="menu-item" >
            <span className='d-flex'>
              <BsClipboard2PlusFill style={{color:'white'}} />
              <p style={{ textDecoration: 'none',fontFamily:"serif" }}> Session </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/semester" className="menu-item" >
            <span className='d-flex'>
              <FaCalendarAlt style={{color:'white'}} />
              <p style={{ textDecoration: 'none',fontFamily:"serif" }}> Semester </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/teacher" className="menu-item" >
            <span className='d-flex'>
              <GiTeacher style={{color:'white'}} />
              <p style={{ textDecoration: 'none',fontFamily:"serif" }}> Teachers </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/courses" className="menu-item" >
            <span className='d-flex'>
              <AiFillBook style={{color:'white'}} />
              <p style={{ textDecoration: 'none',fontFamily:"serif" }}> Courses </p>
            </span>
          </Link>
        </li>

       <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/coursefileadmin" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{color:'white'}} />
              <p style={{ textDecoration: 'none',fontFamily:"serif"  }}> Course Files </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/websiteuser" className="menu-item" >
            <span className='d-flex'>
              <BiUserCircle style={{color:'white'}} />
              <p style={{ textDecoration: 'none',fontFamily:"serif"  }}> Website Users Info </p>
            </span>
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default SideBar;
