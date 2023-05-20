import React from "react";

function ContactForm() {
  return (
    <div id="contact" className="contactFormHeight">
      <div className="contactCircle">
        <div className="contactContent">
          <input type="text" placeholder="Full Name"/>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Message"/>
          <div className="buttonContainer">
          <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
