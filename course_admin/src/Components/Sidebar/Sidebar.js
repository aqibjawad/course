import React, { useState } from "react";
import { Link } from "react-router-dom";

import './index.css'

import { AiFillDashboard, AiFillFilePdf, AiFillBook } from 'react-icons/ai';
import { FaSchool, FaCalendarAlt } from 'react-icons/fa';
import { FcDepartment } from 'react-icons/fc';
import { GiTeacher } from 'react-icons/gi';

import { BsClipboard2PlusFill } from "react-icons/bs";

import { BiUserCircle } from "react-icons/bi";

import bg from './sidebar.jpg';

const SideBar = () => {

  const [active, setActive] = useState(1);

  const [activebutton, setActiveButton] = useState();



  return (
    
    <div className="main-sidebar sidebar-dark-primary elevation-4"  style={{ color:"GrayText",background:"white"}}>

      <a href="/dashboard" className="brand-link" style={{background:"#14BC5C"}}>
  <img src="dist/img/logo.png" alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
  <span className="brand-text font-weight-dark" style={{color:"white", fontWeight:"bold",fontFamily: "serif"}}>ADMIN PANEL</span>
</a>

<nav class="mt-2">
      <ul className="list-unstyled user-menubar nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/dashboard" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard style={{ color: '#14BC5C' }} />
              <p style={{ textDecoration: 'none', fontFamily: "serif",color: 'black' }}> Dashboard </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/category" className="menu-item" >
            <span className='d-flex'>
              <FaSchool style={{ color: '#14BC5C' }} />
              <p style={{ textDecoration: 'none', fontFamily: "serif",color: 'black' }}> Category </p>
            </span>
          </Link>
        </li>
        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/session" className="menu-item" >
            <span className='d-flex'>
              <BsClipboard2PlusFill style={{ color: '#14BC5C' }} />
              <p style={{ textDecoration: 'none', fontFamily: "serif" ,color: 'black'}}> Session </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/section" className="menu-item" >
            <span className='d-flex'>
              <FaCalendarAlt style={{ color: '#14BC5C' }} />
              <p style={{ textDecoration: 'none', fontFamily: "serif" ,color: 'black'}}> Section </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 2 ? "active-list" : ""}`} onClick={() => setActive(2)}>
          <Link to="/teacher" className="menu-item" >
            <span className='d-flex'>
              <GiTeacher style={{ color: '#14BC5C' }} />
              <p style={{ textDecoration: 'none', fontFamily: "serif",color: 'black' }}> Teacher </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/course" className="menu-item" >
            <span className='d-flex'>
              <AiFillBook style={{ color: '#14BC5C' }} />
              <p style={{ textDecoration: 'none', fontFamily: "serif",color: 'black' }}> Course </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/course file" className="menu-item" >
            <span className='d-flex'>
              <AiFillFilePdf style={{ color: '#14BC5C' }} />
              <p style={{ textDecoration: 'none', fontFamily: "serif",color: 'black' }}> Course File </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/website user" className="menu-item" >
            <span className='d-flex'>
              <BiUserCircle style={{ color: '#14BC5C' }} />
              <p style={{ textDecoration: 'none', fontFamily: "serif" ,color: 'black' }}> Website User's Info </p>
            </span>
          </Link>
        </li>

      </ul>
      </nav>
    </div>
  );
};

export default SideBar;
