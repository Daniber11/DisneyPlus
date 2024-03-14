import { createSlice } from "@reduxjs/toolkit";

// Estado inicial para los datos del usuario
const initialState = {
  name: "",
  email: "",
  photo: "",
};

// userSlice para gestionar el estado relacionado con el usuario
const userSlice = createSlice({
  name: "user", // Identificador único para esta slice
  initialState,
  reducers: {
    // Acción para establecer los detalles de inicio de sesión del usuario
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    // Acción para cerrar sesión del usuario
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// Exportar las acciones relacionadas con el usuario
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

// Selectores para obtener los datos del usuario desde el estado
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
