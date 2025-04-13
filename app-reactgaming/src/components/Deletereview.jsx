import "./css/dialog.css";
import React, { useState } from "react";

const Deletereview = (props) => {
  const [result, setResult] = useState("");

  const deleteGame = async () => {
    const response = await fetch(
      `http://localhost:3001/api/games/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Game review successfully deleted");
      props.hideReview();
    } else {
      console.log("Error deleting game", response);
      setResult("Error deleting review");
    }

    props.closeDialog();
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the review for {props.title}?</h3>
            <section>
              <button onClick={deleteGame}>Yes</button>
              <button onClick={props.closeDialog}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deletereview;
