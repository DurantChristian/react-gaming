import { Link } from "react-router-dom";
import "./css/reviewcard.css";

const ReviewCard = (props) => {
  return (
    <section className="review">
        <div className="review-header">
        <h3>{props.title}</h3>
        {props.showActions && (
          <div className="button-group">
            <button className="edit-button" onClick={props.onEdit}>Edit</button>
            <button className="delete-button" onClick={props.onDelete}>x</button>
          </div>
        )}
        </div>
      <img src={`https://serverside-code.onrender.com/images/${props.img_name}`} alt={props.img_name} />
      <p><strong>Genre:</strong> {props.genre}</p>
      <p><strong>About:</strong>{props.about}</p>
      <p><strong>Release Year:</strong> {props.release_year}</p>
      <p><strong>Rating:</strong> {props.rating}/10</p>
      <Link to={props.external_link} target="_blank" rel="noopener noreferrer">
        Read More
      </Link>
    </section>
  );
};

export default ReviewCard;
