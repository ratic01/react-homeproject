import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <form>
        <h2>Ulogujte se</h2>
        Ime:
        <br />
        <input required="true" type="text" name="ime"></input>
        <br />
        Prezime:
        <br />
        <input required="true" type="text" name="prezime"></input>
        <br />
        Lozinka:
        <br />
        <input required="true" type="password" name="lozinka"></input>
        <br />
        <input type="submit" name="posalji" value="posalji"></input>
        <button onClick={handleHomeClick}>Home</button>
      </form>
    </div>
  );
};

export default LoginForm;
