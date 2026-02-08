"use client";

import { objecto } from "@/src/data/data";
import LayoutPage from "@/src/components/Layout/LayoutPage";
import { useState } from "react";

export default function StatisticsPage() {
  const [activeTab, setActiveTab] = useState<"geral" | "clubes" | "jogos">("geral");

  // Calcular estatísticas gerais
  const totalJogos = objecto.calendar
    .filter(j => j.jornada <= objecto.jornadaAtual)
    .reduce((acc, jornada) => acc + jornada.jogos.length, 0);

  const jogosComResultado = objecto.calendar
    .filter(j => j.jornada <= objecto.jornadaAtual)
    .flatMap(j => j.jogos)
    .filter(jogo => jogo.resultado);

  const totalGolos = jogosComResultado.reduce((acc, jogo) => {
    if (jogo.resultado) {
      const [golsCasa, golosFora] = jogo.resultado.split(" - ").map(Number);
      return acc + golsCasa + golosFora;
    }
    return acc;
  }, 0);

  const mediaGolsPorJogo = jogosComResultado.length > 0 
    ? (totalGolos / jogosComResultado.length).toFixed(2) 
    : "0.00";

  const empates = jogosComResultado.filter(jogo => {
    if (jogo.resultado) {
      const [golsCasa, golosFora] = jogo.resultado.split(" - ").map(Number);
      return golsCasa === golosFora;
    }
    return false;
  }).length;

  const vitoriasEmCasa = jogosComResultado.filter(jogo => {
    if (jogo.resultado) {
      const [golsCasa, golosFora] = jogo.resultado.split(" - ").map(Number);
      return golsCasa > golosFora;
    }
    return false;
  }).length;

  const vitoriasFora = jogosComResultado.filter(jogo => {
    if (jogo.resultado) {
      const [golsCasa, golosFora] = jogo.resultado.split(" - ").map(Number);
      return golosFora > golsCasa;
    }
    return false;
  }).length;

  // Público total e média
  const publicoTotal = jogosComResultado.reduce((acc, jogo) => {
    if (jogo.publico) {
      return acc + parseInt(String(jogo.publico).replace(/\./g, ""));
    }
    return acc;
  }, 0);

  const mediaPublico = jogosComResultado.length > 0 
    ? Math.round(publicoTotal / jogosComResultado.length)
    : 0;

  // Maior público
  const jogoMaiorPublico = jogosComResultado.reduce((max, jogo) => {
    const publicoAtual = jogo.publico ? parseInt(String(jogo.publico).replace(/\./g, "")) : 0;
    const publicoMax = max.publico ? parseInt(String(max.publico).replace(/\./g, "")) : 0;
    return publicoAtual > publicoMax ? jogo : max;
  }, jogosComResultado[0]);

  // Estatísticas por clube
  const clubesStats = objecto.clubStats
    .map(stat => {
      const clube = objecto.clubs.find(c => c.id === stat.club);
      return { ...stat, clube };
    })
    .sort((a, b) => b.points - a.points);

  // Melhor ataque e defesa
  const melhorAtaque = [...clubesStats].sort((a, b) => b.goalsFor - a.goalsFor)[0];
  const melhorDefesa = [...clubesStats].sort((a, b) => a.goalsAgainst - b.goalsAgainst)[0];
  const piorAtaque = [...clubesStats].sort((a, b) => a.goalsFor - b.goalsFor)[0];
  const piorDefesa = [...clubesStats].sort((a, b) => b.goalsAgainst - a.goalsAgainst)[0];

  // Jogos com mais golos
  const jogosMaisGolos = jogosComResultado
    .map(jogo => {
      if (jogo.resultado) {
        const [golsCasa, golosFora] = jogo.resultado.split(" - ").map(Number);
        const clubeCasa = objecto.clubs.find(c => c.id === jogo.casa);
        const clubeFora = objecto.clubs.find(c => c.id === jogo.fora);
        return {
          ...jogo,
          totalGolos: golsCasa + golosFora,
          clubeCasa,
          clubeFora,
          golsCasa,
          golosFora
        };
      }
      return null;
    })
    .filter(Boolean)
    .sort((a, b) => (b?.totalGolos || 0) - (a?.totalGolos || 0))
    .slice(0, 5);

  return (
    <LayoutPage
      title="Estatísticas"
      subtitle={`Época ${objecto.epoca} - Dados atualizados até à jornada ${objecto.jornadaAtual}`}
    >
      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {[
          { id: "geral", label: "Estatísticas Gerais", icon: "📊" },
          { id: "clubes", label: "Estatísticas por Clube", icon: "🏆" },
          { id: "jogos", label: "Análise de Jogos", icon: "⚽" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-red-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Estatísticas Gerais */}
      {activeTab === "geral" && (
        <div className="space-y-6">
          {/* Cards Principais */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              label="Total de Jogos"
              value={totalJogos}
              icon="🎮"
              color="bg-blue-500"
            />
            <StatCard
              label="Total de Golos"
              value={totalGolos}
              icon="⚽"
              color="bg-green-500"
            />
            <StatCard
              label="Média Golos/Jogo"
              value={mediaGolsPorJogo}
              icon="📈"
              color="bg-purple-500"
            />
            <StatCard
              label="Total de Clubes"
              value={objecto.totalClubes}
              icon="🏟️"
              color="bg-orange-500"
            />
          </div>

          {/* Resultados */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Distribuição de Resultados</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <ResultCard
                label="Vitórias em Casa"
                value={vitoriasEmCasa}
                total={jogosComResultado.length}
                color="bg-green-500"
              />
              <ResultCard
                label="Empates"
                value={empates}
                total={jogosComResultado.length}
                color="bg-yellow-500"
              />
              <ResultCard
                label="Vitórias Fora"
                value={vitoriasFora}
                total={jogosComResultado.length}
                color="bg-blue-500"
              />
            </div>
          </div>

          {/* Público */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Estatísticas de Público</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Público Total</p>
                <p className="text-3xl font-bold text-gray-900">
                  {publicoTotal.toLocaleString('pt-PT')}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Média por Jogo</p>
                <p className="text-3xl font-bold text-gray-900">
                  {mediaPublico.toLocaleString('pt-PT')}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Maior Público</p>
                <p className="text-3xl font-bold text-gray-900">
                  {jogoMaiorPublico?.publico || "N/A"}
                </p>
                {jogoMaiorPublico && (
                  <p className="text-xs text-gray-500 mt-1">
                    {objecto.clubs.find(c => c.id === jogoMaiorPublico.casa)?.shortName} vs{" "}
                    {objecto.clubs.find(c => c.id === jogoMaiorPublico.fora)?.shortName}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estatísticas por Clube */}
      {activeTab === "clubes" && (
        <div className="space-y-6">
          {/* Destaques */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <HighlightCard
              title="Melhor Ataque"
              clube={melhorAtaque.clube}
              value={`${melhorAtaque.goalsFor} golos`}
              type="success"
            />
            <HighlightCard
              title="Melhor Defesa"
              clube={melhorDefesa.clube}
              value={`${melhorDefesa.goalsAgainst} golos sofridos`}
              type="success"
            />
            <HighlightCard
              title="Pior Ataque"
              clube={piorAtaque.clube}
              value={`${piorAtaque.goalsFor} golos`}
              type="danger"
            />
            <HighlightCard
              title="Pior Defesa"
              clube={piorDefesa.clube}
              value={`${piorDefesa.goalsAgainst} golos sofridos`}
              type="danger"
            />
          </div>

          {/* Tabela Completa */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Clube
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      J
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      V
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      E
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      D
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      GM
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      GS
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      SG
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      PTS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {clubesStats.map((stat, idx) => (
                    <tr key={stat.club} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-500 w-6">
                            {idx + 1}
                          </span>
                          <img
                            src={stat.clube?.logo}
                            alt={stat.clube?.nome}
                            className="w-8 h-8 object-contain"
                          />
                          <span className="font-semibold text-gray-900">
                            {stat.clube?.shortName}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">
                        {stat.jogos}
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-medium text-green-600">
                        {stat.wins}
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-medium text-yellow-600">
                        {stat.draws}
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-medium text-red-600">
                        {stat.losses}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">
                        {stat.goalsFor}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">
                        {stat.goalsAgainst}
                      </td>
                      <td className={`px-6 py-4 text-center text-sm font-medium ${
                        stat.goalDifference > 0 ? "text-green-600" :
                        stat.goalDifference < 0 ? "text-red-600" : "text-gray-700"
                      }`}>
                        {stat.goalDifference > 0 ? "+" : ""}{stat.goalDifference}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-800 font-bold rounded-lg">
                          {stat.points}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Análise de Jogos */}
      {activeTab === "jogos" && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Jogos com Mais Golos
            </h3>
            <div className="space-y-4">
              {jogosMaisGolos.map((jogo, idx) => (
                <div
                  key={jogo?.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-2xl font-bold text-gray-400 w-8">
                      #{idx + 1}
                    </span>
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex items-center gap-2 flex-1 justify-end">
                        <span className="font-semibold text-gray-900">
                          {jogo?.clubeCasa?.nome}
                        </span>
                        <img
                          src={jogo?.clubeCasa?.logo}
                          alt={jogo?.clubeCasa?.nome}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="px-4 py-2 bg-white rounded-lg shadow-sm min-w-25 text-center">
                        <span className="text-2xl font-bold text-gray-900">
                          {jogo?.golsCasa} - {jogo?.golosFora}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <img
                          src={jogo?.clubeFora?.logo}
                          alt={jogo?.clubeFora?.nome}
                          className="w-10 h-10 object-contain"
                        />
                        <span className="font-semibold text-gray-900">
                          {jogo?.clubeFora?.nome}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                      {jogo?.totalGolos} golos
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      Jornada {objecto.calendar.find(j => 
                        j.jogos.some(g => g.id === jogo?.id)
                      )?.jornada}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outras estatísticas de jogos podem ser adicionadas aqui */}
        </div>
      )}
    </LayoutPage>
  );
}

// Componentes auxiliares
function StatCard({ label, value, icon, color }: any) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl">{icon}</span>
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white text-xl font-bold`}>
          {typeof value === 'string' && value.includes('.') ? value.split('.')[0] : value}
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-3">{label}</p>
    </div>
  );
}

function ResultCard({ label, value, total, color }: any) {
  const percentage = ((value / total) * 100).toFixed(1);
  return (
    <div className="text-center">
      <div className="mb-3">
        <div className={`inline-flex items-center justify-center w-16 h-16 ${color} rounded-full text-white text-2xl font-bold`}>
          {value}
        </div>
      </div>
      <p className="font-semibold text-gray-900 mb-1">{label}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-600">{percentage}%</p>
    </div>
  );
}

function HighlightCard({ title, clube, value, type }: any) {
  const colors = type === "success" 
    ? "bg-green-50 border-green-200 text-green-800"
    : "bg-red-50 border-red-200 text-red-800";

  return (
    <div className={`rounded-xl p-5 border-2 ${colors}`}>
      <p className="text-xs font-semibold uppercase mb-3 opacity-75">{title}</p>
      <div className="flex items-center gap-3 mb-2">
        <img
          src={clube?.logo}
          alt={clube?.nome}
          className="w-12 h-12 object-contain"
        />
        <div>
          <p className="font-bold text-lg">{clube?.shortName}</p>
          <p className="text-sm opacity-75">{value}</p>
        </div>
      </div>
    </div>
  );
}