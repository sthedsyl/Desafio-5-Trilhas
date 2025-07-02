import { useNavigate } from 'react-router-dom';
import styles from './AdminDashboard.module.css';
import Sidebar from '../componentes/Sidebar';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Sidebar />

      <main className={styles.content}>
        <h1 className={styles.title}>Painel Administrador</h1>

        <div className={styles.cards}>
          <div className={styles.card}>
            <p>Total Artigos</p>
            <strong>35</strong>
          </div>
          <div className={styles.card}>
            <p>Total Usuários</p>
            <strong>12</strong>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Gerenciar Artigos</h2>
            <button onClick={() => navigate('/perfil/criar-artigo')}>
              + Adicionar Artigo
            </button>
          </div>
          <div className={styles.boxGrid}>
            <div onClick={() => navigate('/admin/artigos')} className={styles.box}></div>
            <div onClick={() => navigate('/admin/artigos')} className={styles.box}></div>
            <div onClick={() => navigate('/admin/artigos')} className={styles.box}></div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Gerenciar Usuários</h2>
            <button onClick={() => navigate('/perfil/criar-usuario')}>
              + Adicionar Usuário
            </button>
          </div>
          <table className={styles.table} onClick={() => navigate('')}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
