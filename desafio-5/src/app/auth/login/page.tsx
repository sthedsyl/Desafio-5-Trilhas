import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className="login-container">
      <h2>Faça seu login em nossa plataforma!</h2>

      <div className="login-box">
        <h3>Entrar</h3>

        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"  required />

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha"  required />

          <button type="submit">Entrar</button>
        </form>

        <div className="login-links">
          <Link to="#">Esqueci a senha</Link>
          <Link to="/signup">Não tenha cadastro</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
