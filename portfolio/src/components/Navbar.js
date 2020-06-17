import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
      <div className="navbar-container">
        <div className="button-container">
          <Link to="/"><div className="button" id="a">about</div></Link>
          <Link to="/projects"><div className="button" id="p">projects</div></Link>
          <Link to="/contact"><div className="button" id="c">contact</div></Link>
        </div>
      </div>
    )
}

export default Navbar;