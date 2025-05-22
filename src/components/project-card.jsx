import "../styles/projects.css";
import projectImage from "../assets/project-image.png";
import technologie1 from "../assets/sponsors/sponsor1.svg";
import technologie2 from "../assets/sponsors/sponsor2.svg";
import technologie3 from "../assets/sponsors/sponsor3.png";
import technologie4 from "../assets/sponsors/sponsor4.png";
import technologie5 from "../assets/sponsors/sponsor5.png";

function ProjectCard() {
  return (
    <>
      <div className="project-card" data-aos="fade-up">
        <div className="project-card-text">
          <h2>Project Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quod
            asperiores consequatur possimus aperiam hic expedita, ad beatae
            voluptas necessitatibus nisi reiciendis
          </p>
          <div className="project-card-down">
            <div className="project-card-technologies">
              <img src={technologie1} alt="" />
              <img src={technologie2} alt="" />
              <img src={technologie3} alt="" />
              <img src={technologie4} alt="" />
              <img src={technologie5} alt="" />
            </div>
            <div className="down-info">
              <p>
                {" "}
                30 days{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                </svg>
              </p>
              <p>
                3
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <img className="project-card-image" src={projectImage} alt="" />
      </div>
    </>
  );
}
export default ProjectCard;
