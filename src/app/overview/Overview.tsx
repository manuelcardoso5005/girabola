"use client";

import Link from "next/link";
import { objecto } from "@/src/data/data";
import { ChevronRight, Calendar, Trophy, TrendingUp } from "lucide-react";
import LayoutPage from "@/src/components/LayoutPage";

export default function Overview() {
  // Map de clubes
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, { nome: c.nome, logo: c.logo, stadium: c.stadium, city: c.city }])
  );

  // Pegar próximos jogos (não realizados)
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

  // Função para formatar a data de forma compacta
  const formatarDataCompacta = (dataStr: string) => {
    if (!dataStr) return "";
    const [ano, mes, dia] = dataStr.split("-").map(Number);
    const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const data = new Date(ano, mes - 1, dia);
    return `${diasSemana[data.getDay()]}, ${dia}/${mes.toString().padStart(2, "0")}`;
  };

  // Top 5 da classificação
  const top5Classificacao = objecto.standings.slice(0, 5);

  // Função para pegar stats do clube
  const getClubStats = (clubId: number) => {
    return objecto.clubStats.find((s) => s.club === clubId);
  };

  // Função para pegar clube
  const getClub = (clubId: number) => {
    return objecto.clubs.find((c) => c.id === clubId);
  };

  // Calcular estatísticas gerais
  const totalJogosRealizados = objecto.calendar.reduce((acc, rodada) => {
    return acc + rodada.jogos.filter(j => j.resultado).length;
  }, 0);

  const totalGolos = objecto.clubStats.reduce((acc, stat) => acc + (stat.goalsFor || 0), 0);

  return (
    <LayoutPage title="Vista Geral" subtitle="Resumo da competição">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUNA ESQUERDA - Próximos Jogos (2/3 do espaço) */}
        <div className="lg:col-span-2 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-800">Jogos</h3>
            <Link 
              href="/jogos"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group"
            >
              <span>Ver todos os jogos</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid de Jogos Compacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proximosJogos.map((jogo) => (
              <div
                key={jogo.id}
                className="bg-white rounded-xl p-4 hover:shadow-lg transition-all shadow-md border border-slate-200"
              >
                {/* Jogo Casa */}
                <div className="flex items-center gap-3 mb-3">
                  {jogo.casaLogo && (
                    <div className="bg-slate-100 p-1.5 rounded-lg border border-slate-200 shadow-sm">
                      <img src={jogo.casaLogo} alt={jogo.casaNome} className="w-7 h-7 object-contain" />
                    </div>
                  )}
                  <span className="text-slate-800 font-bold text-sm flex-1 truncate">
                    {jogo.casaNome}
                  </span>
                </div>

                {/* Jogo Fora */}
                <div className="flex items-center gap-3 mb-4">
                  {jogo.foraLogo && (
                    <div className="bg-slate-100 p-1.5 rounded-lg border border-slate-200 shadow-sm">
                      <img src={jogo.foraLogo} alt={jogo.foraNome} className="w-7 h-7 object-contain" />
                    </div>
                  )}
                  <span className="text-slate-800 font-bold text-sm flex-1 truncate">
                    {jogo.foraNome}
                  </span>
                </div>

                {/* Data e Hora */}
                <div className="flex items-center justify-between">
                  <div className="text-slate-600 text-xs font-semibold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                    {formatarDataCompacta(jogo.data || "")}
                  </div>
                  {jogo.hora && (
                    <div className="text-slate-800 text-sm font-bold bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                      {jogo.hora}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer com Links */}
          <div className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">
                Todas as horas em <span className="font-bold text-slate-800">WAT</span>
              </span>
            </div>
            
            <div className="h-8 w-px bg-slate-200"></div>
            
            <Link
              href="/calendario"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group"
            >
              <span>Calendário completo</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* COLUNA DIREITA - Classificação + Stats (1/3 do espaço) */}
        
        <div className="space-y-4">
           {/* Header da Classificação */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Classificação</h3>
            <Link href="/classificacao" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group">
              <span>Ver completa</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          {/* Classificação */}
          <div className="bg-white rounded-xl p-5 shadow-md border border-slate-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              {/* Subtitle */}
              <div className="mb-4 pb-3 border-b border-slate-100">
                <p className="text-slate-500 text-xs font-medium">
                  {objecto.competicao[0].nome} {objecto.epoca}
                </p>
              </div>
              <Link href="/classificacao" className="group">
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-800 transition group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Tabela Compacta */}
            <div className="space-y-1">
              {/* Header da Tabela */}
              <div className="grid grid-cols-12 gap-2 text-slate-500 text-xs font-semibold pb-2 border-b border-slate-200">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-5">Clube</div>
                <div className="col-span-1 text-center">PD</div>
                <div className="col-span-1 text-center">V</div>
                <div className="col-span-1 text-center">E</div>
                <div className="col-span-1 text-center">D</div>
                <div className="col-span-1 text-center">DG</div>
                <div className="col-span-1 text-center">Pts</div>
              </div>

              {/* Linhas da Tabela */}
              {top5Classificacao.map((time) => {
                const club = getClub(time.club);
                const stats = getClubStats(time.club);
                const championsPositions = objecto.internationalCompetitions.find(
                  (c) => c.name === "Liga dos Campeões"
                )?.qualificationPositions ?? [];
                const cafPositions = objecto.internationalCompetitions.find(
                  (c) => c.name === "Taça CAF"
                )?.qualificationPositions ?? [];

                const isChampions = championsPositions.includes(time.position);
                const isCAF = cafPositions.includes(time.position);

                return (
                  <div
                    key={time.club}
                    className="grid grid-cols-12 gap-2 text-slate-800 text-sm py-2.5 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {/* Posição */}
                    <div className="col-span-1 flex items-center justify-center">
                      <span
                        className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold shadow-sm ${
                          isChampions
                            ? "bg-blue-500 text-white"
                            : isCAF
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {time.position}
                      </span>
                    </div>

                    {/* Logo + Nome */}
                    <div className="col-span-5 flex items-center gap-2">
                      <img
                        src={club?.logo}
                        alt={club?.nome}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="font-semibold text-xs truncate text-slate-800">
                        {club?.nome}
                      </span>
                    </div>

                    {/* PD */}
                    <div className="col-span-1 text-center text-xs text-slate-600 font-medium">
                      {time.wins + time.draws + time.losses}
                    </div>

                    {/* V */}
                    <div className="col-span-1 text-center text-xs font-bold text-emerald-600">
                      {time.wins}
                    </div>

                    {/* E */}
                    <div className="col-span-1 text-center text-xs text-slate-600 font-medium">
                      {time.draws}
                    </div>

                    {/* D */}
                    <div className="col-span-1 text-center text-xs font-bold text-red-600">
                      {time.losses}
                    </div>

                    {/* DG */}
                    <div className={`col-span-1 text-center text-xs font-bold ${
                      (stats?.goalDifference ?? 0) > 0 
                        ? "text-emerald-600" 
                        : (stats?.goalDifference ?? 0) < 0 
                        ? "text-red-600" 
                        : "text-slate-600"
                    }`}>
                      {(stats?.goalDifference ?? 0) > 0 ? "+" : ""}
                      {stats?.goalDifference ?? 0}
                    </div>

                    {/* Pts */}
                    <div className="col-span-1 text-center text-xs font-bold text-slate-800">
                      {time.points}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-2 gap-3">
            {/* Jornada Atual */}
            <Link href="/calendario" className="block group">
              <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-blue-50" />
                  <span className="text-blue-50 text-xs font-semibold uppercase tracking-wide">Jornada</span>
                </div>
                <div className="text-white text-3xl font-black">{objecto.jornadaAtual}</div>
                <div className="text-blue-100 text-xs mt-1 font-medium">de {objecto.totalJornadas}</div>
              </div>
            </Link>

            {/* Jogos Realizados */}
            <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-emerald-50" />
                <span className="text-emerald-50 text-xs font-semibold uppercase tracking-wide">Jogos</span>
              </div>
              <div className="text-white text-3xl font-black">{totalJogosRealizados}</div>
              <div className="text-emerald-100 text-xs mt-1 font-medium">realizados</div>
            </div>
          </div>

          {/* Golos Totais */}
          <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-orange-50" />
                  <span className="text-orange-50 text-xs font-semibold uppercase tracking-wide">Golos</span>
                </div>
                <div className="text-white text-4xl font-black">{totalGolos}</div>
                <div className="text-orange-100 text-xs mt-1 font-medium">
                  Média: {(totalGolos / Math.max(totalJogosRealizados, 1)).toFixed(1)} por jogo
                </div>
              </div>
              <div className="text-white/20 text-6xl font-black">⚽</div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}