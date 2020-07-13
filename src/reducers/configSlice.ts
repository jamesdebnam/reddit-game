import { createSlice } from "@reduxjs/toolkit";

type difficultyState = {
  difficulty: string;
  config: {
    multiChoice: boolean;
    listing: string;
    includeNSFW: boolean;
  };
};

const configSlice = createSlice({
  name: "config",
  initialState: { difficulty: "super-easy" } as difficultyState,
  reducers: {
    setDifficulty: (state, action) => {},
  },
});
