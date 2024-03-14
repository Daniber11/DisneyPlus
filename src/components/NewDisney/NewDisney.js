import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./NewDisney.css";
import { selectNewDisney } from "../../features/movie/movieSlice";

const NewDisney = () => {
  const movies = useSelector(selectNewDisney);

  return (
    <div className="new-disney-container">
      <div className="letter">Nuevo en Disney+</div>
      <div className="new-disney-content">
        {movies &&
          movies.map((movie, key) => (
            <div className="new-disney-wrap" key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewDisney;
