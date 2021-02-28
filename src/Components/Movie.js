import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import placeholderImage from "../assets/image-placeholder.png";

function Movie(props) {
  const movie = props.movie;
  return (
    <figure className="figure">
      <p>Name: {movie.name}</p>
      <p>Production Year: {movie.productionYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>
        Short Synopsis: <br />
        {movie.synopsisShort}
      </p>
      <center>
        <img className="photo" src={placeholderImage} alt={movie.image} />
        <br />
        {movie.name} - {movie.image}
        <br />
      </center>
      <figcaption>
        <p>{movie.description}</p>
      </figcaption>
      <Link to={`/Single/${props.movie.name}`} className="navLink">
        <div className="button-container">
          <Button variant="primary" size="lg">
            More Details
          </Button>
        </div>
      </Link>
    </figure>
  );
}

export default Movie;
