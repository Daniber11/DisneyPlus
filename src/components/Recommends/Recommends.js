import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Recommend.css";
import { selectRecommend } from "../../features/movie/movieSlice";

const Recommends = () => {
  const movies = useSelector(selectRecommend);

  return (
    <div className="recommends-container">
      <div className="letter">Recomendados para ti</div>
      <div className="recommends-content">
        {movies &&
          movies.map((movie, key) => (
            <div className="recommends-wrap" key={key}>
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

export default Recommends;
