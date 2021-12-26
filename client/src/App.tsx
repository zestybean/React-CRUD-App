import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
import Hello from './pages/Hello';
import Index from './pages/Index';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='hello' element={<Hello />} />
      </Routes>
    </Router>
  );
}

export default App;
