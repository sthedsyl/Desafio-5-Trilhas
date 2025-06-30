import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState<'sucesso' | 'erro' | ''>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'teste@teste.com' && senha === '123') {
      setMensagem('Login bem-sucedido!');
      setTipoMensagem('sucesso');

      setTimeout(() => {
        navigate('/perfil/admin');
      }, 1000); 
    } else {
      setMensagem('Email ou senha inválidos!');
      setTipoMensagem('erro');
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
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha:</label>
          <input
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        {mensagem && (
          <p
            className={
              tipoMensagem === 'sucesso'
                ? styles.mensagemSucesso
                : styles.mensagemErro
            }
          >
            {mensagem}
          </p>
        )}

        <div className={styles.loginLinks}>
          <a href="/redefinirSenha">Esqueci a senha</a>
          <a href="/signup">Não tenho cadastro</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
