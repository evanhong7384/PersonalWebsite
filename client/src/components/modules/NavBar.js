import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";



/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-linkContainer">
        < a href="#home" className="NavBar-scroll"> 
          Home
        </a>
        <a href= "#about" className = "NavBar-scroll" >
          About
        </a>
        <a href = "#work" className = "NavBar-scroll">
          Work
        </a>
        <a href = "#contact" className="NavBar-scroll"> 
          Contact
        </a>

        




        
      </div>
    </nav>
  );
};

export default NavBar;
