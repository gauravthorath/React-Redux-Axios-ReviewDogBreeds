import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={"https://dog.ceo/img/dog-api-logo.svg"} alt={"Dog"}  className="Logo"></img>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/FavoriteBreed"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Favorite Breed
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AllBreeds"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                AllBreeds
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
