import React from 'react';
import { Button } from '@material-ui/core';

const MovieCard = (props) => {
  let Actors = ""
  let Writers = ""
  let Language = ""
  let Genre = ""
  let Ratings = []
  if(props.movie.Actors && props.movie.Writer && props.movie.Genre && props.movie.Language && props.movie.Ratings){
    Actors = props.movie.Actors  
    Writers = props.movie.Writer
    Language = props.movie.Language
    Genre = props.movie.Genre
    Ratings = props.movie.Ratings
  }

  return (
    <div className="container">
      <Button className = "backToSearch-button" color="secondary" onClick={() => props.back()}>Back to Search</Button>
      <div>
        <div className = "movie-Image">
          <img  src={props.movie.Poster} alt="Movie Poster"/>
        </div>
        <div className="movie-content">
          <div className="movie-title">
            <h3>{props.movie.Title}</h3>
          </div>
          <div>
            <p>{props.movie.Plot}</p>
          </div>
          <div className="movie-details">
            <p>
              <strong>Year:</strong>
              {" " + props.movie.Year}
            </p>
            <p>
              <strong>Rated:</strong>
              {" " + props.movie.Rated}
            </p>
            <p>
              <strong>Released:</strong>
              {" " + props.movie.Released}
            </p>
            <p>
              <strong>Runtime:</strong>
              {" " + props.movie.Runtime}
            </p>
            <p>
              <strong>Genre:</strong>{" "}
              {Genre.split(",").map(genre => {
                return <li key={genre}>{genre.trim()}</li>;
              })}
            </p>
            <p>
              <strong>Director:</strong>
              {" " + props.movie.Director}
            </p>
            <p>
              <strong>Writer:</strong>{" "}
              {Writers.split(",").map(writer => {
                return <li key={writer}>{writer.trim()}</li>;
              })}
            </p>
            <p>
              <strong>Actors:</strong>{" "}
              {Actors.split(",").map(actor => {
                return <li key={actor}>{actor.trim()}</li>;
              })}
            </p> 
            <p>
              <strong>Language:</strong>{" "}
              {Language.split(",").map(language => {
                return <li key={language}>{language.trim()}</li>;
              })}
            </p> 
            <p>
              <strong>Awards:</strong>
              {" " + props.movie.Awards}
            </p>
            <p>
              <strong>List of ratings:</strong>{" "}
              {Ratings.map(rating => {
                return (
                  <li key={rating.Source}>
                    Source: {rating.Source} Rating: {rating.Value}
                  </li>
                );
              })}
            </p>
            <p>
              <strong>imdbRating:</strong>
              {" " + props.movie.imdbRating}
            </p>
            <p>
              <strong>imdbVotes:</strong>
              {" " + props.movie.imdbVotes}
            </p>
            <p>
              <strong>Type:</strong>
              {" " + props.movie.Type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;