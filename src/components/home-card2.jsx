import "../styles/content-cards.css";
import "../styles/content-card.css";
import Scroller from "./scroller";

function HomeCard2() {
  return (
    <>
      <div className="two-content card-content" data-aos="zoom-out-up">
        <h2 data-aos="fade-up">Our Technologies</h2>
        <Scroller />
      </div>
    </>
  );
}
export default HomeCard2;
