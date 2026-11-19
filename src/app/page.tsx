export default function Home() {
  return (
    <main>
      <aside className="sidebar">
        <div className="brand"><strong>SIAC</strong><span>Análise Criminal</span></div>
        <nav>
          <a className="active" href="#">Painel inicial</a>
          <a href="#">Ocorrências</a>
          <a href="#">Submissões</a>
          <a href="#">Estatísticas</a>
          <a href="#">Relatórios</a>
          <a href="#">Administração</a>
        </nav>
      </aside>

      <section className="content">
        <header>
          <div><p>Ambiente de demonstração</p><h1>Painel inicial</h1></div>
          <span className="badge">Dados fictícios</span>
        </header>

        <div className="notice">
          Este protótipo apresenta exclusivamente dados demonstrativos. Não representa estatísticas policiais reais.
        </div>

        <section className="cards">
          <article><p>Ocorrências fictícias</p><strong>1.284</strong><span>Conjunto demonstrativo</span></article>
          <article><p>Cobertura</p><strong>92%</strong><span>Dados não oficiais</span></article>
          <article><p>Submissões pendentes</p><strong>8</strong><span>Exemplo de demonstração</span></article>
        </section>

        <section className="progress">
          <h2>Estado do protótipo</h2>
          <ul>
            <li><span>Fundação Next.js</span><b>Concluída</b></li>
            <li><span>Hierarquia e permissões</span><b>Próxima fase</b></li>
            <li><span>Dados reais</span><b>Bloqueado para validação</b></li>
          </ul>
        </section>
      </section>
    </main>
  );
}
