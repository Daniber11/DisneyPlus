import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Treinding.css";
import { selectTrending } from "../../features/movie/movieSlice";

const Trending = () => {
  const movies = useSelector(selectTrending);

  return (
    <div className="trending-container">
      <div className="letter">Tendeincias</div>
      <div className="trending-content">
        {movies &&
          movies.map((movie, key) => (
            <div className="trending-wrap" key={key}>
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

export default Trending;
