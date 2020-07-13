import React from "react";

import "../sass/main.scss";
import DifficultyForm from "../DifficultyForm/DifficultyForm";
import GameSettings from "../GameSettings/GameSettings";

export default function App() {
  return (
    <div className="game">
      <h1 className="game__header">The Reddit Game</h1>
      <DifficultyForm />
      <GameSettings />
    </div>
  );
}
