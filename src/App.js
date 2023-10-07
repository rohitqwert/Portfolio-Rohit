import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
       
      </Routes>
    </>
  );
}

export default App;
