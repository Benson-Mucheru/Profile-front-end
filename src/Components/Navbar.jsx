import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../Css/Navbar.css";



export default function Navbar() {
  /* const [isOpenMenuBtn, setIsOpenMenuBtn] = useState("nav-mobile-open");
  const [isClosedMenuBt, setIsClosedMenuBtn] = useState("nav-mobile-close") */

  function onClick () {
     const openMenuBtn = "nav-mobile-open";
     const closeMenuBtn = "nav-mobile-close";
     const navMobile = document.querySelector(".nav-mobile"); 
     //navMobile.classList.toggle(openMenuBtn);
     
     if(!navMobile.classList.contains(closeMenuBtn)){
      navMobile.classList.add(closeMenuBtn);
     navMobile.classList.remove(openMenuBtn); 
     }else{
      navMobile.classList.add(openMenuBtn);
      navMobile.classList.remove(closeMenuBtn);
     }
      
     
     
     console.log(navMobile)
  }
  return (
    <>
      <header className="header">
        <NavLink to={"/"} className="nav-bar-home">
          <h2>Profile</h2>
        </NavLink>

        {/* Desktop navigation */}
        <nav className="nav-desktop">
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
        {/* Humbergur Icon */}


        <button type="button" className="humbegur-icon" onClick={onClick}> <img src="src\assets\hamburger-menu-icon.svg" alt="humbergur icon" /> </button>
        
      </header>
      {/* Tablet & Mobile nav */}
      <nav className="nav-mobile nav-mobile-close">
          <ul className="nav-bar-list-mobile">
            <li className="nav-bar-item-mobile">
              <NavLink to={"login"} className="nav-bar-link-mobile">
                Login
              </NavLink>
            </li>
            <li className="nav-bar-item-mobile">
              <NavLink to={"create"} className="nav-bar-link-mobile">
                Create
              </NavLink>
            </li>
            <li className="nav-bar-item-mobile">
              <NavLink to={"profiles"} className="nav-bar-link-mobile">
                Profiles
              </NavLink>
            </li>
          </ul>
        </nav>
    </>
  );
}
