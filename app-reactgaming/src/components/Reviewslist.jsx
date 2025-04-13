import { useState, useEffect } from "react";
import "./css/reviewlist.css";
import axios from "axios";
import ReviewCard from "./Reviewcard";
import AddReview from "./Addreview";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3001/api/reviews");
      setReviews(response.data);
    })();
  }, []);

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  const updateReviews = (review) => {
    setReviews((prev) => [...prev, review]);
  };

  return (
    <>
      <button id="add-review" onClick={openAddDialog}>+</button>

      {showAddDialog && (
        <AddReview closeAddDialog={closeAddDialog} updateReviews={updateReviews} />
      )}

      <div className="review-grid">
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            title={review.title}
            img_name={review.img_name}
            genre={review.genre}
            about={review.about}
            release_year={review.release_year}
            rating={review.rating}
            external_link={review.external_link}
          />
        ))}
      </div>
    </>
  );
};

export default ReviewsList;
