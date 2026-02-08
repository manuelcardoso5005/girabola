"use client";

import LayoutPage from "@/src/components/Layout/LayoutPage";
import ProximosJogos from "./components/NextGames";
import ClassificacaoCompacta from "./components/CompactClassification";
import EstatisticasCards from "./components/StatsCard";
import { objecto } from "@/src/data/data";
import Link from "next/link";
import GoalInvolvement from "./components/GoalInvolvement";

// Dados dos comunicados (os mesmos da página de comunicados)
const comunicadosRecentes = [
  {
    id: 3,
    titulo: "Designação de Árbitros para a Jornada 6",
    categoria: "arbitragem",
    data: "2026-02-26",
    destaque: true,
  },
  {
    id: 5,
    titulo: "Protocolo de Colaboração com a CAF",
    categoria: "oficial",
    data: "2026-02-05",
    destaque: true,
  },
  {
    id: 8,
    titulo: "Campanha de Fair Play e Respeito no Futebol",
    categoria: "geral",
    data: "2026-02-12",
    destaque: true,
  },
];

// Dados dos artilheiros (os mesmos da página de artilheiros)
const topArtilheiros = [
  {
    id: 1,
    player: "Tiago Azulão",
    club: 4,
    goals: 12,
    assists: 4,
    foto: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    player: "Show",
    club: 2,
    goals: 10,
    assists: 3,
    foto: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 3,
    player: "Zito Luvumbo",
    club: 1,
    goals: 8,
    assists: 2,
    foto: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 4,
    player: "Mabululu",
    club: 5,
    goals: 7,
    assists: 5,
    foto: "https://i.pravatar.cc/150?img=56",
  },
  {
    id: 5,
    player: "Gelson Dala",
    club: 8,
    goals: 6,
    assists: 3,
    foto: "https://i.pravatar.cc/150?img=68",
  },
];

export default function Overview() {
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, { nome: c.nome, logo: c.logo, stadium: c.stadium, city: c.city, shortName: c.shortName }])
  );

  const proximosJogos = objecto.calendar
    .flatMap((rodada) =>
      rodada.jogos.map((jogo) => ({
        ...jogo,
        jornada: rodada.jornada,
        casaNome: typeof jogo.casa === "number" ? clubeMap[jogo.casa].nome : jogo.casa,
        foraNome: typeof jogo.fora === "number" ? clubeMap[jogo.fora].nome : jogo.fora,
        casaLogo: typeof jogo.casa === "number" ? clubeMap[jogo.casa].logo : undefined,
        foraLogo: typeof jogo.fora === "number" ? clubeMap[jogo.fora].logo : undefined,
        estadio: typeof jogo.casa === "number" ? clubeMap[jogo.casa].stadium : "Estádio a definir",
      }))
    )
    .filter((j) => !j.resultado)
    .slice(0, 6);

  const top5Classificacao = objecto.standings.slice(0, 5);

  const getClubStats = (clubId: number) => objecto.clubStats.find((s) => s.club === clubId);
  const getClub = (clubId: number) => objecto.clubs.find((c) => c.id === clubId);

  const totalJogosRealizados = objecto.calendar.reduce((acc, rodada) => acc + rodada.jogos.filter(j => j.resultado).length, 0);
  const totalGolos = objecto.clubStats.reduce((acc, stat) => acc + (stat.goalsFor || 0), 0);

  const formatarDataCompacta = (dataStr: string) => {
    if (!dataStr) return "";
    const [ano, mes, dia] = dataStr.split("-").map(Number);
    const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const data = new Date(ano, mes - 1, dia);
    return `${diasSemana[data.getDay()]}, ${dia}/${mes.toString().padStart(2, "0")}`;
  };

  const formatarData = (dataStr: string) => {
    const [ano, mes, dia] = dataStr.split("-").map(Number);
    return `${dia}/${mes.toString().padStart(2, "0")}/${ano}`;
  };

  const getCategoriaInfo = (categoria: string) => {
    const categorias: Record<string, { icon: string; color: string }> = {
      oficial: { icon: "📢", color: "bg-blue-600" },
      disciplinar: { icon: "⚖️", color: "bg-red-600" },
      arbitragem: { icon: "🎽", color: "bg-yellow-600" },
      competicao: { icon: "🏆", color: "bg-green-600" },
      geral: { icon: "ℹ️", color: "bg-purple-600" },
    };
    return categorias[categoria] || categorias.geral;
  };

  return (
    <LayoutPage title="Vista Geral" subtitle="Resumo da competição">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUNA ESQUERDA - 2/3 */}
        <div className="lg:col-span-2 space-y-6">
          {/* Próximos Jogos */}
          <ProximosJogos proximosJogos={proximosJogos} formatarDataCompacta={formatarDataCompacta} />

          {/* Comunicados Recentes */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-linear-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📢</span>
                <h2 className="font-bold text-white text-lg">Comunicados Recentes</h2>
              </div>
              <Link 
                href="/comunicados"
                className="text-white text-sm hover:underline flex items-center gap-1"
              >
                Ver todos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="divide-y divide-gray-200">
              {comunicadosRecentes.map((comunicado) => {
                const catInfo = getCategoriaInfo(comunicado.categoria);
                return (
                  <Link
                    key={comunicado.id}
                    href="/comunicados"
                    className="block p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`${catInfo.color} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                        <span className="text-xl">{catInfo.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 line-clamp-2 flex-1">
                            {comunicado.titulo}
                          </h3>
                          {comunicado.destaque && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full shrink-0">
                              ⭐
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {formatarData(comunicado.data)}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="bg-gray-50 p-3 text-center">
              <Link 
                href="/comunicados"
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver todos os comunicados →
              </Link>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA - 1/3 */}
        <div className="space-y-6">
          <ClassificacaoCompacta top5={top5Classificacao} getClub={getClub} getClubStats={getClubStats} />
          <EstatisticasCards totalJogosRealizados={totalJogosRealizados} totalGolos={totalGolos} />
          <GoalInvolvement topArtilheiros={topArtilheiros} getClub={getClub} />
        </div>
      </div>
    </LayoutPage>
  );
}