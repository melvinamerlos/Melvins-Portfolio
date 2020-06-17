import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Projects.css';

function Projects() {
    return (
        <div className="primary-container">
            <Navbar/>
            <div className="secondary-container">
                <h1>projects</h1>

                <div className="tertiary-container" id="projects">
                    <div className="project-filter">
                        <div className="tertiary-container-buttons" data-filter="all">all</div>
                        <div className="tertiary-container-buttons" data-filter="react-js">react-js</div>
                        <div className="tertiary-container-buttons" data-filter="css">css</div>
                        <div className="tertiary-container-buttons" data-filter="javascript">javascript</div>
                        <div className="tertiary-container-buttons" data-filter="python">python</div>
                    </div>

                    <div className="projects">
                        <a target="_blank" href="https://lambda-trip-planner.netlify.com/">
                            <div className="project-tile">
                                <h3>Trip Planner</h3>
                                <p>The Trip Planner is the perfect app for frequent travelers for a variety of functions. This app allows you to keep track of your belongings and find attractions at your destinations along your journey.</p>
                            </div>
                        </a>
                        <a target="_blank" href="https://lambda-trip-planner.netlify.com/">
                            <div className="project-tile">
                                <h3>Calculator</h3>
                                <p>Tkldjjnvksanlkcnawkledlwom aslsnkjweniofje kejFODIJWOQJFOIDJIOWAEHIFUBHKWEBKU ehwfiuwhihwihwdhiehfei qwoejidweijfiwheiofwij iwejidjwiefijwiifjhwiehihifahi fqkwehfihifqhiwhfhqwehqe8hwe8ehfisidwiuuebe bidwhidhwiwhdih</p>
                            </div>
                        </a>
                        <a target="_blank" href="https://lambda-trip-planner.netlify.com/">
                            <div className="project-tile">
                                <h3>Binary Trees</h3>
                                <p>Tkldjjnvksanlkcnawkledlwom aslsnkjweniofje kejFODIJWOQJFOIDJIOWAEHIFUBHKWEBKU ehwfiuwhihwihwdhiehfei qwoejidweijfiwheiofwij iwejidjwiefijwiifjhwiehihifahi fqkwehfihifqhiwhfhqwehqe8hwe8ehfisidwiuuebe bidwhidhwiwhdih</p>
                            </div>
                        </a>
                        <a target="_blank" href="https://lambda-trip-planner.netlify.com/">
                            <div className="project-tile">
                                <h3>Stacks/Queues</h3>
                                <p>Tkldjjnvksanlkcnawkledlwom aslsnkjweniofje kejFODIJWOQJFOIDJIOWAEHIFUBHKWEBKU ehwfiuwhihwihwdhiehfei qwoejidweijfiwheiofwij iwejidjwiefijwiifjhwiehihifahi fqkwehfihifqhiwhfhqwehqe8hwe8ehfisidwiuuebe bidwhidhwiwhdih</p>
                            </div>
                        </a>
                        <a target="_blank" href="https://lambda-trip-planner.netlify.com/">
                            <div className="project-tile">
                                <h3>Empty Slot</h3>
                                <p>Description here....</p>
                            </div>
                        </a>
                        <a target="_blank" href="https://lambda-trip-planner.netlify.com/">
                            <div className="project-tile">
                                <h3>Empty Slot</h3>
                                <p>Description here....</p>
                            </div>
                        </a>
                        <a target="_blank" href="https://lambda-trip-planner.netlify.com/">
                            <div className="project-tile">
                                <h3>Empty Slot</h3>
                                <p>Description here....</p>
                            </div>
                        </a>
                        <a target="_blank" href="https://lambda-trip-planner.netlify.com/">
                            <div className="project-tile">
                                <h3>Empty Slot</h3>
                                <p>Description here....</p>
                            </div>
                        </a>
                        <a target="_blank" href="https://lambda-trip-planner.netlify.com/">
                            <div className="project-tile">
                                <h3>Empty Slot</h3>
                                <p>Description here....</p>
                            </div>
                        </a>
                        <a target="_blank" href="https://lambda-trip-planner.netlify.com/">
                            <div className="project-tile">
                                <h3>Empty Slot</h3>
                                <p>Description here....</p>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
  }
  
export default Projects;