
import React from 'react'

import BackgroundImage from './dash.jpg';
export default function About() {
    return (
        <div className="main-body content-wrapper" style={{ backgroundColor: "white" }}>
            <div
                style={{
                    background: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
            >
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <p className="m-0" style={{ fontWeight: "bold", fontSize: "30px", fontStyle: "normal", fontFamily: "serif" }}>
                                            About US</p>
                                    </div>{/* /.col */}

                                </div>{/* /.row */}
                            </div>{/* /.container-fluid */}
                        </div>
                    
                    <section class="content" style={{marginTop:" 280px",marginLeft:"50px",marginRight:"50px"}}>

                        <div className="conatiner-fluid" style={{ color:"black",fontSize: "20px", fontStyle: "normal", fontFamily: "serif", textAlign:"justify" }}>
                            <p>An E-course profile system is a web-based system containing documents that outline
                                the key features of a certain course, providing information about the course content,
                                timetable, attendance report, assignments, quizzes, midterms, and final terms.</p>
                            <ul>
                                A course profile typically includes the following elements:
                                <li>Course content</li>
                                <li>Timetable</li>
                                <li>Attendance report of the students in the class</li>
                                <li>Assignments, quizzes, midterm, and final term of student's best, average, and
                                    worst obtained marks in that particular course</li>
                            </ul>

                        </div>
                    </section>
                    </div>
            </div>
            )
}
