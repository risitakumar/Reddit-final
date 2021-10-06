import React from "react";
import PostItem from "./PostItem";
import "./Posts.css";
export default function Posts() {
  const posts = [
    {
      upvote: 547,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 100
      )}/300/150`,
      title: "Questions about new restaurant",
      user: "theindependentonline",
      subreddit: "food",
      comments_count: 284,
    },
    {
      upvote: 675,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 100
      )}/300/150`,
      title: "Amazing customer supports for child",
      user: "thepez",
      subreddit: "gaming",
      comments_count: 70,
    },
    {
      upvote: 1064,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 100
      )}/300/150`,
      title:
        "I saw The Haunting of Hill House and now I want to read something similar to that!",
      user: "cronaldo",
      subreddit: "movie",
      comments_count: 30,
    },
    {
      upvote: 980,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 100
      )}/300/150`,
      title:
        "Jorge Jesus to Ruben Dias: You are leaving a club that is much bigger than Manchester City, it is only smaller financially.",
      user: "lionelmessidre",
      subreddit: "soccer",
      comments_count: 98,
    },
    {
      upvote: 5472,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 100
      )}/300/150`,
      title:
        "New Iphone to come with only mobile parts to be assembled by the users.",
      user: "billTheGates",
      subreddit: "technology",
      comments_count: 28,
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}
