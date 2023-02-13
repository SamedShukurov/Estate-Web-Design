import React from "react";
import "./Header.css";
import icon from "../img/Logo.svg";
import profile from "../img/Profile.svg";
const Header = () => {
  return (
    <>
      <header>
        <div className="left">
          <div className="logo">
            <img src={icon} alt="Logo" />
          </div>
          <ul>
            <li>
              <a href="">For Sale</a>
            </li>
            <li>
              <a href="">For Rent</a>
            </li>
            <li>
              <a href="">Daily Rental</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <button>Advertise</button>
          <img src={profile} alt="Profile" />
        </div>
      </header>
    </>
  );
};

export default Header;
