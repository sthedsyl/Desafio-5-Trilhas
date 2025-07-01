import { useState } from 'react';
import Sidebar from '../componentes/Sidebar';
import styles from '../AdicionarUsuario.module.css';
import { CalendarDays } from 'lucide-react';

const AdicionarUsuario = () => {
  const [mensagem, setMensagem] = useState('');
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    funcao: '',
    dataCadastro: '',
    senha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(usuario);
    setMensagem('Usuário cadastrado com sucesso!');
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.formArea}>
        <h2>Adicionar Usuário</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            required
            value={usuario.nome}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            value={usuario.email}
            onChange={handleChange}
            className={styles.input}
          />

          <div className={styles.linha}>
            <select
              name="funcao"
              value={usuario.funcao}
              required
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Função</option>
              <option value="Admin">Administrador</option>
              <option value="Editor">Publicador</option>
            </select>

            <div className={styles.dataInput}>
              <input
                type="date"
                name="dataCadastro"
                required
                value={usuario.dataCadastro}
                onChange={handleChange}
              />
              <CalendarDays size={18} />
            </div>
          </div>

          <input
            type="text"
            name="senha"
            placeholder="Senha Provisória"
            value={usuario.senha}
            onChange={handleChange}
            className={styles.input}
          />

          <button type="submit" className={styles.btnSalvar}>Salvar</button>
          {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdicionarUsuario;
