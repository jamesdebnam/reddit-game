import React from "react";

export default function DifficultyForm() {
  const setDifficulty = (event: React.MouseEvent<HTMLInputElement>): void =>
    console.log((event.target as HTMLInputElement).value);

  return (
    <div className="difficulty">
      <h2 className="difficulty__header">Choose a difficulty</h2>
      <div className="radio radio__super-easy">
        <input
          onClick={setDifficulty}
          name="difficulty"
          type="radio"
          id="super-easy"
          value="super-easy"
        />
        <label className="difficulty__label" htmlFor="super-easy">
          Super Easy
        </label>
      </div>
      <div className="radio radio__easy">
        <input
          onClick={setDifficulty}
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
          onClick={setDifficulty}
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
          onClick={setDifficulty}
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
