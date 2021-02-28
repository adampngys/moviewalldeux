import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../styles/stylesheet.css";
import MovieWall from "./MovieWall";
import Single from "./Single";
import Title from "./Title";

class Main extends Component {
  componentDidMount() {
    this.props.fetchAPIData();
  }

  render() {
    console.log("from Main>>>>>>>>>");
    console.log(this.props);
    return (
      <div>
        <div>
          <Title title={"MovieWall"} />
        </div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <MovieWall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/Single/:pathID"
          render={(params) => (
            <div>
              <Single {...this.props} {...params} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default Main;
