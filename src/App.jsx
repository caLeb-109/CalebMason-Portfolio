import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Loading from "./Components/Loading";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-800">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Projects />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
