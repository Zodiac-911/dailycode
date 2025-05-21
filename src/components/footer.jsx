import "../styles/footer.css";
import logo from "../assets/daily-code-logo.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";

function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="upper">
          <div className="f-one fc">
            <img className="f-logo" src={logo} alt="" />
            <p>Copyright © 2025 DailyCode</p>
          </div>

          <div className="f-three fc">
            <h2>Contact Info</h2>
            <p>71-75 Shelton Street Covent Garden London WC2H 9JQ UK</p>
            <p>✆ + 447418353248</p>
            <a href="contact@dailycode.dev">✉ contact@dailycode.dev</a>
          </div>
          <div className="f-four fc">
            <h2>Join Our Newsletter</h2>
            <p>
              Sign up for our newsletter to enjoy free tips, inspirations, and
              more.
            </p>
            <div>
              <input type="email" placeholder="Your Email Adress " />
              <button>Send</button>
            </div>
          </div>
          <div className="social-media-footer">
            <a href="https://www.facebook.com/DailyCodeEn" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/dailycodeuk/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/DailyCode-LTD" target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.youtube.com/@dailycodeLTD" target="_blank">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
