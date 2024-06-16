import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Practice1 } from "./practices/Practice1";
import { Practice2 } from "./practices/Practice2";

function App() {
  return (
    <div className="App">
      <Practice1 />
      <Practice2 />
    </div>
  );
}

export default App;
