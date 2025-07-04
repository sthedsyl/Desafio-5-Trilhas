import CardsServices from '@/components/home/cards-services'
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
        <img src="/saude.svg" alt="Ilustração Saúde" className={styles.saudeImage} />
       
      </section>

      <h2 className={styles.sectionTitle}>Principais Funcionalidades</h2>

      <section className={styles.features}>
        
        <CardsServices
          icon="/iconheart.svg"
          title="Consultas"
          description="Informações sobre locais disponíveis para marcação de consultas, exames, etc. Quais documentos são necessários para realizar a marcação."
        />
        <CardsServices
          icon="/dashboard-icon.svg"
          title="Dashboard"
          description="Indicadores sobre saúde no Maranhão, doenças mais comuns e como se prevenir."
        />
        <CardsServices
          icon="/article-icon.svg"
          title="Artigos"
          description="Artigos e revistas sobre saúde disponíveis para tirar dúvidas ou sanar curiosidades."
        />
      </section>

      <section className={styles.objective}>
        <h3>Nosso Objetivo</h3>
        <p>Este site tem como objetivo oferecer informações claras, acessíveis e <br /> atualizadas sobre os serviços de saúde pública disponíveis no estado do Maranhão.</p>
      </section>
    </>
  )
}

export default App