import "../styles/projects.css";
import ProjectCard from "../components/project-card";
import projectImage from "../assets/project-image.png";

function Projects() {
  return (
    <>
      <div className="project-content">
        <ProjectCard
          img={projectImage}
          title="Project Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus distinctio ullam architecto nam, a molestiae quae harum maiores. Vel dolor provident perspiciatis, corporis modi rem excepturi repudiandae adipisci! Rem, a?"
          time="2 months"
          members="3"
        ></ProjectCard>
        <ProjectCard
          img={projectImage}
          title="Project Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus distinctio ullam architecto nam, a molestiae quae harum maiores. Vel dolor provident perspiciatis, corporis modi rem excepturi repudiandae adipisci! Rem, a?"
          time="2 months"
          members="3"
        ></ProjectCard>{" "}
        <ProjectCard
          img={projectImage}
          title="Project Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus distinctio ullam architecto nam, a molestiae quae harum maiores. Vel dolor provident perspiciatis, corporis modi rem excepturi repudiandae adipisci! Rem, a?"
          time="2 months"
          members="3"
        ></ProjectCard>{" "}
        <ProjectCard
          img={projectImage}
          title="Project Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus distinctio ullam architecto nam, a molestiae quae harum maiores. Vel dolor provident perspiciatis, corporis modi rem excepturi repudiandae adipisci! Rem, a?"
          time="2 months"
          members="3"
        ></ProjectCard>
      </div>
    </>
  );
}
export default Projects;
