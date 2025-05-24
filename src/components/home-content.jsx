import "../styles/home-content.css";

import HomeCard1 from "./home-card1";
import HomeCard2 from "./home-card2";
import HomeCard3 from "./home-card3";
import HomeCard4 from "./home-card4";
import HomeCard5 from "./home-card5";

function HomeContent() {
  return (
    <>
      <div className="content-container">
        <div className="intro">
          <h1 className="">Welcome To DailyCode</h1>
          <p className="arrow-down">
            <a href="#home">ᐯ</a>
          </p>
        </div>
        <HomeCard1 />
        <HomeCard2 />
        <HomeCard3 />
        <HomeCard4 />
        <HomeCard5 />
      </div>
    </>
  );
}
export default HomeContent;
