import React from "react";

import "./App.css";
import DifficultyForm from "../DifficultyForm/DifficultyForm";

export default function App() {
  return (
    <div className="game">
      <h1 className="game__header">The Reddit Game</h1>
      <DifficultyForm />
    </div>
  );
}
