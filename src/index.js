import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import RegistarForm from "./components/RegistarForm";
import AddStudentForm from "./components/AddStudentForm";
import Counter from "./components/Counter";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistarForm />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/AddStudentForm" element={<AddStudentForm />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
