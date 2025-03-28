import "./Contact.css";
import dogmail from "./images/dog-mail-removebg-preview.png";

function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="grid">
        <div className="Contactfo">
          <h1>Wanna say hey?</h1>
          <div>
            <h4>
              Pop me an email at 💌
              <a href="mailto:helloadrianadiaz@gmail.com" class="email-link">
                <strong>helloadrianadiaz@gmail.com</strong>
              </a>
              -
              <br />
              I'd love to hear from you!
            </h4>

            <p>📍 Based in Barcelona, ES and the Internet</p>
          </div>
        </div>
        <div>
          <img src={dogmail} alt="Email me"></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
