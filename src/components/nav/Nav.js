import React from "react";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <a href="#header">
          <p>francesco</p>
        </a>
      </div>

      <ul className="navigation-links">
        <li>
          <a href="#header">
            <i className="fa-solid fa-house"></i>Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="fa-regular fa-face-smile-wink"></i>About
          </a>
        </li>
        <li>
          <a href="#menu">
            <i className="fa-solid fa-utensils"></i>Menu
          </a>
        </li>
        <li>
          <a href="#wine">
            <i className="fa-solid fa-wine-glass"></i>Wine
          </a>
        </li>
        <li>
          <a href="#book">
            <i className="fa-regular fa-calendar-check"></i>Book
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fa-solid fa-globe"></i>Contact
          </a>
        </li>
      </ul>

      <ul className="social">
        <li className="socialIcon">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li className="socialIcon">
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="socialIcon">
          <a href="https://twitter.com/" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
