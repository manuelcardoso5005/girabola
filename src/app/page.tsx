import { objecto } from "@/src/data/data";

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
    objecto.clubs.map((c) => [c.id, { nome: c.nome, logo: c.logo }])
  );

  // transforma todas as rodadas em uma lista única de jogos
  const jogos: Jogo[] = objecto.calendar.flatMap((rodada) =>
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
  const tabela: Time[] = objecto.standings.map((s) => {
    const club = objecto.clubs.find((c) =>
      c.id === s.club || c.nome === s.club
    );
    return {
      posicao: s.position,
      nome: club?.nome || (s.club as string),
      pontos: s.points,
    };
  });

  // top scorers
  const artilharia: Artilheiro[] = objecto.topScorers.map((a) => ({
    nome: typeof a.team === "number" ? clubeMap[a.team].nome : a.team,
    gols: a.goals,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna esquerda - Jogos */}
          <div className="lg:col-span-2 space-y-6">
            {/* Último jogo - Destaque */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Último Jogo</h2>
              </div>
              {ultimo ? (
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="bg-slate-100 p-3 rounded-xl">
                        <img src={ultimo.logoCasa} alt={ultimo.casa} className="w-12 h-12 object-contain" />
                      </div>
                      <span className="font-semibold text-slate-800 text-lg">{ultimo.casa}</span>
                    </div>
                    
                    <div className="px-8">
                      <div className="text-3xl font-bold text-blue-600 bg-blue-50 px-6 py-3 rounded-xl">
                        {ultimo.resultado}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 flex-1 justify-end">
                      <span className="font-semibold text-slate-800 text-lg">{ultimo.fora}</span>
                      <div className="bg-slate-100 p-3 rounded-xl">
                        <img src={ultimo.logoFora} alt={ultimo.fora} className="w-12 h-12 object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center text-slate-500">
                  Nenhum jogo realizado ainda
                </div>
              )}
            </div>

            {/* Próximos jogos */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Próximos Jogos</h2>
              </div>
              <div className="p-6 space-y-3">
                {proximos.map((j, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 flex-1">
                      <img src={j.logoCasa} alt={j.casa} className="w-8 h-8 object-contain" />
                      <span className="font-medium text-slate-700">{j.casa}</span>
                    </div>
                    
                    <div className="px-4 text-sm font-semibold text-slate-400">
                      {j.resultado}
                    </div>
                    
                    <div className="flex items-center gap-3 flex-1 justify-end">
                      <span className="font-medium text-slate-700">{j.fora}</span>
                      <img src={j.logoFora} alt={j.fora} className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna direita - Tabela e Artilharia */}
          <div className="space-y-6">
            {/* Tabela */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Classificação</h2>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {tabela.map((time, idx) => (
                    <div 
                      key={time.posicao} 
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                        idx < 4 ? 'bg-blue-50 hover:bg-blue-100' : 
                        idx >= tabela.length - 4 ? 'bg-red-50 hover:bg-red-100' : 
                        'bg-slate-50 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-bold text-sm w-6 ${
                          idx < 4 ? 'text-blue-600' : 
                          idx >= tabela.length - 4 ? 'text-red-600' : 
                          'text-slate-500'
                        }`}>
                          {time.posicao}
                        </span>
                        <span className="font-medium text-slate-700">{time.nome}</span>
                      </div>
                      <span className="font-bold text-slate-800">{time.pontos}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Artilharia */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Artilharia</h2>
              </div>
              <div className="p-6">
                {artilharia.length > 0 ? (
                  <div className="space-y-3">
                    {artilharia.map((j, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-amber-600">{i + 1}</span>
                          </div>
                          <span className="font-medium text-slate-700">{j.nome}</span>
                        </div>
                        <span className="font-bold text-amber-600">{j.gols}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">
                    Nenhum gol marcado ainda
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}