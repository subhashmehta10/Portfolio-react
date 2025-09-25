import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Cursor from "./components/Cursor"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/compo/service";
import WorkProcess from "./components/compo/WorkProcess";
import ChatWidget from "./components/ChatWidget";



function App() {
  return (
    <Router>
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
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App
