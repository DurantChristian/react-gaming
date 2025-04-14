import { useState, useEffect } from "react";
import "./css/reviewlist.css";
import axios from "axios";
import ReviewCard from "./Reviewcard";
import AddReview from "./Addreview";
import DeleteReview from "./Deletereview";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [sessionReviewIds, setSessionReviewIds] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3001/api/games");
      setReviews(response.data);
    })();
  }, []);

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  const openDeleteDialog = (review) => {
    setSelectedReview(review);
    setShowDeleteDialog(true);
  };
  
  const closeDeleteDialog = () => {
    setSelectedReview(null);
    setShowDeleteDialog(false);
  };

  const updateReviews = (review) => {
    setReviews((prev) => [...prev, review]);
    setSessionReviewIds((prev) => [...prev, review._id]);
  };

  const removeReview = (_id) => {
    setReviews((prev) => prev.filter((r) => r._id !== _id));
    setSessionReviewIds((prev) => prev.filter((rId) => rId !== _id));
  };

  return (
    <>
      <button id="add-review" onClick={openAddDialog}>+</button>

      {showAddDialog && (
        <AddReview
          closeAddDialog={closeAddDialog}
          updateReviews={updateReviews}
        />
      )}

      {showDeleteDialog && selectedReview && (
        <DeleteReview
          _id={selectedReview._id}
          name={selectedReview.title}
          about={selectedReview.title}
          closeDialog={closeDeleteDialog}
          hideReview={() => removeReview(selectedReview._id)}
        />
      )}

      {reviews.map((review) => (
        <div key={review._id} className="review-wrapper">
          {sessionReviewIds.includes(review._id) && (
            <button
              className="delete-button"
              onClick={() => openDeleteDialog(review)}
            >
              -
            </button>
          )}
          <ReviewCard
            title={review.title}
            img_name={review.img_name}
            genre={review.genre}
            about={review.about}
            release_year={review.release_year}
            rating={review.rating}
            external_link={review.external_link}
          />
        </div>
      ))}
    </>
  );
};

export default ReviewsList;

