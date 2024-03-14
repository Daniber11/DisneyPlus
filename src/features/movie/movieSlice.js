import { createSlice } from "@reduxjs/toolkit";

// Estado inicial para la sección de películas.
// Contiene objetos para almacenar las recomendaciones, nuevas películas de Disney,
// películas originales y tendencias.

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

//Sección de películas para gestionar los cambios de estado relacionados con las películas.

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // Función reductora setMovies para actualizar el estado con los nuevos datos de películas.
    // state - El estado actual.
    // action - La acción que contiene los nuevos datos de películas.
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});
// Exportamos la acción setMovies para actualizar los datos de las películas.
export const { setMovies } = movieSlice.actions;

// Selectores para obtener datos de películas específicos del estado
export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
