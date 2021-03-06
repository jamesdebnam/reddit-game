import React from "react";
import { useDispatch } from "react-redux";

import { setDifficulty } from "../reducers/configSlice";

export default function DifficultyForm() {
  const dispatch = useDispatch();

  const dispatchSetDifficulty = (event) =>
    dispatch(setDifficulty(event.target.value));

  return (
    <div className="difficulty">
      <h2 className="difficulty__header">Choose a difficulty</h2>
      <div className="radio radio__super-easy">
        <input
          onClick={dispatchSetDifficulty}
          name="difficulty"
          type="radio"
          id="super-easy"
          value="super-easy"
          defaultChecked
        />
        <label className="difficulty__label" htmlFor="super-easy">
          Super Easy
        </label>
      </div>
      <div className="radio radio__easy">
        <input
          onClick={dispatchSetDifficulty}
          name="difficulty"
          type="radio"
          id="easy"
          value="easy"
        />
        <label className="difficulty__label" htmlFor="easy">
          Easy
        </label>
      </div>
      <div className="radio radio__medium">
        <input
          onClick={dispatchSetDifficulty}
          name="difficulty"
          type="radio"
          id="medium"
          value="medium"
        />
        <label className="difficulty__label" htmlFor="medium">
          Medium
        </label>
      </div>
      <div className="radio radio__hard">
        <input
          onClick={dispatchSetDifficulty}
          name="difficulty"
          type="radio"
          id="hard"
          value="hard"
        />
        <label className="difficulty__label" htmlFor="hard">
          Hard
        </label>
      </div>
    </div>
  );
}
