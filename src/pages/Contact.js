import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function ContactForm() {

  useEffect(() => {
    Aos.init({ duration: 1000, once: "true" });
  }, []);

  return (
    <section class="Contact">
      <div class="Contact-Container">
        <form data-aos="zoom-in" className="Form" action="https://formsubmit.co/mlizamaoliger@gmail.com"
          method="POST" >
          <div className="Form-Body">

            <div className="Form-Title">
              <h2 className="Contact-Title">CONTACT</h2>
            </div>

            <div className="Form-Fills">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" name="name" id="full-name" placeholder="Full name" required />
            </div>

            <div className="Form-Fills">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" placeholder="Email" required />
            </div>

            <div className="Form-Fills">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message here..." required />
            </div>
            <input className="Btn-Form" type="submit" value="SEND" />

          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;