import React from 'react';
import './Footer.css';
import "../style.css";
import "../App.css";


function Footer() {

    const getYear = () => {
        return new Date().getFullYear();
    };

    return (
        <div className="footer">
            <div className="license">
                <p>&copy; {getYear()} Melvin Merlos All Rights Reserved</p>
            </div>
            <div className="footer-social-icons">
                <div className="social-icons">
                    <a target="_blank" href="https://www.linkedin.com/in/melvin-merlos-49079a73/" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-linkedin"></i></a>
                    <a target="_blank" href="https://github.com/melvinamerlos?tab=repositories" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-github"></i></a>
                </div>
            </div>
        </div>
        )
}

export default Footer;