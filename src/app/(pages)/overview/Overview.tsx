"use client";

import LayoutPage from "@/src/components/Layout/LayoutPage";
import ProximosJogos from "./components/NextGames";
import ClassificacaoCompacta from "./components/CompactClassification";
import EstatisticasCards from "./components/StatsCard";
import { objecto } from "@/src/data/data";

export default function Overview() {
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, { nome: c.nome, logo: c.logo, stadium: c.stadium, city: c.city }])
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

  return (
    <LayoutPage title="Vista Geral" subtitle="Resumo da competição">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUNA ESQUERDA */}
        <div className="lg:col-span-2 space-y-4">
          <ProximosJogos proximosJogos={proximosJogos} formatarDataCompacta={formatarDataCompacta} />
        </div>

        {/* COLUNA DIREITA */}
        <div className="space-y-4">
          <ClassificacaoCompacta top5={top5Classificacao} getClub={getClub} getClubStats={getClubStats} />
          <EstatisticasCards totalJogosRealizados={totalJogosRealizados} totalGolos={totalGolos} />
        </div>
      </div>
    </LayoutPage>
  );
}
