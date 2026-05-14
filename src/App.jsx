import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import BlogDeatails from "./Components/BlogDeatails";

import "./App.css";
import Navbar from "./Components/Navbar";
import Skills from "./Pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
       
        <Route path="blogs" element={<Blogs />} />

       
        <Route path="blogs/:slug" element={<BlogDeatails />} />
      </Routes>
      <Contact />
    </>
  );
}

export default App;
