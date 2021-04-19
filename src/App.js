import React from "react";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
    </div>
  );
}

export default App;
