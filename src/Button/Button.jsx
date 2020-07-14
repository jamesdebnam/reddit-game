import React from "react";

export default function Button({ buttonClass, content }) {
  return <button className={`btn ${buttonClass}`}>{content}</button>;
}
