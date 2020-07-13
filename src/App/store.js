import { configureStore } from "@reduxjs/toolkit";

import configSlice from "../reducers/configSlice";

export default configureStore({
  reducer: {
    config: configSlice,
  },
});
