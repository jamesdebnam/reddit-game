import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { subredditList } from "../subredditData";
import { secret, id } from "../SECRET-KEY";

const generateRandomNumbers = (num) => {
  let numberSet = new Set([]);
  while (numberSet.size < 5) {
    numberSet.add(Math.floor(Math.random() * num));
  }
  return Array.from(numberSet);
};

export const fetchPosts = createAsyncThunk("game/fetchPosts", async (num) => {
  const subreddits = generateRandomNumbers(num).map((number) => {
    return subredditList[number];
  });
  console.log(subreddits);

  //OAuth token post request
  const response = await axios.post(
    "https://www.reddit.com/api/v1/access_token",
    `grant_type=client_credentials`,
    {
      headers: {
        "User-Agent": "website:reddit-guesser:v0.1",
        Authorization: "Basic " + btoa(id + ":" + secret),
      },
    }
  );
  const postArray = [];
  for (let subreddit of subreddits) {
    const post = await axios.get(`https://oauth.reddit.com${subreddit}.json`, {
      params: {
        sort: "all",
        t: "all",
        limit: 1,
        show: "all",
      },
      headers: {
        "User-Agent": "website:reddit-guesser:v0.1",
        Authorization: `Bearer ${response.data.access_token}`,
      },
    });
    postArray.push(post);
  }

  console.log(postArray);
});

const gameSlice = createSlice({
  name: "game",
  initialState: "",
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {},
  },
});

const { actions, reducer } = gameSlice;
// export const { setDifficulty } = actions;
// export default reducer;
