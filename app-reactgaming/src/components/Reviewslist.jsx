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

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3001/api/games");
      setReviews(response.data);
    })();
  }, []);

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  const openDeleteDialog = (_id, title) => {
    setSelectedReview({ _id, title });
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => setShowDeleteDialog(false);

  const updateReviews = (review) => {
    setReviews((prev) => [...prev, review]);
  };

  const removeReview = (_id) => {
    setReviews((prev) => prev.filter((r) => r._id !== _id));
  };

  return (
    <>
      <button id="add-review" onClick={openAddDialog}>+</button>

      {showAddDialog && (
        <AddReview closeAddDialog={closeAddDialog} updateReviews={updateReviews} />
      )}

      {reviews.map((review) => (
        <div key={review._id} className="review-item-wrapper">
          <ReviewCard
            _id={review._id}
            title={review.title}
            img_name={review.img_name}
            genre={review.genre}
            about={review.about}
            release_year={review.release_year}
            rating={review.rating}
            external_link={review.external_link}
          />
          <button
            className="delete-review-btn"
            onClick={() => openDeleteDialog(review._id, review.title, review.about)}
          >
            -
          </button>
        </div>
      ))}

      {showDeleteDialog && selectedReview && (
        <DeleteReview
          _id={selectedReview._id}
          name={selectedReview.title}
          about={selectedReview.about}
          closeDialog={closeDeleteDialog}
          hideReview={() => {
            removeReview(selectedReview._id);
            closeDeleteDialog();
          }}
        />
      )}
    </>
  );
};

export default ReviewsList;

