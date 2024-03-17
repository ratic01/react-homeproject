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
import Home from "./components/Home";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";
import Contact1 from "./components/Contact";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
const students = [];
const userData = {
  username: "john_doe",
  email: "john1234@gmail.com",
  age: 30,
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistarForm />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/addstudentform" element={<AddStudentForm />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route
          path="/contact"
          element={
            <Contact1 name="John" lastname="Doe" email="john1234@gmail.com" />
          }
        ></Route>
        <Route
          path="/user-profile"
          element={<UserProfile userData={userData} />}
        ></Route>

        <Route
          path="/students"
          element={<StudentList students={students} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
