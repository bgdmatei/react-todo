import React from "react";
import "./App.css";
//Components
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My TODO List</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
