import { useEffect, useState } from "react";
import "../styles/topbar.css";
import logo from "../assets/daily-code-logo.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";
import { Link } from "react-router-dom";

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
          <Link to="/blogs">Blog</Link>
          <Link to="/projects">Projects</Link>

          <Link to="/libraries">Libraries</Link>
        </div>
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className={`logo ${scrolled ? "scrolled" : ""}`}
            />
          </Link>

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
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            onClick={toggleMenu}
            className="logo-mobile"
          />
        </Link>
        <div className={`navbar-elm ${menuOpen ? "active" : ""}`}>
          <Link to="/blogs" onClick={toggleMenu}>
            Blog
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            Projects
          </Link>

          <Link to="/libraries" onClick={toggleMenu}>
            Libraries
          </Link>
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
