import "../styles/App.css";
import BackgroundImg from "./BackgroundImg";
import Navbar from "./Navbar";
import Home from "./Home";
import History from "./History";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

//the whole website layout
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/history"element={<History />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <BackgroundImg />
    </div>
  );
}

export default App;
