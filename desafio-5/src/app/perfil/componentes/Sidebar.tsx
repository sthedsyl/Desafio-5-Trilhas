import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { LayoutDashboard, FileText, Users } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.menu}>
        <Link to="/perfil/admin" className={styles.menuItem}>
          <LayoutDashboard size={20} />
          Visão Geral
        </Link>
        <Link to="/perfil/gerenciador-de-artigo" className={styles.menuItem}>
          <FileText size={20} />
          Gerenciar Artigos
        </Link>
        <Link to="/perfil/user" className={styles.menuItem}>
          <Users size={20} />
          Gerenciar Usuários
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
