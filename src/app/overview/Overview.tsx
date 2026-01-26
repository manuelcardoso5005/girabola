import { objecto } from "@/src/data/data";
import UltimoJogo from "./components/LastGame";
import ProximosJogos from "./components/NextGames";
import TabelaClassificacao from "./components/TableClassification";
import Artilharia from "./components/TopScore";
import LayoutPage from "@/src/components/LayoutPage";

export default function Overview() {
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, { nome: c.nome, logo: c.logo }])
  );

  const jogos = objecto.calendar.flatMap((rodada) =>
    rodada.jogos.map((j) => ({
      casa: typeof j.casa === "number" ? clubeMap[j.casa].nome : j.casa,
      fora: typeof j.fora === "number" ? clubeMap[j.fora].nome : j.fora,
      resultado: j.resultado,
      logoCasa: typeof j.casa === "number" ? clubeMap[j.casa].logo : undefined,
      logoFora: typeof j.fora === "number" ? clubeMap[j.fora].logo : undefined,
    }))
  );

  const ultimo = [...jogos].reverse().find(j => j.resultado && j.resultado !== "-");
  const proximos = jogos.filter(j => !j.resultado || j.resultado === "-").slice(0, 3);

  const tabela = objecto.standings.map(s => {
    const club = objecto.clubs.find(c => c.id === s.club || c.nome === s.club);
    return {
      posicao: s.position,
      nome: club?.nome || (s.club as string),
      pontos: s.points,
    };
  });

  const artilharia = objecto.topScorers.map(a => ({
    nome: typeof a.team === "number" ? clubeMap[a.team].nome : a.team,
    gols: a.goals,
  }));

  return (
    <LayoutPage title="Vista Geral" subtitle="Resumo dos jogos e classificação">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <UltimoJogo jogo={ultimo} />
            <ProximosJogos jogos={proximos} />
          </div>

          <div className="space-y-6">
            <TabelaClassificacao tabela={tabela} />
            <Artilharia artilharia={artilharia} />
          </div>
        </div>
    </LayoutPage>

  );
}
