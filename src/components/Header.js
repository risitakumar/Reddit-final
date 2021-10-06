import React from "react";
import "./Header.css";
export default function Header(props) {
  let isPopular = "active";
  let isHot = "negative";
  let isRising = "negative";
  let isControversial = "negative";
  let isGilded = "negative";

  if (props.subreddit === "r/popular") {
    isPopular = "active";
  } else if (props.subreddit === "r/hot") {
    isHot = "active";
    isPopular = "negative";
  } else if (props.subreddit === "r/rising") {
    isRising = "active";
    isPopular = "negative";
  } else if (props.subreddit === "r/controversial") {
    isControversial = "active";
    isPopular = "negative";
  } else if (props.subreddit === "r/gilded") {
    isGilded = "active";
    isPopular = "negative";
  }

  const [isLoggedIn, setisLoggedIn] = React.useState(false);

  React.useEffect(() => {
    setisLoggedIn(window.sessionStorage.getItem(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <div className="header">
      <div className="header_left">
        <ul>
          <li>
            <a href="/r/popular" class={isPopular}>
              Popular
            </a>
          </li>
          <li>
            <a href="/r/hot" class={isHot}>
              Hot
            </a>
          </li>
          <li>
            <a href="/r/rising" class={isRising}>
              Rising
            </a>
          </li>
          <li>
            <a href="/r/controversial" class={isControversial}>
              Controversial
            </a>
          </li>
          <li>
            <a href="/r/gilded" class={isGilded}>
              Gilded
            </a>
          </li>
        </ul>
      </div>
      <div className="header_right">
        <i className="fas fa-bell"></i>
        <a href="/login">
          <button>Log In</button>
        </a>
        {isLoggedIn ? (
          <img src="https://tse2.mm.bing.net/th?id=OIP.NSiJNb7uKsviQ9wiutC_2wHaHa&pid=Api&P=0&w=300&h=300" />
        ) : (
          <> </>
        )}
        <div className="header_user">
          <span>Risita Kumar</span>
          <i className="fas fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
}
