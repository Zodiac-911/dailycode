import "../styles/libraries.css";

import sponsor6 from "../assets/sponsors/sponsor6.png";
import sponsor7 from "../assets/sponsors/sponsor7.svg";
import sponsor8 from "../assets/sponsors/sponsor8.svg";
import sponsor9 from "../assets/sponsors/sponsor9.png";
import sponsor10 from "../assets/sponsors/sponsor10.svg";
import npmLogo from "../assets/npm.png";
import githubLogo from "../assets/github.png";
import websiteLogo from "../assets/website-icone.png";

function LibraryCardText({ title, description, img, github, npm, website }) {
  return (
    <>
      <div className="library-text">
        <h1>{title}</h1>
        <div className="library-buttons">
          <p>{description}</p>
          <div>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="" />
            </a>
            <a href={npm} target="_blank" rel="noopener noreferrer">
              <img src={npmLogo} alt="" />
            </a>
            <a href={website} target="_blank" rel="noopener noreferrer">
              <img src={websiteLogo} alt="" />
            </a>
          </div>
        </div>
        <div className="library-technology-used">
          <img src={sponsor6} alt="" />
          <img src={sponsor7} alt="" />
          <img src={sponsor8} alt="" />
          <img src={sponsor9} alt="" />
          <img src={sponsor10} alt="" />
        </div>
      </div>
    </>
  );
}
export default LibraryCardText;
