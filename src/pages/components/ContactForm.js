import React from "react";

function ContactForm() {
  return (
    <div  className="contactFormHeight">
      <div className="blur"></div>
      <div className="contactCircle">
        <div className="contactContent">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="text" placeholder="Tell us about your project" />
          <div className="buttonContainer">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
