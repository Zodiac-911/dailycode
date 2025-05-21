import "../styles/blogs.css";
import blogimage from "../assets/blog-img.png";
import ccIMG from "../assets/classeur-circles.png";

function BlogCard() {
  return (
    <>
      <div className="blog-card">
        <img src={ccIMG} alt="" className="ccIMG" />
        <img src={blogimage} className="blog-image" />

        <div className="blog-content">
          <p className="blog-date">
            <span>🗒</span> 26/05/2025
          </p>
          <h2 className="blog-title">Title of the Blog</h2>
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            temporibus quasi eveniet nihil dolorum recusandae .
          </p>
        </div>
      </div>
    </>
  );
}
export default BlogCard;
