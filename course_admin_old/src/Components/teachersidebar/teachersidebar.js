import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form } from 'react-bootstrap';

import './index.css'

import { AiFillDashboard, AiFillFilePdf, AiFillBook  } from 'react-icons/ai';
import { FaSchool } from 'react-icons/fa';
import { FcDepartment } from 'react-icons/fc';
import { GiTeacher } from 'react-icons/gi';

const TeacherSideBar = () => {

  const [active, setActive] = useState(1);

  const [activebutton, setActiveButton] = useState();


 
  return (
    <div className="sidebar col-3">

      <ul className="list-unstyled user-menubar">
      
      <li className="menu-item"><p style={{ textDecoration: 'none' ,fontFamily:"serif"}}> Teacher Admin Panel </p></li>
        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/teacherdashboard" className="menu-item" >
            <span className='d-flex'>
              <AiFillBook style={{color:'white'}} />
              <p style={{ textDecoration: 'none' }}> Dashboard </p>
            </span>
          </Link>
        </li>
 
        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/teachercoursefile" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{color:'white'}} />
              <p style={{ textDecoration: 'none' }}> Course File </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/quiz" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{color:'white'}} />
              <p style={{ textDecoration: 'none' }}> Quiz </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/mid" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{color:'white'}} />
              <p style={{ textDecoration: 'none' }}> Mid </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/final" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{color:'white'}} />
              <p style={{ textDecoration: 'none' }}> Final </p>
            </span>
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default TeacherSideBar;
