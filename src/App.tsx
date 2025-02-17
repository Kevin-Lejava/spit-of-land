import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetKey from "./pages/GetKey";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages/login" element={<Login />} />
        <Route path="pages/GetKey" element={<GetKey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
