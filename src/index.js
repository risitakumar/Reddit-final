import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/login_page";

import Reddit from "./components/Reddit";
//Route Definitions
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/reddit">
          <Reddit />
        </Route>
        <Route exact path="/r/popular">
          <Reddit subreddit="r/popular" />
        </Route>
        <Route exact path="/r/hot">
          <Reddit subreddit="r/hot" />
        </Route>
        <Route exact path="/r/rising">
          <Reddit subreddit="r/rising" />
        </Route>
        <Route exact path="/r/controversial">
          <Reddit subreddit="r/controversial" />
        </Route>
        <Route exact path="/r/gilded">
          <Reddit subreddit="r/gilded" />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  </Provider>,

  document.getElementById("root")
);
