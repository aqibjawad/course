import React from "react";

import NavBar from "../Components/NavBar/NavBar";
import SideBar from "../Components/Sidebar/Sidebar";

import './index.css'

const WebsiteLayout = ({ children }) => {
    return (
        <React.Fragment>

            <NavBar /> 

            <div className="d-flex">
                <SideBar />
                <div className="container main-body">
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
}

export default WebsiteLayout;
