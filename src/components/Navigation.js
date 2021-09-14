import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [state, setState] = useState(false);

  return (
    <nav className="Navbar">
      <div className="Brand-Title" ><NavLink exact={true} to="/about" href="/">Porfolio</NavLink></div>
      <div onClick={() => setState(!state)} className="Toggle-Button">
        <span className="Bar"></span>
        <span className="Bar"></span>
        <span className="Bar"></span>
      </div>
      <div className={`Navbar-Links ${state ? 'active' : ''}`}>
        <ul>
          <li><NavLink activeClassName="is-active" exact={true} to="/about" href="/about">About</NavLink></li>
          <li><NavLink exact={true} to="/education" href="/education">Education</NavLink></li>
          <li><NavLink exact={true} to="/projects" href="/projects">Projects</NavLink></li>
          <li><NavLink exact={true} to="/contact" href="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;