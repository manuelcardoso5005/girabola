import { objecto } from "@/src/data/data";

export default function Classificacao() {
  // cria um map de id -> nome do clube para facilitar
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, c.nome])
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Classificação</h1>
          <p className="text-slate-600">Temporada Girabola 2024/2025</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                  <th className="p-4 text-left font-semibold">#</th>
                  <th className="p-4 text-left font-semibold">Time</th>
                  <th className="p-4 text-center font-semibold">J</th>
                  <th className="p-4 text-center font-semibold">V</th>
                  <th className="p-4 text-center font-semibold">E</th>
                  <th className="p-4 text-center font-semibold">D</th>
                  <th className="p-4 text-center font-semibold">GM</th>
                  <th className="p-4 text-center font-semibold">GS</th>
                  <th className="p-4 text-center font-semibold">SG</th>
                  <th className="p-4 text-center font-semibold">Pts</th>
                </tr>
              </thead>
              <tbody>
                {objecto.standings.map((time, idx) => {
                  const isTop2 = time.position <= 2;
                  const isRelegated = time.relegated;
                  
                  return (
                    <tr
                      key={time.club}
                      className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                        isTop2
                          ? "bg-emerald-50"
                          : isRelegated
                          ? "bg-red-50"
                          : ""
                      }`}
                    >
                      <td className="p-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                          isTop2 
                            ? "bg-emerald-500 text-white" 
                            : isRelegated 
                            ? "bg-red-500 text-white" 
                            : "bg-slate-200 text-slate-700"
                        }`}>
                          {time.position}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-slate-800">{clubeMap[time.club]}</span>
                      </td>
                      <td className="p-4 text-center text-slate-600">{time.wins + time.draws + time.losses}</td>
                      <td className="p-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded font-semibold text-sm">
                          {time.wins}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-semibold text-sm">
                          {time.draws}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded font-semibold text-sm">
                          {time.losses}
                        </span>
                      </td>
                      <td className="p-4 text-center font-medium text-slate-700">
                        {objecto.clubStats.find((c) => c.club === time.club)?.goalsFor || 0}
                      </td>
                      <td className="p-4 text-center font-medium text-slate-700">
                        {objecto.clubStats.find((c) => c.club === time.club)?.goalsAgainst || 0}
                      </td>
                      <td className="p-4 text-center">
                        <span className={`font-semibold ${
                          (objecto.clubStats.find((c) => c.club === time.club)?.goalDifference || 0) > 0
                            ? "text-green-600"
                            : (objecto.clubStats.find((c) => c.club === time.club)?.goalDifference || 0) < 0
                            ? "text-red-600"
                            : "text-slate-600"
                        }`}>
                          {(objecto.clubStats.find((c) => c.club === time.club)?.goalDifference || 0) > 0 ? "+" : ""}
                          {objecto.clubStats.find((c) => c.club === time.club)?.goalDifference || 0}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-lg font-bold">
                          {time.points}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-slate-700 mb-4">Legenda</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg"></div>
              <div>
                <p className="font-medium text-slate-800">Zona de Classificação</p>
                <p className="text-sm text-slate-500">Top 2 posições</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg"></div>
              <div>
                <p className="font-medium text-slate-800">Zona de Rebaixamento</p>
                <p className="text-sm text-slate-500">Últimas posições</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}