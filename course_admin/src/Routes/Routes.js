import Dashboard from "../Pages/Dashboard/Dashboard"

import Department from "../Pages/AddDep/AddDep"

import Coursefile from "../Pages/CourseFile/Coursefile"

import Course from "../Pages/AddCourse/AddCourse"

import Teacher from "../Pages/Teacher"

import Session from "../Pages/Session/session"

import Semester from "../Pages/Semester/Semester"

import Signin from "../Pages/Auth/SignIn"
import Signup from "../Pages/Auth/SignUp"

import WebsiteUser from "../Pages/WebsiteUser/websiteuser"

import Teacherdashboard from "../Pages/Teacherdashboard/teacherdashboard"
import Coursefileadmin from "../Pages/Coursefileadmin/coursefile"

import About from "../Pages/About/about"

import Midexam from "../Pages/CourseFile/Midexam"
import Quiz from "../Pages/CourseFile/Quiz"
import Finalexam from "../Pages/CourseFile/finalexam"
import Assignment from "../Pages/CourseFile/assignment"

// import ForgetPassword from '../Pages/Auth/ForgetPassword';
 
const routes =[

    {path:'/', element:<Signin />, exact:'true', type:'public' },
    {path:'/signup', element:<Signup />, exact:'true', type:'public' },

    {path:'/dashboard', element:<Dashboard />, exact:'true', type:'private' },

    {path:'/category', element:<Department />, exact:'true', type:'private' },

    {path:'/course', element:<Course />, exact:'true', type:'private' },

    {path:'/teacher', element:<Teacher />, exact:'true', type:'private' },

    // { path: '/forgetpass', element: <ForgetPassword />, exact: 'true', type: 'public' },

    {path:'/session', element:< Session />, exact:'true', type:'private' },

    {path:'/section', element:< Semester />, exact:'true', type:'private' },

    {path:'/website user', element:< WebsiteUser />, exact:'true', type:'private' },

    {path:'/course file', element:< Coursefileadmin />, exact:'true', type:'private' },

    {path:'/teachercoursefile', element:<Coursefile />, exact:'true', type:'teacher' },
    {path:'/Teacherdashboard', element:<Teacherdashboard />, exact:'true', type:'teacher' },

    {path:'/About', element:<About />, exact:'true', type:'private' },

    {path:'/mid', element:<Midexam />, exact:'true', type:'teacher' },
    {path:'/quiz', element:<Quiz />, exact:'true', type:'teacher' },
    {path:'/final', element:<Finalexam />, exact:'true', type:'teacher' },
    {path:'/assignment', element:<Assignment />, exact:'true', type:'teacher' },

]

export default routes 