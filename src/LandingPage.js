// src/LandingPage.js
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-10 bg-yellow-50/90 backdrop-blur border-b border-yellow-100">
        <div className="max-w-6xl mx-auto p-6 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">
            InsightDash — Consultoria em Looker Studio
          </h1>

          <nav className="space-x-4">
            <a href="#servicos" className="text-sm hover:underline">
              Serviços
            </a>
            <a href="#portfolio" className="text-sm hover:underline">
              Portfólio
            </a>
            <a href="#precos" className="text-sm hover:underline">
              Preços
            </a>
            <a
              href="#contato"
              className="text-sm px-3 py-2 bg-yellow-300 rounded shadow hover:bg-yellow-200 transition"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* HERO */}
        <section className="pt-2">
          <h2 className="text-4xl font-bold mb-4">Transforme dados em decisões</h2>

          <p className="mb-6">
            Dashboards em Looker Studio com métricas claras, automação e insights
            prontos para ação — do operacional ao executivo.
          </p>

          <ul className="space-y-3 mb-6">
            <li>✅ Dashboards prontos para decisão</li>
            <li>✅ Integrações com Google Sheets, BigQuery e APIs</li>
            <li>✅ Treinamento e documentação para sua equipe</li>
          </ul>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#contato"
              className="px-5 py-3 bg-yellow-400 rounded font-semibold shadow hover:bg-yellow-300 transition"
            >
              Solicitar proposta
            </a>
            <a
              href="#portfolio"
              className="px-5 py-3 border rounded hover:bg-white transition"
            >
              Ver exemplos
            </a>
          </div>

          <p className="text-xs text-gray-600 mt-3">
            ✅ Entrega rápida • ✅ Documentação • ✅ Suporte na implantação
          </p>
        </section>

        {/* OFERTA */}
        <aside className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-bold mb-2">Oferta rápida</h3>
          <p className="text-sm mb-4">
            Dashboard inicial (modelo) + ajustes rápidos — ideal para validar o impacto.
          </p>

          <div className="text-3xl font-extrabold mb-2">R$ 199</div>
          <p className="text-xs text-gray-600 mb-4">(entrega em até 5 dias úteis)</p>

          <a
            href="#contato"
            className="block text-center px-4 py-3 bg-yellow-300 rounded font-semibold hover:bg-yellow-200 transition"
          >
            Quero esse pacote
          </a>

          <div className="mt-4 text-xs text-gray-600">
            Inclui: 1 página • 6–10 KPIs • layout profissional • ajustes iniciais
          </div>
        </aside>

        {/* SERVICOS */}
        <section id="servicos" className="lg:col-span-2 mt-6">
          <h3 className="text-2xl font-bold mb-4">Serviços</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <h4 className="font-semibold">Dashboard em Looker Studio</h4>
              <p className="text-sm text-gray-600 mt-2">
                Do layout aos KPIs — focado em clareza e decisão.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <h4 className="font-semibold">Integrações e Automação</h4>
              <p className="text-sm text-gray-600 mt-2">
                Google Sheets, BigQuery e APIs com atualização automática.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <h4 className="font-semibold">Treinamento & Documentação</h4>
              <p className="text-sm text-gray-600 mt-2">
                Handoff para sua equipe usar e evoluir o dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="lg:col-span-2 mt-10">
          <h3 className="text-2xl font-bold mb-4">Portfólio — exemplos</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition">
              <img
                src="/dashboard_vendas.png"
                alt="Dashboard de Vendas"
                className="object-cover w-full h-56 rounded-lg transition duration-300 hover:scale-[1.02]"
              />
              <h4 className="font-semibold mt-3">Performance Comercial — Vendas</h4>
              <p className="text-sm text-gray-600">
                KPIs de vendas, funil comercial, ticket médio, conversão por canal e evolução mensal.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition">
              <img
                src="/dashboard_marketing.png"
                alt="Dashboard de Marketing"
                className="object-cover w-full h-56 rounded-lg transition duration-300 hover:scale-[1.02]"
              />
              <h4 className="font-semibold mt-3">Marketing & Aquisição — Growth</h4>
              <p className="text-sm text-gray-600">
                Leads, CAC, ROI de campanhas, performance por canal e tendências de crescimento.
              </p>
            </div>
          </div>
        </section>

        {/* PRECOS */}
        <section id="precos" className="lg:col-span-2 mt-10">
          <h3 className="text-2xl font-bold mb-4">Preços</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <h4 className="font-semibold">Oferta Rápida</h4>
              <div className="text-2xl font-extrabold mt-2">R$ 199</div>
              <ul className="text-sm text-gray-600 mt-3 space-y-2">
                <li>• 1 página</li>
                <li>• 6–10 KPIs</li>
                <li>• Ajustes iniciais</li>
                <li>• Entrega em 5 dias úteis</li>
              </ul>
              <a
                href="#contato"
                className="mt-4 block text-center px-4 py-2 bg-yellow-300 rounded font-semibold hover:bg-yellow-200 transition"
              >
                Quero esse
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 border-2 border-yellow-300">
              <div className="text-xs font-semibold text-yellow-800 bg-yellow-100 inline-block px-2 py-1 rounded">
                Mais pedido
              </div>
              <h4 className="font-semibold mt-2">Profissional</h4>
              <div className="text-2xl font-extrabold mt-2">Sob proposta</div>
              <ul className="text-sm text-gray-600 mt-3 space-y-2">
                <li>• 2–4 páginas</li>
                <li>• Modelagem de métricas</li>
                <li>• Integrações (Sheets/BigQuery/APIs)</li>
                <li>• Documentação</li>
              </ul>
              <a
                href="#contato"
                className="mt-4 block text-center px-4 py-2 bg-yellow-400 rounded font-semibold shadow hover:bg-yellow-300 transition"
              >
                Solicitar proposta
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <h4 className="font-semibold">Acompanhamento</h4>
              <div className="text-2xl font-extrabold mt-2">Mensal</div>
              <ul className="text-sm text-gray-600 mt-3 space-y-2">
                <li>• Melhorias contínuas</li>
                <li>• Novos KPIs e páginas</li>
                <li>• Ajustes e suporte</li>
                <li>• Evolução do dashboard</li>
              </ul>
              <a
                href="#contato"
                className="mt-4 block text-center px-4 py-2 border rounded font-semibold hover:bg-gray-50 transition"
              >
                Falar sobre
              </a>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="lg:col-span-2 mt-10 mb-10">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">Contato</h3>
            <p className="text-sm text-gray-600 mb-4">
              Me diga sua fonte de dados (Sheets/BigQuery/API) e quais KPIs você quer acompanhar.
            </p>

            <div className="flex flex-col md:flex-row gap-3">
              <a
                className="px-5 py-3 bg-yellow-400 rounded font-semibold shadow hover:bg-yellow-300 transition text-center"
                href="https://wa.me/51995361291"
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>

              <a
                className="px-5 py-3 border rounded hover:bg-gray-50 transition text-center"
                href="mailto:gabrielcelio10@hotmail.com"
              >
                Enviar e-mail
              </a>
            </div>

            <p className="text-xs text-gray-600 mt-3">
              Dica: envie um print do seu painel atual (se tiver) e a lista de KPIs desejados.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-yellow-100 py-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} InsightDash • Consultoria em Looker Studio
      </footer>
    </div>
  );
}
