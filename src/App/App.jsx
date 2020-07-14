import React from "react";

import "../sass/main.scss";
import DifficultyForm from "../DifficultyForm/DifficultyForm";
import GameSettings from "../GameSettings/GameSettings";
import GameDescription from "../GameDescription/GameDescription";
import Button from "../Button/Button";

export default function App() {
  return (
    <div className="game">
      <h1 className="game__header">The Reddit Game</h1>
      <div className="game__left">
        <DifficultyForm />

        <Button buttonClass="btn-big" content="Let's play!" />
      </div>
      <div className="game__right">
        <GameDescription />
        <GameSettings />
      </div>
    </div>
  );
}
