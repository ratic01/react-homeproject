import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentList from "./StudentList";

const AddStudentForm = () => {
  const nav = useNavigate();
  const [students, setStudents] = useState([]);
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    studentIndex: "",
    faculty: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Provjeravamo da li su sva polja popunjena
    if (
      !studentData.firstName ||
      !studentData.lastName ||
      !studentData.studentIndex ||
      !studentData.faculty
    ) {
      setError("Sva polja su obavezna.");
      return;
    }
    // Provjeravamo dužinu imena i prezimena
    if (studentData.firstName.length > 30 || studentData.lastName.length > 30) {
      setError("Ime i prezime ne smiju biti duži od 30 karaktera.");
      return;
    }
    // Kreiranje novog studenta
    // const newStudentId = studentData.studentIndex;
    // Preusmjeravanje korisnika na URL /success/studentId
    //nav(`/success/${newStudentId}`);
    // Kreiranje novog studenta
    const newStudent = { ...studentData }; // Kreiramo novi objekat sa informacijama o studentu
    console.log("Novi student: ", newStudent);
    setStudents([...students, newStudent]); // Dodajemo novog studenta u listu
    //console.log("Lista: ", students);
    setStudentData({
      // Resetujemo stanje za unos novog studenta
      firstName: "",
      lastName: "",
      studentIndex: "",
      faculty: "",
    });
    // Preusmeravanje korisnika na novu stranicu koja prikazuje sve dodate studente
    nav("/students");
  };
  //};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Ime:
        <br />
        <input
          type="text"
          name="firstName"
          value={studentData.firstName}
          onChange={handleChange}
        ></input>
        <br />
        Prezime:
        <br />
        <input
          type="text"
          name="lastName"
          value={studentData.lastName}
          onChange={handleChange}
        ></input>
        <br />
        Broj indeksa:
        <br />
        <input
          type="text"
          name="studentIndex"
          value={studentData.studentIndex}
          onChange={handleChange}
        ></input>
        <br />
        Fakultet:
        <br />
        <input
          type="text"
          name="faculty"
          value={studentData.faculty}
          onChange={handleChange}
        ></input>
        <br />
        <button type="submit">Dodaj studenta</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddStudentForm;
