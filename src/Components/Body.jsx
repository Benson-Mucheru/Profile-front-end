import { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-router-dom";
import "../Css/Body.css";
export default function Body() {
  //States
  const [fisrtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");

  //handleFirstNameChange
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  //handleLastNameChange
  function handleLastName(e) {
    setLastName(e.target.value);
  }

  //handleAgeChang
  function handleAge(e) {
    setAge(e.target.value);
  }

  //handleBio
  function handleBio(e) {
    setBio(e.target.value);
  }

  //stopProgation
  function handleSubmit(e) {
    e.stopPropagation();
  }
  return (
    <section className="signup-section">
      <Form
        action="/create"
        method="post"
        className="form"
        target="blank"
        encType="multipart/form-data"
      >
        {/* <img
          src="src\assets\icons8-ios-photos.svg"
          alt="gallery-icon"
          className="gallery-icon"
        /> */}

        {/* First name input */}
        <div>
          <label htmlFor="first_name">First Name: </label>
          <input
            type="text"
            name="first_name"
            id=""
            value={fisrtName}
            onChange={handleFirstName}
          />
        </div>
        <br />

        {/* Last name input */}
        <div>
          <label htmlFor="last_name">Last Name: </label>
          <input
            type="text"
            name="last_name"
            id=""
            value={lastName}
            onChange={handleLastName}
          />
        </div>
        <br />

        {/* Age input */}
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            name="age"
            id=""
            value={age}
            onChange={handleAge}
            max={100}
          />
        </div>
        <br />

        {/* Bio input */}
        <div>
          <label htmlFor="bio">Bio: </label>
          <textarea
            name="bio"
            id=""
            className="bio-textarea"
            placeholder="Your Bio..."
            value={bio}
            onChange={handleBio}
          ></textarea>
        </div>
        <br />

        {/* Profic pic input */}
        <div>
          <input type="file" name="profile-pic" id="" accept="image/*" />
        </div>

        {/* Submit data to backend */}
        <button className="btn-create" type="submit" onSubmit={handleSubmit}>
          Create
        </button>
      </Form>
    </section>
  );
}
