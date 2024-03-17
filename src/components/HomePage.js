import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/registration">Registration</Link>
      <br />
      <Link to="/contact">Contact us</Link>
      <br />
      <Link to="/user-profile">User-profile</Link>
    </div>
  );
};

export default HomePage;
