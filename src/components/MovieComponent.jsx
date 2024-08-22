import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/slices/appSelector";

const MovieComponent = () => {
  const movies = useSelector(selectMovies);

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Movies List</h1>
        <div className="movies_container">
          {movies.map((curVal) => {
            return <MovieCard key={curVal?._id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
