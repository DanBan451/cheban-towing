import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { FC, Suspense } from "react";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/service";
import Contact from "./pages/contact";
import ScrollToTop from "./utils/scrollToTop";

import "./App.css";

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />          
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
