import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

function About() {
    return (
        <div className="primary-container"> 
            {/* Navbar */}
            <Navbar/>    

            {/* Body */}
            <div className="secondary-container">
                <h1>about</h1> 
 
                <div className="tertiary-container" id="about">
                    <div className="goal-pannel"> {/* 4 goals, width:" 100%, height: 20%" */}
                        <ul className="slider">
                            <li>Fast
                                <input type="radio" id="slide1" name="slide" checked/>
                                <label for="slide1"></label>
                            </li>
                            <li>Responsive
                             <input type="radio" id="slide2" name="slide" checked/>
                                <label for="slide2"></label>
                            </li>
                            <li>Intuitive
                                <input type="radio" id="slide3" name="slide" checked/>
                                <label for="slide3"></label>
                            </li>
                            <li>Dynamic
                                <input type="radio" id="slide4" name="slide" checked/>
                                <label for="slide4"></label>
                            </li>
                        </ul> 
                    </div>

                    <div className="bio-stats"> {/* bio-stats section, width: 50%, height: 80% */}
                        <div className="bio">Melvin Merlos
                            <p>Hi there, I'm Melvin Merlos.</p>
                            <p>I am a full-stack web developer with a passion for beautiful designs and performant user experience.</p>
                            {/* something here */}
                        </div> {/* */}
                        <div className="graph-stats"> {/*  */}
                            <ul>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>Node.js</li>
                                <li>UI Design</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        {/* Footer */}
        <Footer/>
        </div>
    );
  }
  
  export default About;