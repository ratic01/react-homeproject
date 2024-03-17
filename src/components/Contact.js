import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Contact1 = (props) => {
  const nav = useNavigate();
  const [clicks, setClicks] = useState(0);
  const handleHomeClick = () => {
    nav("/");
  };

  const handleCounterClick = () => {
    setClicks((clicks) => clicks + 1);
  };

  return (
    <div>
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={handleCounterClick}>Counter</button>
      <br />
      Broj klikova: {clicks}
      <br />
      <p>Ime: {props.name}</p>
      <p>Prezime: {props.lastname}</p>
      <p>E-mail: {props.email}</p>
    </div>
  );
};

export default Contact1;
