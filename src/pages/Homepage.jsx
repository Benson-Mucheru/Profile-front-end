import { Link } from "react-router-dom";

import "../Css/Home.css";

function Homepage() {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="hero-section">
            <h1>
              Hi<span className="hero-section-wave">👋</span>, Welcome to
              Profile
            </h1>
            <p>
              My own version of facebook, instagram, tweeter.
            </p>
            <div className="hero-section-btns">
              <Link to={"login"}>
                <button className="hero-btn hero-btn-profiles">Login</button>
              </Link>
              <Link to={"create"}>
                <button className="hero-btn hero-btn-create">Create+</button>
              </Link>
            </div>
          </div>
          <div className="hero-banner">
            <img src="src\assets\Screenshot (1).png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
