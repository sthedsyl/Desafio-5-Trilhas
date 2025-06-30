import React, { useState } from 'react';
import Sidebar from '../componentes/Sidebar';
import styles from './CriarArtigo.module.css';
import { CalendarDays, Image } from 'lucide-react';

const CriarArtigo = () => {
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [corpo, setCorpo] = useState('');
  const [autor, setAutor] = useState('');
  const [data, setData] = useState('');
  const [imagem, setImagem] = useState<File | null>(null);
  const [mensagem, setMensagem] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImagem(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const artigo = {
      titulo,
      subtitulo,
      corpo,
      autor,
      data,
      imagem,
    };

    console.log('Artigo enviado:', artigo);
    setMensagem('Artigo salvo com sucesso!');
  };

  return (
    <div className={styles.pageWrapper}>
      <Sidebar />

      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Criar Artigo</h1>

        <input
          type="text"
          placeholder="Título do Artigo"
          value={titulo}
          required
          onChange={(e) => setTitulo(e.target.value)}
          className={styles.input}
        />

        <input
          type="text"
          placeholder="Título do Artigo"
          value={subtitulo}
          onChange={(e) => setSubtitulo(e.target.value)}
          className={styles.input}
        />

        <label className={styles.imageUploadBox}>
          <Image size={68} strokeWidth={1.5} />
          <span>Enviar Imagem</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
        </label>

        <label className={styles.label}>Corpo do Artigo</label>
        <div className={styles.textEditor}>
          <div className={styles.toolbar}>B / U</div>
          <textarea
            rows={5}
            value={corpo}
            required
            onChange={(e) => setCorpo(e.target.value)}
          />
        </div>

        <input
          type="text"
          placeholder="Autor"
          value={autor}
          required
          onChange={(e) => setAutor(e.target.value)}
          className={styles.input}
        />

        <div className={styles.row}>
          <div className={styles.dateInput}>
            <input
              type="date"
              value={data}
              required
              onChange={(e) => setData(e.target.value)}
            />
            <CalendarDays size={20} />
          </div>

          <button type="submit" className={styles.saveBtn}>Salvar</button>
        </div>

        {mensagem && <p className={styles.successMsg}>{mensagem}</p>}
      </form>
    </div>
  );
};

export default CriarArtigo;
