import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import "../sass/main.scss";
import DifficultyForm from "../DifficultyForm/DifficultyForm";
import GameSettings from "../GameSettings/GameSettings";
import GameDescription from "../GameDescription/GameDescription";
import Button from "../Button/Button";
import Game from "../Game/Game";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>

        <Route path="/" only>
          <div className="game__home">
            <h1 className="game__home__header">The Reddit Game</h1>
            <div className="game__home__left">
              <DifficultyForm />
              <Link to="/game">
                <Button buttonClass="btn-big" content="Let's play!" />
              </Link>
            </div>
            <div className="game__home__right">
              <GameDescription />
              <GameSettings />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
