import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form } from 'react-bootstrap';

import './index.css'

import { AiFillDashboard, AiFillFilePdf  } from 'react-icons/ai';
import { FaSchool } from 'react-icons/fa';
import { FcDepartment } from 'react-icons/fc';
import { GiTeacher } from 'react-icons/gi';

const TeacherSideBar = () => {

  const [active, setActive] = useState(1);

  const [activebutton, setActiveButton] = useState();


 
  return (
    <div className="main-sidebar sidebar-dark-primary elevation-4"  style={{ color:"GrayText",background:"white"}}>

      <a href="/dashboard" className="brand-link" style={{background:"#14BC5C"}}>
  <img src="dist/img/logo.png" alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
  <span className="brand-text font-weight-dark" style={{color:"white", fontWeight:"bold",fontFamily: "serif"}}>TEACHER  PANEL</span>
</a>
<nav class="mt-2">
      <ul className="list-unstyled user-menubar nav nav-pills nav-sidebar flex-column"  data-widget="treeview" role="menu" data-accordion="false">
        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/teacherdashboard" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard style={{color:'#14BC5C'}} />
              <p style={{ textDecoration: 'none' , fontFamily: "serif",color: 'black'}}> Dashboard </p>
            </span>
          </Link>
        </li>
 
        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/teachercoursefile" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{color:'#14BC5C'}} />
              <p style={{ textDecoration: 'none' , fontFamily: "serif",color: 'black'}}> Course File </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/quiz" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{color:'#14BC5C'}} />
              <p style={{ textDecoration: 'none' , fontFamily: "serif",color: 'black'}}> Quiz  </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/mid" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{color:'#14BC5C'}} />
              <p style={{ textDecoration: 'none' , fontFamily: "serif",color: 'black'}}> Mid Term </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/assignment" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{color:'#14BC5C'}} />
              <p style={{ textDecoration: 'none' , fontFamily: "serif",color: 'black'}}> Assignment </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/final" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{color:'#14BC5C'}} />
              <p style={{ textDecoration: 'none' , fontFamily: "serif",color: 'black'}}> Final Term </p>
            </span>
          </Link>
        </li>

      </ul>
      </nav>
    </div>
  );
};

export default TeacherSideBar;
