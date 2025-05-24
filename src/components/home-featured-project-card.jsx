import "../styles/content-cards.css";
import "../styles/content-card.css";

function HomeFtProjectCard({ title, description, img }) {
  return (
    <>
      <div className="card-five">
        <img src={img} alt="" />
        <div className="card-five-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
export default HomeFtProjectCard;
