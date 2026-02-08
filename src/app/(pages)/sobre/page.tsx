import LayoutPage from "@/src/components/Layout/LayoutPage";
import { objecto } from "@/src/data/data";

export default function Sobre() {
  const competicao = objecto.competicao[0];

  return (
    <LayoutPage 
      title="Sobre o Girabola" 
      subtitle="A maior competição de futebol de Angola"
    >
      <div className="space-y-8">
        {/* Header com Logo */}
        <div className="bg-linear-to-br from-red-600 to-yellow-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white rounded-full p-6 shadow-2xl">
              <img 
                src={competicao.logotipo} 
                alt={competicao.nome}
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                {competicao.nome}
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-2">
                Campeonato Nacional de Futebol
              </p>
              <p className="text-lg opacity-80">
                {competicao.pais} • Nível {competicao.nivel}
              </p>
            </div>
          </div>
        </div>

        {/* História */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-red-600 rounded-full"></span>
            História do Girabola
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              O <strong>Girabola</strong>, oficialmente conhecido como Campeonato Nacional de Futebol da 1ª Divisão, 
              é a principal competição de futebol de Angola. Organizado pela Federação Angolana de Futebol (FAF), 
              o Girabola reúne os melhores clubes do país numa disputa emocionante pelo título de campeão nacional.
            </p>
            <p>
              Fundado em <strong>1979</strong>, logo após a independência de Angola, o Girabola tornou-se rapidamente 
              no palco principal do futebol angolano, revelando grandes talentos que brilharam tanto a nível nacional 
              como internacional.
            </p>
            <p>
              O nome "Girabola" é uma homenagem à fauna angolana, sendo inspirado na palavra Kimbundu que significa 
              "palanca-negra gigante", um antílope endémico de Angola e símbolo nacional do país.
            </p>
          </div>
        </div>

        {/* Formato da Competição */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-yellow-500 rounded-full"></span>
            Formato da Competição
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Clubes Participantes</h4>
              </div>
              <p className="text-gray-700">
                <strong className="text-2xl text-red-600">{objecto.totalClubes}</strong> clubes competem 
                anualmente pelo título de campeão nacional.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Sistema de Jogo</h4>
              </div>
              <p className="text-gray-700">
                Sistema de pontos corridos com jogos de ida e volta, totalizando <strong>30 jornadas</strong> por época.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Qualificação Continental</h4>
              </div>
              <p className="text-gray-700">
                Os primeiros classificados garantem vaga nas competições africanas (CAF Champions League e CAF Confederation Cup).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Descida de Divisão</h4>
              </div>
              <p className="text-gray-700">
                Os últimos classificados descem à Segunda Divisão Nacional, sendo substituídos pelos promovidos.
              </p>
            </div>
          </div>
        </div>

        {/* Época Atual */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-green-600 rounded-full"></span>
            Época Atual
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg p-5 text-center">
              <p className="text-sm text-gray-600 mb-1">Temporada</p>
              <p className="text-3xl font-bold text-blue-900">{objecto.epoca}</p>
            </div>
            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-5 text-center">
              <p className="text-sm text-gray-600 mb-1">Jornada Atual</p>
              <p className="text-3xl font-bold text-green-900">{objecto.jornadaAtual}/{objecto.totalJornadas}</p>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-lg p-5 text-center">
              <p className="text-sm text-gray-600 mb-1">Clubes</p>
              <p className="text-3xl font-bold text-purple-900">{objecto.totalClubes}</p>
            </div>
          </div>
        </div>

        {/* Sobre a Aplicação */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            Sobre Esta Aplicação
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Esta plataforma foi desenvolvida para proporcionar aos adeptos do futebol angolano uma experiência 
              completa e atualizada sobre o Girabola. Aqui você encontra:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                { icon: "📊", text: "Classificação em tempo real" },
                { icon: "⚽", text: "Resultados e calendário de jogos" },
                { icon: "🏆", text: "Estatísticas detalhadas dos clubes" },
                { icon: "👕", text: "Informações completas sobre cada equipa" },
                { icon: "📈", text: "Artilheiros e melhores marcadores" },
                { icon: "🎯", text: "Histórico de épocas anteriores" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="font-medium text-gray-900">{item.text}</span>
                </div>
              ))}
            </div>
            <p>
              Nosso objetivo é ser a principal referência digital para acompanhar o Girabola, oferecendo 
              informações precisas e uma navegação intuitiva para todos os apaixonados pelo futebol angolano.
            </p>
          </div>
        </div>

        {/* Contacto/Footer Info */}
        <div className="bg-linear-to-r from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 text-white text-center">
          <p className="text-lg mb-2">
            <strong>Organizado por:</strong> {competicao.organizador}
          </p>
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Girabola. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </LayoutPage>
  );
}