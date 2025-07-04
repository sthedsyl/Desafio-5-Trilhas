import { useState } from 'react';
import styles from './signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      setMensagem('Os emails não coincidem.');
      return;
    }

    if (senha !== confirmSenha) {
      setMensagem('As senhas não coincidem.');
      return;
    }

    setMensagem('Cadastro realizado com sucesso!');
  };

  return (
    <div className={styles.cadastroWrapper}>
      <h2 className={styles.titulo}>Faça seu cadastro em nossa plataforma!</h2>

      <div className={styles.container}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <h3 className={styles.formTitulo}>Cadastrar</h3>

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="confirmEmail">Repita o Email:</label>
          <input
            id="confirmEmail"
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />

          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <label htmlFor="confirmSenha">Repita a Senha:</label>
          <input
            id="confirmSenha"
            type="password"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            required
          />

          <button type="submit">Cadastrar</button>
          {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
