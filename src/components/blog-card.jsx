import "../styles/blogs.css";

import ccIMG from "../assets/classeur-circles.png";

function BlogCard({ img, date, title, description }) {
  return (
    <>
      <div className="blog-card">
        <img src={ccIMG} alt="" className="ccIMG" />
        <img src={img} className="blog-image" />

        <div className="blog-content">
          <p className="blog-date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calendar-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5" />
            </svg>
            <span>{date}</span>
          </p>
          <h2 className="blog-title">{title}</h2>
          <p className="blog-description">{description}</p>
        </div>
      </div>
    </>
  );
}
export default BlogCard;
