import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { fetchPosts } from "../reducers/gameSlice";

export default function Game() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts(50));
  }, []);
  return <div>hello</div>;
}
