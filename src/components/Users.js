import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  const handleInputChange = (e) => {
    setNewUser(e.target.value);
  };

  const handleAddUser = () => {
    if (newUser.trim() != "") {
      setUsers([...users, newUser]);
      console.log("Lista korisnika: ", users);
      console.log("Novi korisnik: ", newUser);

      setNewUser("");
    }
  };

  return (
    <div>
      <h1>Lista korisnika</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newUser}
        onChange={handleInputChange}
        placeholder="Unesite ime korisnika"
      />

      <button onClick={handleAddUser}>Dodaj korisnika</button>
    </div>
  );
};

export default Users;
