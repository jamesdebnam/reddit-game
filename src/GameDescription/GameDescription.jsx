import React from "react";

export default function GameDescription() {
  return (
    <div className="game-description">
      <h2 className="game-description__header">Game Rules</h2>
      <p className="game-description__content">
        It's simple! I'm going to grab a top post from a random subreddit, and
        you have to guess which subreddit it came from! You can adjust
        difficulty to change things like question time, where the post is taken
        from, and how large the pool of top subreddits is that I choose from.
        Have fun!
      </p>
    </div>
  );
}
