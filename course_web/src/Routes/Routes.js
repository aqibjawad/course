
import Department from '../Pages/Department/Department';

import Session from '../Pages/Session/Session';

import Semester from '../Pages/Semester/Semester';

import Course from '../Pages/Course/Course';

import Coursefile from '../Pages/CourseFile/Coursefile';

import SignUpPage from '../Pages/Register/RegisterPage';

// import ForgetPasswordPage from '../Pages/Register/ForgetPasswordPage';

import HomePage from '../Pages/Register/HomePage';

import LandingPage from '../Pages/Register/LandingPage';

import SignInPage from '../Pages/Register/LoginPage';

import About from '../Pages/About/about'


const routes = [

    { path: '/register', element: <SignUpPage />, exact: 'true', type: 'public' },

    { path: '/login', element: <SignInPage />, exact: 'true', type: 'public' },

    { path: '/', element: <LandingPage />, exact: 'true', type: 'public' },

    { path: '/home', element: <HomePage />, exact: 'true', type: 'private' },

    // { path: '/forgetpassword', element: <ForgetPasswordPage />, exact: 'true', type: 'public' },

    { path: '/test', element: <Department />, exact: 'true', type: 'private' },

    { path: '/session/:department', element: <Session />, exact: 'true', type: 'private' },

    { path: '/about', element: <About />, exact: 'true', type: 'private' },

    { path: '/session/:department/:semester', element: <Semester />, exact: 'true', type: 'private' },

    { path: '/course/:department/session/:session/semester/:course', element: <Course />, exact: 'true', type: 'private' },

    { path: '/coursefile/:department/session/:session/semester/:semester/:coursefile', element: <Coursefile />, exact: 'true', type: 'private' },
]

export default routes  