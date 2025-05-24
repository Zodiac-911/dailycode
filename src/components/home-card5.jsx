import "../styles/content-cards.css";
import "../styles/content-card.css";
import ws1 from "../assets/featured-works/website1.png";
import ws2 from "../assets/featured-works/website2.png";
import ws3 from "../assets/featured-works/website3.png";
import ws4 from "../assets/featured-works/website4.png";

import HomeFtProjectCard from "./home-featured-project-card";

function HomeCard5() {
  return (
    <>
      <div className="five-content card-content" data-aos="zoom-out-up">
        <h2 className="gi">Get Inspired</h2>
        <h1 data-aos="fade-up" className="fw">
          Featured work
        </h1>
        <h3 className="wapoaow">We are proud of all our work</h3>
        <HomeFtProjectCard
          title="WAAS"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, expedita, veniam fuga ea nemo, ad obcaecati commodi odit rerum maiores enim? Consequatur illum beatae doloremque et earum ea laudantium ab."
          img={ws1}
        ></HomeFtProjectCard>
        <HomeFtProjectCard
          title="YOUTUBE"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, expedita, veniam fuga ea nemo, ad obcaecati commodi odit "
          img={ws2}
        ></HomeFtProjectCard>
        <HomeFtProjectCard
          title="BillGates"
          description=" ad obcaecati commodi odit rerum maiores enim? Consequatur illum beatae doloremque et earum ea laudantium ab."
          img={ws3}
        ></HomeFtProjectCard>
        <HomeFtProjectCard
          title="SNAPSHAT"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, expedita, veniam fuga ea nemo, ad obcaecati commodi odit rerum maiores enim? Consequatur illum beatae doloremque et earum ea laudantium ab."
          img={ws4}
        ></HomeFtProjectCard>
      </div>
    </>
  );
}
export default HomeCard5;
