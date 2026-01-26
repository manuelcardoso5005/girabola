import { temporada } from "@/src/data/data";

interface Jogo {
  casa: string;
  fora: string;
  resultado?: string;
  logoCasa?: string;
  logoFora?: string;
}

interface Time {
  posicao: number;
  nome: string;
  pontos: number;
}

interface Artilheiro {
  nome: string;
  gols: number;
}

export default function Overview() {
  // cria map de id -> nome e logo do clube
  const clubeMap = Object.fromEntries(
    temporada.clubs.map((c) => [c.id, { nome: c.nome, logo: c.logo }])
  );

  // transforma todas as rodadas em uma lista única de jogos
  const jogos: Jogo[] = temporada.calendar.flatMap((rodada) =>
    rodada.jogos.map((j) => ({
      casa: typeof j.casa === "number" ? clubeMap[j.casa].nome : j.casa,
      fora: typeof j.fora === "number" ? clubeMap[j.fora].nome : j.fora,
      resultado: j.resultado || "-",
      logoCasa: typeof j.casa === "number" ? clubeMap[j.casa].logo : undefined,
      logoFora: typeof j.fora === "number" ? clubeMap[j.fora].logo : undefined,
    }))
  );

  // separa último jogo jogado do restante
  const ultimo: Jogo | undefined = [...jogos].reverse().find((j) => j.resultado !== "-");
  const proximos = jogos.filter((j) => j.resultado === "-" || j === ultimo);

  // tabela baseada em standings
  const tabela: Time[] = temporada.standings.map((s) => {
    const club = temporada.clubs.find((c) =>
      c.id === s.club || c.nome === s.club
    );
    return {
      posicao: s.position,
      nome: club?.nome || (s.club as string),
      pontos: s.points,
    };
  });

  // top scorers
  const artilharia: Artilheiro[] = temporada.topScorers.map((a) => ({
    nome: typeof a.team === "number" ? clubeMap[a.team].nome : a.team,
    gols: a.goals,
  }));

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Coluna esquerda - Último e próximos jogos */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Último jogo</h2>
          {ultimo ? (
            <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm mb-4">
              <div className="flex items-center gap-2">
                <img src={ultimo.logoCasa} alt={ultimo.casa} className="w-8 h-8 object-contain" />
                <span className="font-medium">{ultimo.casa}</span>
              </div>
              <div className="text-lg font-bold">{ultimo.resultado}</div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{ultimo.fora}</span>
                <img src={ultimo.logoFora} alt={ultimo.fora} className="w-8 h-8 object-contain" />
              </div>
            </div>
          ) : (
            <p>Nenhum jogo realizado ainda</p>
          )}

          <h2 className="text-xl font-semibold mb-2">Próximos jogos</h2>
          <div className="space-y-2">
            {proximos.map((j, i) => (
              <div key={i} className="flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-lg shadow-sm">
                <div className="flex items-center gap-2">
                  <img src={j.logoCasa} alt={j.casa} className="w-6 h-6 object-contain" />
                  <span className="font-medium">{j.casa}</span>
                </div>
                <div className="text-md font-bold">{j.resultado}</div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{j.fora}</span>
                  <img src={j.logoFora} alt={j.fora} className="w-6 h-6 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna direita - Tabela e Artilharia */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Tabela</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="pb-2">#</th>
                  <th className="pb-2">Time</th>
                  <th className="pb-2">Pts</th>
                </tr>
              </thead>
              <tbody>
                {tabela.map((time) => (
                  <tr key={time.posicao} className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-1">{time.posicao}</td>
                    <td className="py-1">{time.nome}</td>
                    <td className="py-1">{time.pontos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Artilharia</h2>
            <ul className="space-y-2">
              {artilharia.length > 0 ? (
                artilharia.map((j, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{j.nome}</span>
                    <span className="font-semibold">{j.gols} gols</span>
                  </li>
                ))
              ) : (
                <li>Nenhum gol marcado ainda</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
