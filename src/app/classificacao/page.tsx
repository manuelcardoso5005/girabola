import { temporada } from "@/src/data/data";

export default function Classificacao() {
  // cria um map de id -> nome do clube para facilitar
  const clubeMap = Object.fromEntries(
    temporada.clubs.map((c) => [c.id, c.nome])
  );

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Classificação do Girabola</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3 font-semibold">#</th>
              <th className="p-3 font-semibold">Time</th>
              <th className="p-3 font-semibold text-center">J</th>
              <th className="p-3 font-semibold text-center">V</th>
              <th className="p-3 font-semibold text-center">E</th>
              <th className="p-3 font-semibold text-center">D</th>
              <th className="p-3 font-semibold text-center">GM</th>
              <th className="p-3 font-semibold text-center">GS</th>
              <th className="p-3 font-semibold text-center">SG</th>
              <th className="p-3 font-semibold text-center">Pts</th>
            </tr>
          </thead>
          <tbody>
            {temporada.standings.map((time) => (
              <tr
                key={time.club}
                className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  time.position <= 2
                    ? "bg-green-50 dark:bg-green-900/20"
                    : time.relegated
                    ? "bg-red-50 dark:bg-red-900/20"
                    : ""
                }`}
              >
                <td className="p-3 font-bold">{time.position}</td>
                <td className="p-3 font-medium">{clubeMap[time.club]}</td>
                <td className="p-3 text-center">{time.wins + time.draws + time.losses}</td>
                <td className="p-3 text-center">{time.wins}</td>
                <td className="p-3 text-center">{time.draws}</td>
                <td className="p-3 text-center">{time.losses}</td>
                <td className="p-3 text-center">
                  {
                    // GM = goalsFor no clubStats
                    temporada.clubStats.find((c) => c.club === time.club)?.goalsFor || 0
                  }
                </td>
                <td className="p-3 text-center">
                  {
                    // GS = goalsAgainst no clubStats
                    temporada.clubStats.find((c) => c.club === time.club)?.goalsAgainst || 0
                  }
                </td>
                <td className="p-3 text-center">
                  {
                    // saldo de gols
                    (temporada.clubStats.find((c) => c.club === time.club)?.goalDifference || 0)
                  }
                </td>
                <td className="p-3 text-center font-bold">{time.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-200 dark:bg-green-900 rounded"></span>
          <span>Zona de classificação</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-200 dark:bg-red-900 rounded"></span>
          <span>Zona de rebaixamento</span>
        </div>
      </div>
    </div>
  );
}
