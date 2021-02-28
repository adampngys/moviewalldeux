import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import { Button } from "react-bootstrap";

class Single extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { match, movies } = this.props; //shorthand for this.props.match
    const movieName = match.params.pathID;
    const movie = movies.find((singleMovie) => singleMovie.name === movieName);
    return (
      <div>
        <div className="menuLinks">
          <Link to="/" className="navLink">
            <Button variant="primary" size="lg">
              Main Menu
            </Button>
          </Link>
        </div>
        <div className="single-movie">
          <MovieDetails movie={movie} {...this.props} />
        </div>
      </div>
    );
  }
}

export default Single;
