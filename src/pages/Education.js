import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Education() {

  useEffect(() => {
    Aos.init({ duration: 1000, once: "true" });
  }, []);

  return (
    <section className="Education">

      <div className="Education-Container">

        <div data-aos="zoom-in" className="Education-Title-Container">
          <h2 className="Education-Title">EDUCATION</h2>
        </div>

        <div data-aos="zoom-in" className="Diplomas-Container">
          <div className="Diploma-Card">
            <h4 className="Diploma-Title">WEB DEVELOPMENT CERTIFICATE</h4>
            <h6 className="Diploma-Subtitle">Digital Career Institute gGmbH (DCI), Germany</h6>
            <p className="Diploma-Year">2020 - 2021</p>
          </div>

          <div className="Diploma-Card">
            <h4 className="Diploma-Title">BA IN AUDIOVISUAL PRODUCTION</h4>
            <h6 className="Diploma-Subtitle">Federated University of Costa Rica</h6>
            <p className="Diploma-Year">2012 - 2013</p>
          </div>

          <div className="Diploma-Card">
            <h4 className="Diploma-Title">DIPLOMA IN MOTION GRAPHICS</h4>
            <h6 className="Education-Subtitle">Creative University of Costa Rica</h6>
            <p className="Diploma-Year">2007</p>
          </div>

          <div className="Diploma-Card">
            <h4 className="Diploma-Title">BA IN JOURNALISM</h4>
            <h6 className="Diploma-Subtitle">Latina University of Costa Rica</h6>
            <p className="Diploma-Year">2002 - 2005</p>
          </div>
        </div>

      </div>

      <div className="Education-Container">

        <div data-aos="zoom-in" className="Education-Title-Container">
          <h2 className="Education-Title">LANGUAGES</h2>
        </div>

        <div data-aos="zoom-in" className="Languages-Container">
          <div className="Language-One">
            <div className="Spanish">Spanish</div>
            <svg class="progress-circle-one definite-one" width="100" height="100">
              <g transform="rotate(-90,50,50)">
                <circle class="bg-one" r="40" cx="50" cy="50" fill="none"></circle>
                <circle class="progress-one" r="40" cx="50" cy="50" fill="none"></circle>
              </g>
            </svg>
          </div>

          <div className="Language-Two">
            <div className="English">English</div>
            <svg class="progress-circle-two definite-two" width="100" height="100">
              <g transform="rotate(-90,50,50)">
                <circle class="bg-two" r="40" cx="50" cy="50" fill="none"></circle>
                <circle class="progress-two" r="40" cx="50" cy="50" fill="none"></circle>
              </g>
            </svg>
          </div>

          <div className="Language-Three">
            <div className="French">French</div>
            <svg class="progress-circle-two definite-two" width="100" height="100">
              <g transform="rotate(-90,50,50)">
                <circle class="bg-two" r="40" cx="50" cy="50" fill="none"></circle>
                <circle class="progress-two" r="40" cx="50" cy="50" fill="none"></circle>
              </g>
            </svg>
          </div>

          <div className="Language-Four">
            <div className="German">German</div>
            <svg class="progress-circle-three definite-three" width="100" height="100">
              <g transform="rotate(-90,50,50)">
                <circle class="bg-three" r="40" cx="50" cy="50" fill="none"></circle>
                <circle class="progress-three" r="40" cx="50" cy="50" fill="none"></circle>
              </g>
            </svg>
          </div>
        </div>

      </div>

    </section >
  )
}
