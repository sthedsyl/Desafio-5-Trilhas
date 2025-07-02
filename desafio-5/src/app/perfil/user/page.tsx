import { useState } from 'react';
import { Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../componentes/Sidebar';
import styles from './GerenciarUsuarios.module.css';
import Swal from 'sweetalert2';


const GerenciarUsuarios = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: 'Nome do Usuário', funcao: 'Administrador' },
    { id: 2, nome: 'Nome do Usuário', funcao: 'Publicador' },
    { id: 3, nome: 'Nome do Usuário', funcao: 'Publicador' },
    { id: 4, nome: 'Nome do Usuário', funcao: 'Publicador' },
    { id: 5, nome: 'Nome do Usuário', funcao: 'Publicador' },
    { id: 6, nome: 'Nome do Usuário', funcao: 'Publicador' },
    { id: 7, nome: 'Nome do Usuário', funcao: 'Publicador' },
    { id: 8, nome: 'Nome do Usuário', funcao: 'Publicador' },
  ]);

const handleDelete = (id: number) => {
  Swal.fire({
    title: 'Tem certeza?',
    text: 'Essa ação não poderá ser desfeita!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sim, excluir!',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      setUsuarios((prev) => prev.filter((user) => user.id !== id));
      Swal.fire('Excluído!', 'O usuário foi removido.', 'success');
    }
  });
};

  const handleChange = (id: number, newFuncao: string) => {
    setUsuarios(prev =>
      prev.map(user => user.id === id ? { ...user, funcao: newFuncao } : user)
    );
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
         <div className={styles.header}>
            <h2>Gerenciar Usuários</h2>
            <button onClick={() => navigate('/perfil/criar-usuario')}>
              + Adicionar Usuário
            </button>
          </div>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>Nome</span>
            <span>Função</span>
          </div>
          {usuarios.map(user => (
            <div key={user.id} className={styles.tableRow}>
              <span>{user.nome}</span>
              <select
                value={user.funcao}
                onChange={(e) => handleChange(user.id, e.target.value)}
              >
                <option>Administrador</option>
                <option>Publicador</option>
              </select>
              <Trash
                className={styles.trashIcon}
                size={25}
                color="#1e4a5a"
                onClick={() => handleDelete(user.id)}
                style={{ cursor: 'pointer',  }}
                
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GerenciarUsuarios;
