import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { fetchSubreddits } from "../reducers/gameSlice";

export default function Game() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSubreddits());
  }, []);
  return <div>hello</div>;
}
