import styles from './home.module.css'

function App() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Bem-vindo (a) ao Portal de Saúde Pública do Maranhão!</h1>
          <p>Encontre aqui tudo o que você precisa saber sobre agendamento de consultas pelo SUS, indicadores de saúde e acesse conteúdo sobre doenças e cuidados preventivos para você e sua família.</p>
          <div className={styles.heroButtons}>
            <button id="btn-dashboard" className={styles.primaryButton}>Dashboard</button>
            <button id="btn-consultas" className={styles.secondaryButton}>Consultas</button>
          </div>
        </div>
        <img src="./public/66139 (1) 1 (1).png" alt="Ilustração Saúde" className={styles.heroImage} />
      </section>

      <h2 className={styles.sectionTitle}>Principais Funcionalidades</h2>

      <section className={styles.features}>
        <div className={styles.featureBox}>
          <img src="/assets/Group 8.svg" alt="Consultas" />
          <h3>Consultas</h3>
          <p>Informações sobre locais disponíveis para marcação de consultas, exames, etc.</p>
          <button className={styles.learnMoreButton}>Saiba mais</button>
        </div>
        <div className={styles.featureBox}>
          <img src="/assets/Group 9.svg" alt="Dashboard" />
          <h3>Dashboard</h3>
          <p>Indicadores sobre saúde no Maranhão, doenças mais comuns e como se prevenir.</p>
          <button className={styles.learnMoreButton}>Saiba mais</button>
        </div>
        <div className={styles.featureBox}>
          <img src="/assets/Frame.svg" alt="Artigos" />
          <h3>Artigos</h3>
          <p>Artigos e revistas sobre saúde disponíveis para tirar dúvidas ou sanar curiosidades.</p>
          <button className={styles.learnMoreButton}>Saiba mais</button>
        </div>
      </section>

      <section className={styles.objective}>
        <h3>Nosso Objetivo</h3>
        <p>Este site tem como objetivo oferecer informações claras, acessíveis e atualizadas sobre os serviços de saúde pública disponíveis no estado do Maranhão.</p>
      </section>
    </>
  )
}

export default App
