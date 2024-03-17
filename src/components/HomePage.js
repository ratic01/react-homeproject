import React from "react";
import { Link } from "react-router-dom";
import "../HomePage.css";

const HomePage = () => {
  return (
    <div className="menu-container">
      <Link to="/login" className="menu-item">
        Login
      </Link>
      <br />
      <Link to="/registration" className="menu-item">
        Registration
      </Link>
      <br />
      <Link to="/user-profile" className="menu-item">
        User-profile
      </Link>
      <br />
      <Link to="/contact" className="menu-item">
        Contact us
      </Link>
    </div>
  );
};

export default HomePage;
