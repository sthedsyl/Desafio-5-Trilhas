function App() {
  return (
    <>
      <header>
        <img src="/assets/Frame.png" alt="Saúde MA" width="150" />
        <nav>
          <a href="#">Início</a>
          <a href="#">Consultas</a>
          <a href="#">Dashboard</a>
          <a href="#">Artigos</a>
          <a href="#" className="btn-header">Entrar</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Bem-vindo (a) ao Portal de Saúde Pública do Maranhão!</h1>
          <p>Encontre aqui tudo o que você precisa saber sobre agendamento de consultas pelo SUS, indicadores de saúde e acesse conteúdo sobre doenças e cuidados preventivos para você e sua família.</p>
          <div className="hero-buttons">
            <button id="btn-dashboard">Dashboard</button>
            <button id="btn-consultas">Consultas</button>
          </div>
        </div>
        <img src="/assets/66139 (1) 1.png" alt="Ilustração Saúde" />
      </section>

      <h2 className="section-title">Principais Funcionalidades</h2>

      <section className="features">
        <div className="feature-box">
          <img src="/assets/Group 8.svg" alt="Consultas" />
          <h3>Consultas</h3>
          <p>Informações sobre locais disponíveis para marcação de consultas, exames, etc.</p>
          <button>Saiba mais</button>
        </div>
        <div className="feature-box">
          <img src="/assets/Group 9.svg" alt="Dashboard" />
          <h3>Dashboard</h3>
          <p>Indicadores sobre saúde no Maranhão, doenças mais comuns e como se prevenir.</p>
          <button>Saiba mais</button>
        </div>
        <div className="feature-box">
          <img src="/assets/Frame.svg" alt="Artigos" />
          <h3>Artigos</h3>
          <p>Artigos e revistas sobre saúde disponíveis para tirar dúvidas ou sanar curiosidades.</p>
          <button>Saiba mais</button>
        </div>
      </section>

      <section className="objective">
        <h3>Nosso Objetivo</h3>
        <p>Este site tem como objetivo oferecer informações claras, acessíveis e atualizadas sobre os serviços de saúde pública disponíveis no estado do Maranhão.</p>
      </section>
    </>
  )
}

export default App



