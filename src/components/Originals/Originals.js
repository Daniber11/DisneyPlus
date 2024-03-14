import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Originals.css";
import { selectOriginal } from "../../features/movie/movieSlice";

const Originals = () => {
  const movies = useSelector(selectOriginal);

  return (
    <div className="originals-container">
      <div className="letter">Originales de Disney</div>
      <div className="originals-content">
        {movies &&
          movies.map((movie, key) => (
            <div className="originals-wrap" key={key}>
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

export default Originals;
