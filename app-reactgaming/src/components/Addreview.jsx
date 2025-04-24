import "./css/addreview.css";
import "./css/dialog.css";
import React, { useState } from "react";

const AddReview = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  };

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch("https://serverside-code.onrender.com/api/games", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Game review added successfully");
      event.target.reset();
      props.closeAddDialog();
      props.updateReviews(await response.json());
    } else {
      setResult("Error adding review");
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeAddDialog}
          >
            &times;
          </span>
          <form id="add-review-form" onSubmit={addToServer}>
            <h3>Create New Game Review</h3>

            <p>
              <label htmlFor="title">Game Title:</label>
              <input type="text" id="title" name="title" required min="3" />
            </p>

            <p>
              <label htmlFor="genre">Genre:</label>
              <input type="text" id="genre" name="genre" required />
            </p>

            <p>
              <label htmlFor="about">Summary:</label>
              <textarea id="about" name="about" required />
            </p>

            <p>
              <label htmlFor="release_year">Release Year:</label>
              <input type="number" id="release_year" name="release_year" required />
            </p>

            <p>
              <label htmlFor="rating">Rating:</label>
              <input type="number" id="rating" name="rating" min="0" max="10" step="0.1" required />
            </p>

            <p>
              <label htmlFor="username">Your Name:</label>
              <input type="text" id="username" name="username" required />
            </p>

            <p>
              <label htmlFor="about">Aim of the Game:</label>
              <input type="text" id="about" name="about" required />
            </p>

            <p>
              <label htmlFor="difficulty">Difficulty rating (1–5):</label>
              <input type="number" id="difficulty" name="difficulty" min="1" max="5" required />
            </p>

            <p>
              <label htmlFor="graphics">Quality of the graphics:</label>
              <input type="text" id="graphics" name="graphics" required />
            </p>

            <p>
              <label htmlFor="fun_factor">Is the game fun to play? Why or why not?</label>
              <input type="text" id="fun_factor" name="fun_factor" required />
            </p>

            <p>
              <label htmlFor="game_rating">Rate the game (1–5):</label>
              <input type="number" id="game_rating" name="game_rating" min="1" max="5" required />
            </p>


            <section className="columns">
              <div>
                <p id="img-prev-section">
                  {prevSrc !== "" ? <img id="img-prev" src={prevSrc} alt="Preview" /> : ""}
                </p>
              </div>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
              </p>
            </section>

            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
