import { useState } from "react";

const Navigation = () => {
  const [state, setState] = useState(false);

  return (
    <nav className="Navbar">
      <div className="Brand-Title" ><a href="/">Porfolio</a></div>
      <div onClick={() => setState(!state)} className="Toggle-Button">
        <span className="Bar"></span>
        <span className="Bar"></span>
        <span className="Bar"></span>
      </div>
      <div className={`Navbar-Links ${state ? 'active' : ''}`}>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;