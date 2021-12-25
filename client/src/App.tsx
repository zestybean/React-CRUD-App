import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Hello Pastita!</h1>
      </div>

      <br />
      <div className="clientForm">
        <label htmlFor="">Name:</label>
        <input type="text" />

        <label htmlFor="">Age:</label>
        <input type="number" />

        <label htmlFor="">Position:</label>
        <input type="text" />

        <label htmlFor="">Wage(Year):</label>
        <input type="number" />

        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
