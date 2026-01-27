import { objecto } from "@/src/data/data";

interface TabelaClassificacaoProps {
  standings: typeof objecto.standings;
  clubStats: typeof objecto.clubStats;
  clubs: typeof objecto.clubs;
  getUltimosResultados: (clubId: number) => ("W" | "D" | "L")[];
}

export default function TabelaClassificacao({
  standings,
  clubStats,
  clubs,
  getUltimosResultados,
}: TabelaClassificacaoProps) {

  const championsPositions =
    objecto.internationalCompetitions.find(
      c => c.name === "Liga dos Campeões"
    )?.qualificationPositions ?? [];

  const cafPositions =
    objecto.internationalCompetitions.find(
      c => c.name === "Taça CAF"
    )?.qualificationPositions ?? [];

  function getClub(clubId: number) {
    return clubs.find(c => c.id === clubId);
  }

  function getStats(clubId: number) {
    return clubStats.find(c => c.club === clubId);
  }

  const legendItems = [
    ...objecto.internationalCompetitions.map(comp => ({
      name: comp.name,
      color:
        comp.name === "Liga dos Campeões"
          ? "bg-blue-600"
          : comp.name === "Taça CAF"
          ? "bg-emerald-600"
          : "bg-gray-500",
    })),
    {
      name: "Zona de Despromoção",
      color: "bg-red-600",
    },
  ];


  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Cabeçalho da Tabela */}
      <div className="bg-linear-to-r from-slate-800 to-slate-700 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Classificação</h2>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100 border-b-2 border-slate-200">
              <th className="p-3 text-sm font-semibold text-slate-700 text-center">#</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-left">Equipa</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Jogos">J</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Vitórias">V</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Empates">E</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Derrotas">D</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Golos Marcados">GM</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Golos Sofridos">GS</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Saldo de Golos">SG</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center">Pts</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center">Forma</th>
            </tr>
          </thead>

          <tbody>
            {standings.map((time, index) => {
              const club = getClub(time.club as number);
              const stats = getStats(time.club as number);

              const isChampions = championsPositions.includes(time.position);
              const isCAF = cafPositions.includes(time.position);
              const relegationPositions = objecto.relegation.positions;
              const isRelegated = relegationPositions.includes(time.position);

              return (
                <tr
                  key={time.club}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    isChampions
                      ? "bg-blue-300/20 hover:bg-blue-50"
                      : isCAF
                      ? "bg-emerald-300/20 hover:bg-emerald-50"
                      : isRelegated
                      ? "bg-red-300/20 hover:bg-red-50"
                      : ""
                  }`}
                >
                  {/* POSIÇÃO */}
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center">
                      <span
                        className={`w-7 h-7 flex items-center justify-center rounded-md font-bold text-sm ${
                          isChampions
                            ? "bg-blue-600 text-white"
                            : isCAF
                            ? "bg-emerald-600 text-white"
                            : isRelegated
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {time.position}
                      </span>
                    </div>
                  </td>

                  {/* CLUBE */}
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={club?.logo}
                        className="w-8 h-8 object-contain"
                        alt={club?.nome}
                      />
                      <span className="font-semibold text-gray-800 text-sm">
                        {club?.nome}
                      </span>
                    </div>
                  </td>

                  {/* Estatísticas */}
                  <td className="p-3 text-center text-gray-700 text-sm font-medium">
                    {time.wins + time.draws + time.losses}
                  </td>

                  <td className="p-3 text-center text-green-700 text-sm font-semibold">
                    {time.wins}
                  </td>

                  <td className="p-3 text-center text-gray-600 text-sm font-medium">
                    {time.draws}
                  </td>

                  <td className="p-3 text-center text-red-600 text-sm font-semibold">
                    {time.losses}
                  </td>

                  <td className="p-3 text-center text-gray-700 text-sm font-medium">
                    {stats?.goalsFor ?? 0}
                  </td>

                  <td className="p-3 text-center text-gray-700 text-sm font-medium">
                    {stats?.goalsAgainst ?? 0}
                  </td>

                  <td className="p-3 text-center">
                    <span
                      className={`font-bold text-sm ${
                        (stats?.goalDifference ?? 0) > 0
                          ? "text-green-700"
                          : (stats?.goalDifference ?? 0) < 0
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {(stats?.goalDifference ?? 0) > 0 ? "+" : ""}
                      {stats?.goalDifference ?? 0}
                    </span>
                  </td>

                  <td className="p-3 text-center">
                    <span className="font-bold text-slate-800 text-base">
                      {time.points}
                    </span>
                  </td>

                  {/* ÚLTIMOS 5 RESULTADOS */}
                  <td className="p-3">
                    <div className="flex gap-1 justify-center">
                      {getUltimosResultados(time.club as number)
                        .slice(-5)
                        .map((r, i) => (
                          <span
                            key={i}
                            className={`w-7 h-7 flex items-center justify-center rounded-md text-white text-xs font-bold shadow-sm ${
                              r === "W"
                                ? "bg-green-600"
                                : r === "D"
                                ? "bg-gray-500"
                                : "bg-red-600"
                            }`}
                            title={
                              r === "W"
                                ? "Vitória"
                                : r === "D"
                                ? "Empate"
                                : "Derrota"
                            }
                          >
                            {r === "W" ? "V" : r === "D" ? "E" : "D"}
                          </span>
                        ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legenda */}   
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-6 text-sm">
          {legendItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`w-4 h-4 rounded ${item.color}`}></span>
              <span className="text-gray-700">{item.name}</span>
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
}