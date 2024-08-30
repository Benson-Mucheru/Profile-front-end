import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Css/Home.css";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero">
          <div className="hero-section">
            <h1>
              Hi<span className="hero-section-wave">👋</span>, Welcome to
              Profile
            </h1>
            <p>My own version of facebook</p>
            <div className="hero-section-btns">
              <Link to={"profiles"}>
                <button className="hero-btn hero-btn-login">Log In</button>
              </Link>
              <Link to={"create"}>
                <button className="hero-btn hero-btn-create">Create+</button>
              </Link>
            </div>
          </div>
          <div className="hero-banner">
            <img src="src\assets\aiony-haust-3TLl_97HNJo-unsplash.jpg" alt="" />
            <img
              src="src\assets\cesar-rincon-XHVpWcr5grQ-unsplash.jpg"
              alt=""
            />
            <img
              src="src\assets\rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg"
              alt=""
            />
            <img src="src\assets\kimson-doan-HD8KlyWRYYM-unsplash.jpg" alt="" />
            <img src="src\assets\michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="" />
            <img
              src="src\assets\charlesdeluvio-kVg2DQTAK7c-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
