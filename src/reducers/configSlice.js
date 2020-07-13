import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    subredditNum: 50,
    multiChoice: true,
    listing: "top/all",
    time: 10,
  },
  reducers: {
    setDifficulty: (state, action) => {
      switch (action.payload) {
        case "super-easy":
          state.subredditNum = 50;
          state.multiChoice = true;
          state.listing = "top/all";
          state.time = 10;
          break;

        case "easy":
          state.subredditNum = 100;
          state.multiChoice = true;
          state.listing = "top/month";
          state.time = 5;
          break;

        case "medium":
          state.subredditNum = 300;
          state.multiChoice = false;
          state.listing = "hot";
          state.time = 10;
          break;

        case "hard":
          state.subredditNum = 300;
          state.multiChoice = false;
          state.listing = "rising";
          state.time = 5;
          break;
        default:
          break;
      }
    },
  },
});

const { actions, reducer } = configSlice;
export const { setDifficulty } = actions;
export default reducer;
