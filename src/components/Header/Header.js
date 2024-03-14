import { useEffect } from "react";

import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";

import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/userSlice";
import { auth, provider } from "../../firebase"; // Importando 'auth' y 'provider' desde el archivo firebase.js

const Header = () => {
  const dispatch = useDispatch(); // Inicializamos la variable 'dispatch' con el hook 'useDispatch'
  const navigate = useNavigate(); // Inicializamos la variable 'navigate' con el hook 'useNavigate'
  const userName = useSelector(selectUserName); // Seleccionando el nombre de usuario desde el store de Redux
  const userPhoto = useSelector(selectUserPhoto); // Seleccionando la foto de usuario desde el store de Redux

  // Usamos el hook para manejar el estado de autenticación del usuario
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user); // Llamando la función 'setUser' si el usuario está autenticado
        navigate("/home"); // Navegando a la página de inicio si el usuario está autenticado
      }
    });
  }, [userName]); // Ejecutando hook sólo cuando la variable 'userName' cambia

  // Función para manejar el estado de autenticación del usuario
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        // Devolvemos la acción 'setUserLoginDetails' con los detalles del usuario
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  // Función para manejar la autenticación del usuario
  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider) // Autenticándose con la ventana emergente si el usuario no está autenticado
        .then((result) => {
          setUser(result.user); // Llamando la función 'setUser' con los detalles del usuario
          navigate("/home"); // Navegando a la página de inicio
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut() // Cerrando sesión si el usuario está autenticado
        .then(() => {
          dispatch(setSignOutState()); // Devolvemos la acción 'setSignOutState'
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <nav className="header-nav">
      <div className="header-logo">
        <img src="/images/logo.svg" alt="Disney+" />
      </div>
      {!userName ? (
        <a className="header-login" onClick={handleAuth}>
          INICIAR SESIÓN
        </a>
      ) : (
        <>
          <div className="header-nav-menu">
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span className="letterHeader">INICIO</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span className="letterHeader">BÚSQUEDA</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span className="letterHeader">MI LISTA</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span className="letterHeader">ORIGINALES</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span className="letterHeader">PELÍCULAS</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span className="letterHeader">SERIES</span>
            </a>
          </div>
          <div className="header-signout">
            <img className="header-user-img" src={userPhoto} alt={userName} />
            <div className="header-dropdown">
              <span onClick={handleAuth}>Cerrar Sesión</span>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
