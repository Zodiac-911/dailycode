import "../styles/blogs.css";

import blogimage from "../assets/blog-img.png";
import blogimage2 from "../assets/blog-img2.webp";
import blogimage3 from "../assets/blog-img3.png";

import BlogCard from "../components/blog-card";

function Blogs() {
  return (
    <>
      <div className="blogs-content-container">
        <BlogCard
          img={blogimage}
          title="How to build a website"
          date="26/05/2025"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
        ></BlogCard>
        <BlogCard
          img={blogimage2}
          title="How to build a website"
          date="14/05/2025"
          description="id architecto omnis cumque minus dolorum! Consectetur, beatae veritatis. Magni ut repudiandae illum sed. Aliquid, quo?"
        ></BlogCard>
        <BlogCard
          img={blogimage3}
          title="How to build a website"
          date="05/05/2025"
          description="similique, nihil placeat pariatur totam eos porro corporis fuga ad, vero perferendis corrupti ipsa quis eius dolorum error expedita quod!"
        ></BlogCard>
        <BlogCard
          img={blogimage3}
          title="How to build a website"
          date="05/05/2025"
          description="similique, nihil placeat pariatur totam eos porro corporis fuga ad, vero perferendis corrupti ipsa quis eius dolorum error expedita quod!"
        ></BlogCard>{" "}
        <BlogCard
          img={blogimage2}
          title="How to build a website"
          date="14/05/2025"
          description="id architecto omnis cumque minus dolorum! Consectetur, beatae veritatis. Magni ut repudiandae illum sed. Aliquid, quo?"
        ></BlogCard>{" "}
        <BlogCard
          img={blogimage}
          title="How to build a website"
          date="26/05/2025"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
        ></BlogCard>
      </div>
    </>
  );
}
export default Blogs;
