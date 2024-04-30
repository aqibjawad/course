import React from "react";

import NavBar from "../Component/NavBar/NavBar";

const WebsiteLayout = ({ children }) => {
    return (
        <React.Fragment>

            <NavBar /> 

            <div className=" ">
                <div className="main-body ">
                    {children}
                </div>
            </div>

        </React.Fragment>
    );
}

export default WebsiteLayout;
