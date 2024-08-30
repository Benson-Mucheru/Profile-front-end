import { Link } from "react-router-dom";

import "../Css/Navbar.css";
export default function Navbar() {
  return (
    <>
      <header className="header">
        <h2>Profile</h2>
        <nav>
          <ul className="nav-bar-list">
            <li className="nav-bar-item">
              <Link to={"/"} className="nav-bar-link">
                Home
              </Link>
            </li>
            <li className="nav-bar-item">
              <Link to={"create"} className="nav-bar-link">
                Create
              </Link>
            </li>
            <li className="nav-bar-item">
              <Link to={"profiles"} className="nav-bar-link">
                Profiles
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
