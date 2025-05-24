import "../styles/content-cards.css";
import "../styles/content-card.css";
import dev from "../assets/dev.png";
import screen from "../assets/screen.png";
import comment from "../assets/comment.png";
import detective from "../assets/detective.png";

function HomeCard4() {
  return (
    <>
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
              Don’t have a technical co-founder yet? Need to jump start your MVP
              to get ahead of your next funding round? We have the experience
              you need.
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
              Need to ship world-class software? We can be your product team or
              we can augment your existing team, helping you hit launch goals
              without compromise.
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
              implementing processes, or migrating to modern technology? We can
              help.
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
              smart contract audit service helps everyone from small startups to
              enterprises launch and maintain their blockchain applications
            </p>
          </div>
        </div>
        <button className="button-four">Talk To Us Now!</button>
      </div>
    </>
  );
}
export default HomeCard4;
