import React from "react";
import Header from "./Header";
import "./Main.css";
import Posts from "./Posts";
export default function Main(props) {
  return (
    <div className="main">
      <Header subreddit={props.subreddit} />
      <Posts />
    </div>
  );
}
