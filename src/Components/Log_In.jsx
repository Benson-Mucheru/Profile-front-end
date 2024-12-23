import { Form } from "react-router-dom";
import { useState } from "react";
import "../Css/Body.css";
import "../Css/Login.css";

export default function Login() {
  //States
  const [userName, setUserName] = useState("");
 
  const [password, setPassword] = useState("");

  //handleUserNameChange
  function handleUserName(e) {
    setUserName(e.target.value);
  }
  
  //handlePassword
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <section className="login-container">
        <form action="http://localhost/profiles/login.php" className="form login-form" method="post" id="Login">
          {/* First name input */}
          <div>
            <input
              type="text"
              name="username"
              value={userName}
              onChange={handleUserName}
              className="create-input login-username"
              placeholder="User Name"
            />
          </div>

          

          {/* Password input */}
          <div>
            <input
              type="password"
              name="password"
              className="create-input password login-password"
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
