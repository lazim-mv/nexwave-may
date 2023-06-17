import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactSquare() {
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Get the checked checkboxes
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const checkboxValues = Array.from(checkboxes).map(
      (checkbox) => checkbox.name
    );

    // Prepare the template parameters
    const templateParams = {
      nexwave: "Hello",
      user_email: form.current.user_email.value,
      webDesign: checkboxValues.join(", "), // Combine the checkbox values into a comma-separated string
      message: form.current.message.value,
    };

    emailjs
      .sendForm(
        "service_cndkh6l",
        "template_bw5tdfj",
        form.current,
        "VzshAwvbOUTyIVkyA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contactSquareHeight reveal">
      <video className="videoBackground" autoPlay loop muted>
        <source src="/images/abstractVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contactSquareWrapper">
        <div className="contactHeading">
          <h1>
            Have a project? <br /> We would love <br />
            to help
          </h1>
        </div>
        <div className="contactHeadingMobile">
          <h1>Have a project? We would love to help</h1>
        </div>
        <div className="contactSquareContainer">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contactIntrest">
              <input id="ui-ux" type="checkbox" name="ui/ux" ref={form} />
              <label htmlFor="ui-ux">UI/UX Design</label>

              <input
                id="web-design"
                type="checkbox"
                name="webDesign"
                ref={form}
              />
              <label htmlFor="web-design">Web Design</label>

              <input id="branding" type="checkbox" name="Branding" ref={form} />
              <label htmlFor="branding">Branding</label>

              <input
                id="development"
                type="checkbox"
                name="Development"
                ref={form}
              />
              <label htmlFor="development">Development</label>
            </div>
            <div className="contactMe contactContent">
              <input
                type="text"
                placeholder="Your name"
                name="user_name"
                ref={form}
              />
              <input
                type="email"
                placeholder="Your email"
                name="user_email"
                ref={form}
              />
              <input
                type="text"
                placeholder="Tell us about your project"
                name="message"
                ref={form}
              />
              <div className="dFlexStart">
                <button className="btnSquare" value="Send" type="submit">
                  Contact Us
                </button>
              </div>
              <span style={{ color: "#C9D6DF" }}>{done && "Thanks for contacting us"}</span>
              <div className="" style={{ color: "#C9D6DF" }}></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSquare;
