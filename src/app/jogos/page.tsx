import { objecto } from "@/src/data/data";

export default function Jogos() {
  // cria map de id -> nome e logo do clube
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, { nome: c.nome, logo: c.logo }])
  );

  // transforma todas as rodadas em uma lista única de jogos
  const jogos = objecto.calendar.flatMap((rodada) =>
    rodada.jogos.map((jogo) => ({
      ...jogo,
      casaNome: typeof jogo.casa === "number" ? clubeMap[jogo.casa].nome : jogo.casa,
      foraNome: typeof jogo.fora === "number" ? clubeMap[jogo.fora].nome : jogo.fora,
      casaLogo: typeof jogo.casa === "number" ? clubeMap[jogo.casa].logo : undefined,
      foraLogo: typeof jogo.fora === "number" ? clubeMap[jogo.fora].logo : undefined,
    }))
  );

  // separa jogos realizados dos futuros
  const jogosRealizados = jogos.filter((j) => j.resultado);
  const jogosFuturos = jogos.filter((j) => !j.resultado);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Jogos</h1>
          <p className="text-slate-600">Calendário completo do Girabola</p>
        </div>

        {/* Próximos Jogos */}
        {jogosFuturos.length > 0 && (
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Próximos Jogos</h2>
              </div>
              <div className="p-6 space-y-4">
                {jogosFuturos.map((jogo) => (
                  <div
                    key={jogo.id}
                    className="bg-slate-50 rounded-xl p-5 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      {/* Time Casa */}
                      <div className="flex items-center gap-4 flex-1">
                        {jogo.casaLogo && (
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <img 
                              src={jogo.casaLogo} 
                              alt={jogo.casaNome} 
                              className="w-12 h-12 object-contain" 
                            />
                          </div>
                        )}
                        <span className="font-semibold text-slate-800 text-lg">
                          {jogo.casaNome}
                        </span>
                      </div>

                      {/* Data e Hora */}
                      <div className="px-8 text-center">
                        <div className="bg-emerald-100 px-6 py-3 rounded-xl">
                          <p className="text-sm font-medium text-emerald-700">
                            {jogo.data || "A definir"}
                          </p>
                          {jogo.hora && (
                            <p className="text-lg font-bold text-emerald-800 mt-1">
                              {jogo.hora}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Time Fora */}
                      <div className="flex items-center gap-4 flex-1 justify-end">
                        <span className="font-semibold text-slate-800 text-lg">
                          {jogo.foraNome}
                        </span>
                        {jogo.foraLogo && (
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <img 
                              src={jogo.foraLogo} 
                              alt={jogo.foraNome} 
                              className="w-12 h-12 object-contain" 
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Jogos Realizados */}
        {jogosRealizados.length > 0 && (
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Jogos Realizados</h2>
              </div>
              <div className="p-6 space-y-4">
                {jogosRealizados.map((jogo) => (
                  <div
                    key={jogo.id}
                    className="bg-slate-50 rounded-xl p-5 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      {/* Time Casa */}
                      <div className="flex items-center gap-4 flex-1">
                        {jogo.casaLogo && (
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <img 
                              src={jogo.casaLogo} 
                              alt={jogo.casaNome} 
                              className="w-12 h-12 object-contain" 
                            />
                          </div>
                        )}
                        <span className="font-semibold text-slate-800 text-lg">
                          {jogo.casaNome}
                        </span>
                      </div>

                      {/* Resultado, Data e Hora */}
                      <div className="px-8 text-center">
                        <div className="bg-blue-600 text-white px-6 py-3 rounded-xl mb-2">
                          <p className="text-2xl font-bold">
                            {jogo.resultado}
                          </p>
                        </div>
                        <p className="text-xs text-slate-500">
                          {jogo.data || "Data não definida"}
                          {jogo.hora && ` • ${jogo.hora}`}
                        </p>
                      </div>

                      {/* Time Fora */}
                      <div className="flex items-center gap-4 flex-1 justify-end">
                        <span className="font-semibold text-slate-800 text-lg">
                          {jogo.foraNome}
                        </span>
                        {jogo.foraLogo && (
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <img 
                              src={jogo.foraLogo} 
                              alt={jogo.foraNome} 
                              className="w-12 h-12 object-contain" 
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {jogos.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <p className="text-slate-500 text-lg">Nenhum jogo disponível.</p>
          </div>
        )}
      </div>
    </div>
  );
}