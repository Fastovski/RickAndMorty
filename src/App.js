import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Location from "./pages/Location";
import Home from "./pages/Home";
import CharacterDetails from "./pages/CharacterDetails";
import './styles/global.css'
import LocationDetails from "./pages/LocationDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element = {<Location/>}/>
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/location/:id" element={<LocationDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
