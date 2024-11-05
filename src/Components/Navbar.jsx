import { NavLink } from "react-router-dom";

import "../Css/Navbar.css";
export default function Navbar() {
  return (
    <>
      <header className="header">
        <NavLink to={"/"} className="nav-bar-home">
          <h2>Profile</h2>
        </NavLink>

        <nav>
          <ul className="nav-bar-list">
            <li className="nav-bar-item">
              <NavLink to={"login"} className="nav-bar-link">
                Login
              </NavLink>
            </li>
            <li className="nav-bar-item">
              <NavLink to={"create"} className="nav-bar-link">
                Create
              </NavLink>
            </li>
            <li className="nav-bar-item">
              <NavLink to={"profiles"} className="nav-bar-link">
                Profiles
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
