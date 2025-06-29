import React, { useState } from 'react';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'teste@teste.com' && senha === '123456') {
      alert('Login bem-sucedido!');
    } else {
      alert('Email ou senha inválidos!');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Faça seu login em nossa plataforma!</h2>
      <div className={styles.loginBox}>
        <h3>Entrar</h3>

        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        <div className={styles.loginLinks}>
          <a href="/redefinirSenha">Esqueci a senha</a>
          <a href="/signup">Não tenho cadastro</a>
        </div>
      </div>
    </div>
  );
};

export default Login;



