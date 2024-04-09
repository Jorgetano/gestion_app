import { useState } from "react";
import "./Login.css";


const Login = () => {
    const [getUsername, setUsername] = useState()
    const [getPassword, setPassword] = useState()
    
    if(getUsername === 'Jaime' && getPassword === '12345'){
console.log('Usuario Correcto')
    }


  return (
    <section className="login">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input onChange={(e)=>{setUsername(e.target.value)}} type="text" id="username" name="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input onChange={(e)=>{setPassword(e.target.value)}}  type="password" id="password" />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
};

export default Login;
