import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import HomeServices from "./components/HomeServices";
import Contact from "./components/Contact";
import OurServices from "./components/OurServices";
import Works from "./components/Works";
import HomeContact from "./components/HomeContact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<HomeServices />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/homeContact" element={<HomeContact />} />
          <Route
            exact
            path={`/ourServices/:selectedTrademark`}
            element={<OurServices />}
          />
          <Route exact path="/works" element={<Works />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
