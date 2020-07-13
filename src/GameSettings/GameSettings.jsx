import React from "react";
import { useSelector } from "react-redux";

export default function GameSettings() {
  const config = useSelector((state) => state.config);

  if (config) {
    return (
      <div className="settings">
        <h2 className="settings__header">Game Settings</h2>
        <ul className="settings__list">
          <li className="list-item">
            <h4 className="list-item__header">Number of Top Subreddits: </h4>
            <p className="list-item__text">{config.subredditNum}</p>
          </li>
          <li className="list-item">
            <h4 className="list-item__header">Answer Type: </h4>
            <p className="list-item__text">
              {config.multiChoice ? "Multiple Choice" : "Type it in"}
            </p>
          </li>

          <li className="list-item">
            <h4 className="list-item__header">Post Taken From: </h4>
            <p className="list-item__text">{config.listing}</p>
          </li>

          <li className="list-item">
            <h4 className="list-item__header">Time to Answer: </h4>
            <p className="list-item__text">{config.time} seconds</p>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="settings">
        <h2 className="settings__header">Game Settings</h2>
        <ul className="settings__list">
          <li className="list-item">
            <h4 className="list-item__header">Number of Top Subreddits</h4>
          </li>
          <li className="list-item">
            <h4 className="list-item__header">Answer Type</h4>
          </li>

          <li className="list-item">
            <h4 className="list-item__header">Post Taken From</h4>
          </li>

          <li className="list-item">
            <h4 className="list-item__header">Time to Answer</h4>
          </li>
        </ul>
      </div>
    );
  }
}
