import { Form } from "react-router-dom";
import { useState } from "react";
import "../Css/Body.css";

export default function Login() {
  //States
  const [fisrtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  //handleFirstNameChange
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  //handleLastNameChange
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  //handlePassword
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  //stopProgation
  async function handleSubmit(e) {
    e.stopPropagation();
    const loginForm = document.querySelector("#Login");
    console.log(loginForm);
    /* const formData = new FormData();
    console.log(formData);

    await fetch("http://localhost/Php-server/login.php", {
      method: "post",
      mode: "no-cors",
      body: formData,
    }); */
  }

  {
    /* Password input */
  }
  <div>
    <input
      type="password"
      name="password"
      className="create-input password"
      placeholder="Password"
      value={password}
      onChange={handlePassword}
    />
  </div>;

  return (
    <>
      <section>
        <form onSubmit={handleSubmit} className="form" method="post" id="Login">
          {/* First name input */}
          <div>
            <input
              type="text"
              name="first_name"
              value={fisrtName}
              onChange={handleFirstName}
              className="create-input"
              placeholder="First Name"
            />
          </div>

          {/* Last name input */}
          <div>
            <input
              type="text"
              name="last_name"
              value={lastName}
              onChange={handleLastName}
              className="create-input"
              placeholder="Second Name"
            />
          </div>

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

          {/* Submit data to backend */}
          <button className="btn-create" type="submit">
            Login
          </button>
        </form>
      </section>
    </>
  );
}
