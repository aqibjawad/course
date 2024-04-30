import './App.css';

import routes from './Routes/Routes';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import WebsiteLayout from './Layout/Website.layout';

import AuthorizeLayout from "./Layout/Authorized.layout"

import TeacherLayout from './Layout/teacher.layout';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Auth } from './context/Auth.Context';

function App() {

  const { isAuthenticated } = Auth()

  return ( 
    <div>
      <Router>

        <Routes>
          <Route element={<AuthorizeLayout><Outlet /></AuthorizeLayout>}>
            {routes.map((featu) => featu.type == 'public' && (
              <Route element={featu.element} path={featu.path} exact={featu} />
            ))}
          </Route>

          <Route element={<WebsiteLayout><Outlet /></WebsiteLayout>}>
            {isAuthenticated && routes.map((featu) => featu.type == 'private' && (
              <Route element={featu.element} path={featu.path} exact={featu} />
            ))}
          </Route> 

          <Route element={<TeacherLayout><Outlet /></TeacherLayout>}>
            {isAuthenticated && routes.map((featu) => featu.type == 'teacher' && (
              <Route element={featu.element} path={featu.path} exact={featu} />
            ))}
          </Route> 
        </Routes>

        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
