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
  const [password, setPassword] = useState("");

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

  //handlePassword
  function handlePassword(e) {
    setPassword(e.target.value);
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
        encType="multipart/form-data"
      >
        <img
          src="src\assets\icons8-ios-photos.svg"
          alt="gallery-icon"
          className="gallery-icon"
        />

        {/* First name input */}
        <div>
          <input
            type="text"
            name="first_name"
            id=""
            value={fisrtName}
            onChange={handleFirstName}
            className="create-input"
            placeholder="First Name"
          />
        </div>
        <br />

        {/* Last name input */}
        <div>
          <input
            type="text"
            name="last_name"
            id=""
            value={lastName}
            onChange={handleLastName}
            className="create-input"
            placeholder="Second Name"
          />
        </div>
        <br />

        {/* Age input */}
        <div>
          <input
            type="number"
            name="age"
            id=""
            value={age}
            onChange={handleAge}
            max={100}
            className="create-input"
            placeholder="Age"
          />
        </div>
        <br />

        {/* Bio input */}
        <div>
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

        {/* Password input */}
        <div>
          <input
            type="password"
            name="password"
            className="create-input password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        {/* Profic pic input */}
        <div>
          <input
            type="file"
            name="profile_pic"
            className="create-file"
            accept="image/*"
          />
        </div>

        {/* Submit data to backend */}
        <button className="btn-create" type="submit" onSubmit={handleSubmit}>
          Create
        </button>
      </Form>
    </section>
  );
}
