import { useState, useEffect } from "react";
import "./css/reviewlist.css";
import axios from "axios";
import ReviewCard from "./Reviewcard";
import ReviewDetails from "./Reviewdetails";
import AddReview from "./Addreview";
import DeleteReview from "./Deletereview";
import EditReview from "./Editreview";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [sessionReviewIds, setSessionReviewIds] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://serverside-code.onrender.com/api/games");
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

  const openEditDialog = (review) => {
    setSelectedReview(review);
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setSelectedReview(null);
    setShowEditDialog(false);
  };

  const updateReviews = (review) => {
    setReviews((prev) => [...prev, review]);
    setSessionReviewIds((prev) => [...prev, review._id]);
  };

  const removeReview = (_id) => {
    setReviews((prev) => prev.filter((r) => r._id !== _id));
    setSessionReviewIds((prev) => prev.filter((rId) => rId !== _id));
  };

  const editReview = (updatedReview) => {
    setReviews((prev) =>
      prev.map((review) =>
        review._id === updatedReview._id ? updatedReview : review
      )
    );
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
          about={selectedReview.about}
          closeDialog={closeDeleteDialog}
          hideReview={() => removeReview(selectedReview._id)}
        />
      )}

      {showEditDialog && selectedReview && (
        <EditReview
          {...selectedReview}
          closeDialog={closeEditDialog}
          editReview={editReview}
        />
      )}

      {selectedReview ? (
        <ReviewDetails game={selectedReview} closeDetail={() => setSelectedReview(null)} />
      ) : (

        reviews.map((review) => (
        <div key={review._id} className="review-wrapper">
          <ReviewCard
            title={review.title}
            img_name={review.img_name}
            genre={review.genre}
            about={review.about}
            release_year={review.release_year}
            rating={review.rating}
            reviewData={review}
            showActions={sessionReviewIds.includes(review._id)}
            onDelete={() => openDeleteDialog(review)}
            onEdit={() => openEditDialog(review)}
            onReadMore={(review) => setSelectedReview(review)}
          />
        </div>
      ))
    )}
  </>
);
}
export default ReviewsList;

