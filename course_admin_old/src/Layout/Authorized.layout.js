import React from "react";

import AuthorizHeader from "../Components/NavBar/Authorize";

import './index.css'

const AuthorizedLayout = ({ children }) => {
    return (
        <React.Fragment>
            
            <div className="d-flex">
                <AuthorizHeader />
                <div className="container main-body">
                    {children}
                </div>
            </div> 

        </React.Fragment>
    );
}

export default AuthorizedLayout;
