import logo from "./logo.svg";
import SideNav from "./SideNav";
import Main from "./Main";
import "./Reddit.css";

function Reddit(props) {
  return (
    <div className="App">
      {/* <Login /> */}
      <div className="container">
        <SideNav />
        <Main subreddit={props.subreddit} />
      </div>
    </div>
  );
}

export default Reddit;
