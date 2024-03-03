import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      Ime:
      <br />
      <input type="text" name="ime"></input>
      <br />
      Prezime:
      <br />
      <input type="text" name="prezime"></input>
      <br />
      Lozinka:
      <br />
      <input type="password" name="lozinka"></input>
      <br />
      <input type="submit" name="posalji" value="posalji"></input>
      <button onClick={handleHomeClick}>Home</button>
    </div>
  );
};

export default LoginForm;
