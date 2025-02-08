import React from "react";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>LEARN & FLY</h2>
        <p className="tagline">Where Learning Takes Flight</p>
        <p>Coaching and mindfulness for humans who want to build a better world.</p>
      </div>

      <div className="footer-center">
        <p>SOMETHING 1</p>
        <p>SOMETHING 2</p>
        <p>SOMETHING 3</p>
        <p>SOMETHING 4</p>
        <p>SOMETHING 5</p>
      </div>

      <div className="footer-right">
        <h3>CONNECT WITH US</h3>
        <div className="social-links">
          <a href="x.com"> Linkedin</a>
          <a href="x.com"> Instagram</a>
          <a href="x.com"> Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
