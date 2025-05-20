import "../styles/scroller.css";

import sponsor1 from "../assets/sponsors/sponsor1.svg";
import sponsor2 from "../assets/sponsors/sponsor2.svg";
import sponsor3 from "../assets/sponsors/sponsor3.png";
import sponsor4 from "../assets/sponsors/sponsor4.png";
import sponsor5 from "../assets/sponsors/sponsor5.png";
import sponsor6 from "../assets/sponsors/sponsor6.png";
import sponsor7 from "../assets/sponsors/sponsor7.svg";
import sponsor8 from "../assets/sponsors/sponsor8.svg";
import sponsor9 from "../assets/sponsors/sponsor9.png";
import sponsor10 from "../assets/sponsors/sponsor10.svg";

function Scroller() {
  return (
    <div className="scroll-container">
      <div className="scroll-track">
        <img src={sponsor1} alt="Ts" />
        <img src={sponsor2} alt="Tron" />
        <img src={sponsor3} alt="DEVLOOPS" />
        <img src={sponsor4} alt="Web3" />
        <img src={sponsor5} alt="React" />
        <img src={sponsor6} alt="Next.JS" />
        <img src={sponsor7} alt="Flutter" />
        <img src={sponsor8} alt="Node.JS" />
        <img src={sponsor9} alt="Next.JS" />
        <img src={sponsor10} alt="NEAR" /> <img src={sponsor1} alt="Ts" />
        <img src={sponsor2} alt="Tron" />
        <img src={sponsor3} alt="DEVLOOPS" />
        <img src={sponsor4} alt="Web3" />
        <img src={sponsor5} alt="React" />
        <img src={sponsor6} alt="Next.JS" />
        <img src={sponsor7} alt="Flutter" />
        <img src={sponsor8} alt="Node.JS" />
        <img src={sponsor9} alt="Next.JS" />
        <img src={sponsor10} alt="NEAR" />
      </div>
    </div>
  );
}

export default Scroller;
