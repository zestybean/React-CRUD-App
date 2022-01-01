import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hello from "./pages/Hello/Hello";
import Index from "./pages/Index/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="hello" element={<Hello />} />
      </Routes>
    </Router>
  );
}

export default App;
