import "../styles/libraries.css";
import libraryIMG from "../assets/library-image.png";
import sponsor6 from "../assets/sponsors/sponsor6.png";
import sponsor7 from "../assets/sponsors/sponsor7.svg";
import sponsor8 from "../assets/sponsors/sponsor8.svg";
import sponsor9 from "../assets/sponsors/sponsor9.png";
import sponsor10 from "../assets/sponsors/sponsor10.svg";
import npm from "../assets/npm.png";
import github from "../assets/github.png";

function Library() {
  return (
    <>
      <div className="library-card" data-aos="zoom-out-up">
        <div className="library-top-card-info">
          <div>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
              <span>1.2K</span>
            </p>
          </div>
          <div>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-exclamation-diamond"
                viewBox="0 0 16 16"
              >
                <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
              <span>8</span>
            </p>
          </div>
          <div>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-half"
                viewBox="0 0 16 16"
              >
                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
              </svg>
              <span>4.2</span>
            </p>
          </div>
        </div>
        <img src={libraryIMG} alt="" className="library-img" />
        <div className="library-text">
          <h1>Library Name</h1>
          <div className="library-buttons">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              atque perferendis porro maiores{" "}
            </p>
            <div>
              <a>
                <img src={github} alt="" />
              </a>
              <a>
                <img src={npm} alt="" />
              </a>
            </div>
          </div>{" "}
          <div className="library-technology-used">
            <img src={sponsor6} alt="" />
            <img src={sponsor7} alt="" />
            <img src={sponsor8} alt="" />
            <img src={sponsor9} alt="" />
            <img src={sponsor10} alt="" />
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default Library;
