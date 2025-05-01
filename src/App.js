import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/MohittSharma27?tab=repositories">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/mohit-sharma-116693255/">
          MOHIT SHARMA
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://luppin.netlify.app/">
          luppin
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
