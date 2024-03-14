import React from "react";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { setMovies } from "../../features/movie/movieSlice";
import moviesData from "../../movieData.json";
import ContentCategory from "../ContentCategory/ContentCategory";
import ImgSlider from "../ImgSlider/ImgSlider";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Recommends from "../Recommends/Recommends";
import Trending from "../Treinding/Treinding";
import "./Home.css";

const Home = () => {
  // Declarando e inicializando la variable dispatch usando el hook useDispatch
  const dispatch = useDispatch();

  // Definiendo el hook useEffect para disparar la acción setMovies con el moviesData al montar el componente
  useEffect(() => {
    dispatch(setMovies(moviesData));
  }, [dispatch]); // La variable dispatch se pasa como dependencia al hook useEffect

  return (
    <div className="container">
      <ImgSlider />
      <ContentCategory />
      <Recommends />
      <NewDisney />
      <Trending />
      <Originals />
    </div>
  );
};

export default Home;
