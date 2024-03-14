import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContentDetail from "./components/Detail/ContentDetail";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<ContentDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
