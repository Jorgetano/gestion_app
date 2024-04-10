import { useState } from "react";
import "./Login.css";
import { usuarios } from "../../../database/database";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [getUsername, setUsername] = useState();
  const [getPassword, setPassword] = useState();

  let redirecion = useNavigate();

  const buscarUsuario = () => {
    let estado = usuarios.some(
      (usuario) =>
        getUsername === usuario.user && getPassword === usuario.password
    );
    return estado;
  };
  function Iniciar_Sesion() {
    if (buscarUsuario()) {
      setTimeout(() => { //esta funcion hace que el panel no cargue enseguida; sino que se demorar los segundos que se le indiquen
        redirecion('PaNeL')
      }, 1000);
    } else {
      console.log("Credenciales erroneas");
    }
  }

  return (
    <section className="login">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
          />
        </div>
        <button onClick={Iniciar_Sesion} type="button">
          Ingresar
        </button>
      </form>
    </section>
  );
};

export default Login;
