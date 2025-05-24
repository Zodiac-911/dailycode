import "../styles/content-cards.css";
import "../styles/content-card.css";
import codingIlustration from "../assets/coding-illustartion.png";

function HomeCard3() {
  return (
    <>
      <div className="three-content card-content" data-aos="zoom-out-up">
        <h2 data-aos="fade-up">About Us</h2>

        <div>
          <img src={codingIlustration} alt="" />
          <div className="three-text">
            <h3>DailyCode Software development and consulting Agency</h3>
            <p>
              DailyCode is a software development and consulting agency based in
              the UK. By bringing together world-class computer scientists and
              software engineers, we are able to build and deliver
              high-performing software to clients all over the globe in various
              industries, including finance, government, blockchain, software as
              a service, cyber security, and e-commerce.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeCard3;
