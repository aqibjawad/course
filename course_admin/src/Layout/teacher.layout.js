import React from "react";

import NavBar from "../Components/NavBar/NavBar";

import './index.css'

import TeacherSideBar from "../Components/teachersidebar/teachersidebar";

const TeacherLayout = ({ children }) => {
    return (
        <React.Fragment>
            <NavBar />
            <div className="">
                <TeacherSideBar />
                <div className="main-body">
                    {children}
                </div>
            </div>

        </React.Fragment>
    );
}

export default TeacherLayout;
