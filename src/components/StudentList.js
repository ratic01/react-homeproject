import React from "react";

const StudentList = ({ students }) => {
  console.log("Lista studenata: ", students);
  return (
    <div>
      <h2>Lista studenata</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.firstName} {student.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
