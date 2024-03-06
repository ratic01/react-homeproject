import { useNavigate } from "react-router-dom";

const RegistarForm = () => {
  const nav = useNavigate();
  const handleHomeClick = () => {
    nav("/");
  };
  return (
    <div>
      <form action="/login">
        <h2>Registracija</h2>
        Ime:
        <br />
        <input required="true" type="text" name="ime"></input>
        <br />
        Prezime:
        <br />
        <input required="true" type="text" name="prezime"></input>
        <br />
        E-mail:
        <br />
        <input required="true" type="email" name="email"></input>
        <br />
        Lozinka:
        <br />
        <input required="true" type="password" name="lozinka"></input>
        <br />
        <input type="submit" value="posalji"></input>
        <button onClick={handleHomeClick}>Home</button>
      </form>
    </div>
  );
};

export default RegistarForm;
