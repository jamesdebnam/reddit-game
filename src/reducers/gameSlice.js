import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { secret, id } from "../SECRET-KEY";

export const fetchSubreddits = createAsyncThunk(
  "game/fetchSubreddits",
  async (num) => {
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
    console.log(response.data.access_token);
    const subReddits = await axios.get(
      "https://oauth.reddit.com/subreddits/popular.json",
      {
        params: {
          after: "t5_3lhmz",
          limit: 100,
          show: "all",
        },
        headers: {
          "User-Agent": "website:reddit-guesser:v0.1",
          Authorization: `Bearer ${response.data.access_token}`,
        },
      }
    );
    console.log(subReddits.data.data.children);

    const subreddits = subReddits.data.data.children.map((item) => {
      return { url: item.data.url, name: item.data.title };
    });
    console.log(subreddits);
  }
);

const gameSlice = createSlice({
  name: "game",
  initialState: "",
  reducers: {},
  extraReducers: {
    [fetchSubreddits.fulfilled]: (state, action) => {},
  },
});

const { actions, reducer } = gameSlice;
// export const { setDifficulty } = actions;
// export default reducer;
