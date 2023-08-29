import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsCompo from "./components/NewsCompo";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <NewsCompo
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="in"
                cat="general"
              />
            </Route>
            <Route exact path="/business">
              <NewsCompo
                setProgress={this.setProgress}
                key="business"
                pageSize={this.pageSize}
                country="in"
                cat="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <NewsCompo
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                cat="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <NewsCompo
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                country="in"
                cat="health"
              />
            </Route>
            <Route exact path="/science">
              <NewsCompo
                setProgress={this.setProgress}
                key="science"
                pageSize={this.pageSize}
                country="in"
                cat="science"
              />
            </Route>
            <Route exact path="/sports">
              <NewsCompo
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                cat="sports"
              />
            </Route>
            <Route exact path="/technology">
              <NewsCompo
                setProgress={this.setProgress}
                key="technology"
                pageSize={this.pageSize}
                country="in"
                cat="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
