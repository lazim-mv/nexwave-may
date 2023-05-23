import React from "react";

function ContactSquare() {
  return (
    <div id="contact" className="contactSquareHeight reveal">
      <video className="videoBackground" autoPlay loop muted>
        <source src="/images/abstractVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contactSquareWrapper">
        <div className="contactHeading">
            <h1>Have a project? <br /> We would love <br />to help</h1>
        </div>
        <div className="contactHeadingMobile">
            <h1>Have a project?  We would love to help</h1>
        </div>
        <div className="contactSquareContainer">
          <div className="contactIntrest">
            <input id="ui-ux" type="checkbox" name="interest" />
            <label htmlFor="ui-ux">UI/UX Design</label>

            <input id="web-design" type="checkbox" name="interest" />
            <label htmlFor="web-design">Web Design</label>

            <input id="branding" type="checkbox" name="interest" />
            <label htmlFor="branding">Branding</label>

            <input id="development" type="checkbox" name="interest" />
            <label htmlFor="development">Development</label>
          </div>
          <div className="contactMe contactContent">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <input type="text" placeholder="Tell us about your project" />
            <div className="buttonContainer">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSquare;
