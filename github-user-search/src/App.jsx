import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import components from "src/components";
import services from "src/services";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<components.Home />} />
        <Route path="/user/:id" element={<components.UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;