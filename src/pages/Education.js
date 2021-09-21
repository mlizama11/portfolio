import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import EducationCard from '../components/EducationCard';
import { educationData } from '../data/data';

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
          <EducationCard data={educationData} />
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
