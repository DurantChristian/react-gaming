import "./css/reviewcard.css";

const ReviewCard = (props) => {
  return (
    <section className="review">
      <h3>{props.title}</h3>
      <img src={`http://localhost:3001/images/${props.img_name}`} alt={props.title} />
      <p><strong>Genre:</strong> {props.genre}</p>
      <p>{props.about}</p>
      <p><strong>Release Year:</strong> {props.release_year}</p>
      <p><strong>Rating:</strong> {props.rating}/10</p>
      <a href={props.external_link} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </section>
  );
};

export default ReviewCard;
