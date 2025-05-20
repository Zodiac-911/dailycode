import "../styles/home-content.css";
import "../styles/content-cards.css";
import "../styles/content-card.css";
import Scroller from "./scroller";
import codingIlustration from "../assets/coding-illustartion.png";
import dev from "../assets/dev.png";
import screen from "../assets/screen.png";
import comment from "../assets/comment.png";
import detective from "../assets/detective.png";
import ws1 from "../assets/featured-works/website1.png";
import ws2 from "../assets/featured-works/website2.png";
import ws3 from "../assets/featured-works/website3.png";
import ws4 from "../assets/featured-works/website4.png";

function HomeContent() {
  return (
    <>
      <div className="content-container" data-aos="zoom-out-up">
        <div className="intro">
          <h1 className="">Welcome To DailyCode</h1>
          <p className="arrow-down">
            <a href="#card-one">ᐯ</a>
          </p>
        </div>

        <div className="one-content card-content" id="card-one">
          <h1 data-aos="fade-up">Excellence in Engineering</h1>
          <p>
            We create excellently designed and efficient solutions for your
            business, Our large and diversified team specializes in React, React
            Native, Flutter, NodeJS, TypeScript, Rust, Solidity, and Web3 –
            leading-edge technologies for building best-in-class solutions.
          </p>
        </div>
        <div className="two-content card-content" data-aos="zoom-out-up">
          <h2 data-aos="fade-up">Our Technologies</h2>
          <Scroller />
        </div>
        <div className="three-content card-content" data-aos="zoom-out-up">
          <h2 data-aos="fade-up">About Us</h2>

          <div>
            <img src={codingIlustration} alt="" />
            <div className="three-text">
              <h3>DailyCode Software development and consulting Agency</h3>
              <p>
                DailyCode is a software development and consulting agency based
                in the UK. By bringing together world-class computer scientists
                and software engineers, we are able to build and deliver
                high-performing software to clients all over the globe in
                various industries, including finance, government, blockchain,
                software as a service, cyber security, and e-commerce.
              </p>
            </div>
          </div>
        </div>
        <div className="four-content card-content" data-aos="zoom-out-up">
          <h2 data-aos="fade-up">Our Services</h2>
          <h3>custom & scalable Software and technology solutions</h3>
          <p>
            We provide our services to all sizes of businesses, from small
            startups and projects to large and complicated ones, Thanks to our
            diversified team, we will find a solution that fits your needs,
            budget, and principles.
          </p>
          <div className="cards-four">
            <div
              className="card-four"
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="1500"
            >
              <img src={screen} alt="" />
              <h3>CTO as a Service</h3>
              <p>
                Don’t have a technical co-founder yet? Need to jump start your
                MVP to get ahead of your next funding round? We have the
                experience you need.
              </p>
            </div>
            <div
              className="card-four"
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="1500"
            >
              <img src={dev} alt="" />
              <h3>Product Development</h3>
              <p>
                Need to ship world-class software? We can be your product team
                or we can augment your existing team, helping you hit launch
                goals without compromise.
              </p>
            </div>
            <div
              className="card-four"
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="1500"
            >
              <img src={comment} alt="" />
              <h3>Consulting and Advising</h3>
              <p>
                Need help navigating technical decisions, defining and
                implementing processes, or migrating to modern technology? We
                can help.
              </p>
            </div>
            <div
              className="card-four"
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="1500"
            >
              <img src={detective} alt="" />
              <h3>Smart Contract Audits</h3>
              <p>
                Security is critical in the blockchain space. Our comprehensive
                smart contract audit service helps everyone from small startups
                to enterprises launch and maintain their blockchain applications
              </p>
            </div>
          </div>
          <button className="button-four">Talk To Us Now!</button>
        </div>
        <div className="five-content card-content" data-aos="zoom-out-up">
          <h2 className="gi">Get Inspired</h2>
          <h1 data-aos="fade-up" className="fw">
            Featured work
          </h1>
          <h3 className="wapoaow">We are proud of all our work</h3>
          <div className="card-five">
            <img src={ws1} alt="" />
            <div className="card-five-text">
              <h3>WAAS</h3>
              <p>
                WAAS or Wallet As A Service is a backend as a service that
                provides multi-chain Crypto on-boarding/off-boarding and Crypto
                payment gateway at a competitive price.
              </p>
            </div>
          </div>{" "}
          <div className="card-five">
            <img src={ws2} alt="" />
            <div className="card-five-text">
              <h3>WAAS</h3>
              <p>
                WAAS or Wallet As A Service is a backend as a service that
                provides multi-chain Crypto on-boarding/off-boarding and Crypto
                payment gateway at a competitive price.
              </p>
            </div>
          </div>{" "}
          <div className="card-five">
            <img src={ws3} alt="" />
            <div className="card-five-text">
              <h3>WAAS</h3>
              <p>
                WAAS or Wallet As A Service is a backend as a service that
                provides multi-chain Crypto on-boarding/off-boarding and Crypto
                payment gateway at a competitive price.
              </p>
            </div>
          </div>{" "}
          <div className="card-five">
            <img src={ws4} alt="" />
            <div className="card-five-text">
              <h3>WAAS</h3>
              <p>
                WAAS or Wallet As A Service is a backend as a service that
                provides multi-chain Crypto on-boarding/off-boarding and Crypto
                payment gateway at a competitive price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeContent;
