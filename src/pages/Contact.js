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
          <h2 className="Contact-Title">CONTACT</h2>
          <label htmlFor="full-name">Full Name</label>
          <input type="text" name="name" id="full-name" placeholder="Full name" required />
          <label htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <label htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            required
          />
          <input className="Btn-Form" type="submit" value="SEND" />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;