import React from "react";
import placeholderImage from "../assets/image-placeholder.png";

function MovieDetails(props) {
  const movie = props.movie;
  let articleContent = props.movie.synopsis;
  let prefix = `<html>
  <head>
  <style>
  .myDiv {
    font-size: 19px;
    font-family: sans-serif;
    text-align: left;
  }
  </style>
  </head>
  <body>
  
  <div class="myDiv">`;
  let suffix = `</div>

  </body>
  </html>`;
  articleContent = prefix.concat(articleContent);
  articleContent = articleContent.concat(suffix);
  console.log("from MovieDetails>>>>>>>>>");
  console.log(articleContent);
  return (
    <div>
      <figure>
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
        <p>
          Full Synopsis: <br />
        </p>
        <div dangerouslySetInnerHTML={{ __html: articleContent }}></div>
      </figure>
    </div>
  );
}

export default MovieDetails;
