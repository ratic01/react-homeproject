import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/registration">Registration</Link>
    </div>
  );
};

export default HomePage;
