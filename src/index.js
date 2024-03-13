import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import RegistarForm from "./components/RegistarForm";
import AddStudentForm from "./components/AddStudentForm";
import Counter from "./components/Counter";
import StudentList from "./components/StudentList";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
const students = [];

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistarForm />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/addstudentform" element={<AddStudentForm />}></Route>
        <Route
          path="/students"
          element={<StudentList students={students} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
