import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulando verificação
    if (email === 'teste@teste.com' && senha === '123456') {
      alert('Login bem-sucedido!');
      // Redirecionar ou salvar token, por exemplo
    } else {
      alert('Email ou senha inválidos!');
    }
  };

  return (
    <div className="login-container">
      <h2>Faça seu login em nossa plataforma!</h2>
      <div className="login-box">
        <h3>Entrar</h3>

        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        <div className="login-links">
          <a href="#">Esqueci a senha</a>
          <a href="/signup">Não tenho cadastro</a>
        </div>
      </div>
    </div>
  );
};

export default Login;



