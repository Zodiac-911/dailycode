import { useEffect, useState } from "react";
import "../styles/topbar.css";
import logo from "../assets/daily-code-logo.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";

function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`topbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className={`navbar-elm ${scrolled ? "scrolled" : ""}`}>
          <a href="#">Blog</a>
          <a href="#">Projects</a>
          <a href="#">Libraries</a>
        </div>
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <img
            src={logo}
            alt="Logo"
            className={`logo ${scrolled ? "scrolled" : ""}`}
          />
          <button className="more" id="more" onClick={toggleMenu}>
            ☰
          </button>
          <div className="social-media"></div>
          <button className={`button-topbar ${scrolled ? "scrolled" : ""}`}>
            Contact Us
          </button>
        </div>
      </div>
      <div className="social-media">
        <a
          href="https://www.facebook.com/DailyCodeEn"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.linkedin.com/company/dailycodeuk/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/DailyCode-LTD"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.youtube.com/@dailycodeLTD"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="youtube" />
        </a>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button className="close-menu" onClick={toggleMenu}>
          ×
        </button>
        <img src={logo} alt="Logo" className="logo" />
        <div className={`navbar-elm ${menuOpen ? "active" : ""}`}>
          <a href="#" onClick={toggleMenu}>
            Blog
          </a>
          <a href="#" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#" onClick={toggleMenu}>
            Libraries
          </a>
        </div>
        <div className="social-media">
          <a
            href="https://www.facebook.com/DailyCodeEn"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.linkedin.com/company/dailycodeuk/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://github.com/DailyCode-LTD"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.youtube.com/@dailycodeLTD"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        <button className="button-topbar">Contact Us</button>
      </div>
    </>
  );
}

export default Topbar;
