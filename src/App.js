import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Meditation from "./components/Meditation";
import Stress from "./components/Stress";
import Depression from "./components/Depression";
import Sleep from "./components/Sleep";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/depression" element={<Depression />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/stress" element={<Stress />} />
      </Routes>
    </Router>
  );
};

export default App;
