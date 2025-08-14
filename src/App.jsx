import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Loading from "./Components/Loading";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-800">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
