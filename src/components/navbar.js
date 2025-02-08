import React from "react";
import "./navbar.css"; // Create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="google.com">HOME</a>
        <a href="google.com">ABOUT</a>
        <a href="google.com">COURSES</a>
        <a href="google.com">BLOG</a>
      </div>
      <div className="nav-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <button className="contact-btn">CONTACT US</button>
      </div>
    </nav>
  );
};

export default Navbar;
