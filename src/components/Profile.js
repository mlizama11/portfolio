import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Resume from "../documents/Mauricio_Lizama_Resume.pdf";

export default function Profile() {
  const [state, setstate] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/mlizama11")
      .then((response) => response.json())
      .then((data) => setstate(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, once: "true" });
  }, []);

  return (
    <>
      <div className="Profile-Card">
        <img data-aos="flip-left" className="Profile-Card-Img" src={state.avatar_url} alt="avatar" />
        <div className="Profile-Card-Body">
          <h1 data-aos="zoom-in" className="Profile-Title">{state.name}</h1>
          <p data-aos="zoom-in" className="Profile-Subtitle">Junior Full-Stack Web Developer <br></br> (MERN Stack)</p>
          <p data-aos="zoom-in" className="Profile-Description">
            I am a Web Developer with design and content skills. I am passionate about creating projects that are clean and careful in detail.
          </p>
          <div data-aos="zoom-in" className="Buttons-Container">
            <a className="Btn Btn-Black" href={Resume} target="_blank" rel="noreferrer">DOWNLOAD CV</a>
            <a href="/portfolio/contact" className="Btn Btn-Grey" rel="noreferrer"><span>HIRE ME</span></a>
          </div>
        </div>
      </div>

      <div className="Skills-Container">
        <div data-aos="zoom-in" className="Skills-Title-Container">
          <h2 className="Skills-Title">CODING SKILLS</h2>
        </div>

        <div data-aos="zoom-in" className="Skills-Card-Container">
          <div class="Skills-Card">
            <i class="bx bxl-html5 Skills-Icon"></i>
            <span class="Skills-Code-Title">HTML5</span>
          </div>

          <div class="Skills-Card">
            <i class="bx bxl-css3 Skills-Icon"></i>
            <span class="Skills-Code-Title">CSS3</span>
          </div>

          <div class="Skills-Card">
            <i class="bx bxl-sass Skills-Icon"></i>
            <span class="Skills-Code-Title">SASS</span>
          </div>

          <div class="Skills-Card">
            <i class="bx bxl-bootstrap Skills-Icon"></i>
            <span class="Skills-Code-Title">Bootstrap</span>
          </div>

          <div class="Skills-Card">
            <i class="bx bxl-javascript Skills-Icon"></i>
            <span class="Skills-Code-Title">JavaScript</span>
          </div>

          <div class="Skills-Card">
            <i class="bx bxl-react Skills-Icon"></i>
            <span class="Skills-Code-Title">React</span>
          </div>

          <div class="Skills-Card">
            <i class="bx bxl-redux Skills-Icon"></i>
            <span class="Skills-Code-Title">Redux</span>
          </div>

          <div class="Skills-Card">
            <i class="bx bxl-nodejs Skills-Icon"></i>
            <span class="Skills-Code-Title">Node</span>
          </div>

          <div class="Skills-Card">
            <i class="bx bx-data Skills-Icon"></i>
            <span class="Skills-Code-Title">MongoDB</span>
          </div>

          <div class="Skills-Card">
            <i class="bx bx-code-curly Skills-Icon"></i>
            <span class="Skills-Code-Title">Express</span>
          </div>

          <div class="Skills-Card">
            <i class="bx bx-git-pull-request Skills-Icon"></i>
            <span class="Skills-Code-Title">Git</span>
          </div>
        </div>

      </div>
    </>
  )
}