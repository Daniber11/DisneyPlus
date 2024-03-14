import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import movieReducer from "../features/movie/movieSlice";
import userReducer from "../features/user/userSlice";

// Configurar Redux con los reducers combinados de movie y user
const store = configureStore({
  // Definir el objeto reducer con las propiedades movie y user
  // que corresponden a movieReducer y userReducer respectivamente
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  // Configurar el middleware con el middleware predeterminado
  // y deshabilitar serializableCheck para mayor flexibilidad
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
