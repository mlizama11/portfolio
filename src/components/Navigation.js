import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="Navbar">
      <div className="Brand-Title" ><NavLink exact={true} to="/">Porfolio</NavLink></div>
      <div onClick={() => setToggle(!toggle)} className="Toggle-Button">
        <span className="Bar"></span>
        <span className="Bar"></span>
        <span className="Bar"></span>
      </div>
      <div className={`Navbar-Links ${state ? 'active' : ''}`}>
        <ul>
          <li><NavLink onClick={() => setToggle(!state)} exact={true} to="/about">About</NavLink></li>
          <li><NavLink onClick={() => setToggle(!state)} exact={true} to="/education">Education</NavLink></li>
          <li><NavLink onClick={() => setToggle(!state)} exact={true} to="/projects">Projects</NavLink></li>
          <li><NavLink onClick={() => setToggle(!state)} exact={true} to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;