import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function Global_Routing() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
    </BrowserRouter>
  );
}

export default Global_Routing;
