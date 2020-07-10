import React from "react";

import "./DifficultyForm.css";

export default function DifficultyForm() {
  return (
    <div className="difficulty">
      <h2 className="difficulty__header">Choose a difficulty</h2>
      <form className="difficulty__form">
        <div className="radio radio__super-easy">
          <input
            name="difficulty"
            type="radio"
            id="super-easy"
            value="super-easy"
          />
          <label htmlFor="super-easy">Super Easy</label>
        </div>
        <div className="radio radio__easy">
          <input name="difficulty" type="radio" id="easy" value="easy" />
          <label htmlFor="easy">Easy</label>
        </div>
        <div className="radio radio__medium">
          <input name="difficulty" type="radio" id="medium" value="medium" />
          <label htmlFor="medium">Medium</label>
        </div>
        <div className="radio radio__hard">
          <input name="difficulty" type="radio" id="hard" value="hard" />
          <label htmlFor="hard">Hard</label>
        </div>
      </form>
    </div>
  );
}
