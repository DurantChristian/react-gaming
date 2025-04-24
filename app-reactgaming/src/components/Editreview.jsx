import "./css/dialog.css";
import React, { useState } from "react";

const Editreview = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    title: props.title,
    genre: props.genre,
    about: props.about,
    release_year: props.release_year,
    rating: props.rating,
    external_link: props.external_link,
    prev_img: props.img_name,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("genre", inputs.genre);
    formData.append("about", inputs.about);
    formData.append("rating", inputs.rating);
    formData.append("release_year", parseInt(inputs.release_year));
    formData.append("external_link", inputs.external_link);
    if (inputs.img) formData.append("img", inputs.img);

    const response = await fetch(
      `https://serverside-code.onrender.com/api/games/${props._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Review successfully updated");
      event.target.reset();
      props.editReview(await response.json());
      props.closeDialog();
    } else {
      const errorText = await response.text();
      console.log("Error editing review", errorText);
      setResult("Error updating review");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="edit-review-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={inputs.title || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                id="genre"
                name="genre"
                value={inputs.genre || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="about">About:</label>
              <input
                type="text"
                id="about"
                name="about"
                value={inputs.about || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="release_year">Release Year:</label>
              <input
                type="number"
                id="release_year"
                name="release_year"
                value={inputs.release_year || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="rating">Rating:</label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={inputs.rating || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="external_link">External Link:</label>
              <input
                type="url"
                id="external_link"
                name="external_link"
                value={inputs.external_link || ""}
                onChange={handleChange}
              />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img != null
                      ? URL.createObjectURL(inputs.img)
                      : inputs.prev_img != null
                      ? `https://serverside-code.onrender.com/images/${inputs.prev_img}`
                      : ""
                  }
                  alt="Preview"
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
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

export default Editreview;
