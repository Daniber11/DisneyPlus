import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-cta">
          <img
            className="login-cta-logo-one"
            src="/images/cta-logo-one.svg"
            alt=""
          />
          <a className="login-sign-up" href="#">
            CONTRATA LA OFERTA
          </a>
          <p className="login-description">Suscribirme solo a Disney+</p>
          <img
            className="login-cta-logo-two"
            src="/images/cta-logo-two.png"
            alt=""
          />
        </div>
        <div className="login-bg-image"></div>
      </div>
    </div>
  );
};

export default Login;
