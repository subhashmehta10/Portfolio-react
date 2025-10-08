import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/compo/Dasboard";
import Cursor from "./components/Cursor"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/compo/service";
import WorkProcess from "./components/compo/WorkProcess";
import ChatWidget from "./components/ChatWidget";



function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Cursor/>
              <Header/>
              <Hero/>
              <Projects/>
              <Skills/>
              <Services/>
              <WorkProcess/>
              <Education/>
              <Experience/>
              <About/>
              <Contact/>
              <Footer/>
              <ChatWidget/>
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App
