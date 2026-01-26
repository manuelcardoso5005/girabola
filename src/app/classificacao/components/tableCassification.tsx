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
  function getClubLogoAndName(clubId: number) {
    const club = clubs.find(c => c.id === clubId);
    if (!club) return { logo: "", nome: "Desconhecido" };
    return { logo: club.logo, nome: club.nome };
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-linear-to-r from-slate-700 to-slate-800 text-white">
              <th className="p-4 text-left font-semibold">#</th>
              <th className="p-4 text-left font-semibold">Equipa</th>
              <th className="p-4 text-center font-semibold">J</th>
              <th className="p-4 text-center font-semibold">V</th>
              <th className="p-4 text-center font-semibold">E</th>
              <th className="p-4 text-center font-semibold">D</th>
              <th className="p-4 text-center font-semibold">GM</th>
              <th className="p-4 text-center font-semibold">GS</th>
              <th className="p-4 text-center font-semibold">SG</th>
              <th className="p-4 text-center font-semibold">Pts</th>
              <th className="p-4 text-center font-semibold">Últimos 5</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((time) => {
              const isTop2 = time.position <= 2;
              const isRelegated = time.relegated;

              return (
                <tr
                  key={time.club}
                  className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                    isTop2 ? "bg-emerald-50" : isRelegated ? "bg-red-50" : ""
                  }`}
                >
                  {/* Posição */}
                  <td className="p-4">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                        isTop2
                          ? "bg-emerald-500 text-white"
                          : isRelegated
                          ? "bg-red-500 text-white"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {time.position}
                    </div>
                  </td>

                  {/* Clube */}
                  <td className="p-4 flex items-center gap-2">
                    {(() => {
                      const { logo, nome } = getClubLogoAndName(time.club as number);
                      return (
                        <>
                          <img
                            src={logo}
                            alt={nome}
                            className="w-6 h-6 object-contain rounded-full"
                          />
                          <span className="font-semibold text-slate-800">{nome}</span>
                        </>
                      );
                    })()}
                  </td>

                  {/* Jogos */}
                  <td className="p-4 text-center text-slate-600">
                    {time.wins + time.draws + time.losses}
                  </td>

                  {/* Vitórias */}
                  <td className="p-4 text-center">
                    <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded font-semibold text-sm">
                      {time.wins}
                    </span>
                  </td>

                  {/* Empates */}
                  <td className="p-4 text-center">
                    <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-semibold text-sm">
                      {time.draws}
                    </span>
                  </td>

                  {/* Derrotas */}
                  <td className="p-4 text-center">
                    <span className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded font-semibold text-sm">
                      {time.losses}
                    </span>
                  </td>

                  {/* GM */}
                  <td className="p-4 text-center font-medium text-slate-700">
                    {clubStats.find((c) => c.club === time.club)?.goalsFor || 0}
                  </td>

                  {/* GS */}
                  <td className="p-4 text-center font-medium text-slate-700">
                    {clubStats.find((c) => c.club === time.club)?.goalsAgainst || 0}
                  </td>

                  {/* SG */}
                  <td className="p-4 text-center">
                    <span
                      className={`font-semibold ${
                        (clubStats.find((c) => c.club === time.club)?.goalDifference || 0) > 0
                          ? "text-green-600"
                          : (clubStats.find((c) => c.club === time.club)?.goalDifference || 0) < 0
                          ? "text-red-600"
                          : "text-slate-600"
                      }`}
                    >
                      {(clubStats.find((c) => c.club === time.club)?.goalDifference || 0) > 0
                        ? "+"
                        : ""}
                      {clubStats.find((c) => c.club === time.club)?.goalDifference || 0}
                    </span>
                  </td>

                  {/* Pontos */}
                  <td className="p-4 text-center">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-lg font-bold">
                      {time.points}
                    </span>
                  </td>

                  {/* Últimos 5 */}
                  <td className="p-4">
                    <div className="flex gap-1.5 justify-center">
                      {getUltimosResultados(Number(time.club))
                        .slice()
                        .reverse()
                        .map((r, i) => {
                          const isLatest = i === 4;
                          const config = {
                            W: { bg: "bg-green-500", text: "V", label: "Vitória" },
                            D: { bg: "bg-yellow-500", text: "E", label: "Empate" },
                            L: { bg: "bg-red-500", text: "D", label: "Derrota" },
                          };
                          const current = config[r] || config.L;

                          return (
                            <div
                              key={i}
                              className={`
                                w-7 h-7 rounded-full flex items-center justify-center
                                font-bold text-xs text-white shadow-sm
                                transition-all duration-200
                                ${current.bg}
                                ${
                                  isLatest
                                    ? "ring-2 ring-blue-400 ring-offset-2 scale-110"
                                    : "opacity-80 hover:opacity-100"
                                }
                              `}
                              title={current.label}
                            >
                              {current.text}
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
