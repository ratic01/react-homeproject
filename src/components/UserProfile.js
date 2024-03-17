import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = (props) => {
  const [user, setUser] = useState(props.userData);

  const nav = useNavigate();

  const handleHomeClick = () => {
    nav("/");
  };

  useEffect(() => {
    setUser(props.userData);
  }, [props.userData]);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleHomeClick}>Home</button>
    </div>
  );
};

export default UserProfile;
