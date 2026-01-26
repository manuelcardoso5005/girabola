interface Jogo {
  casa: string;
  fora: string;
  resultado?: string;
  logoCasa?: string;
  logoFora?: string;
}

interface ProximosJogosProps {
  jogos: Jogo[];
}

export default function ProximosJogos({ jogos }: ProximosJogosProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-linear-to-r from-emerald-600 to-emerald-700 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Próximos Jogos</h2>
      </div>
      <div className="p-6 space-y-3">
        {jogos.length > 0 ? (
          jogos.map((j, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3 flex-1">
                <img src={j.logoCasa} alt={j.casa} className="w-8 h-8 object-contain" />
                <span className="font-medium text-slate-700">{j.casa}</span>
              </div>

              <div className="px-4 text-sm font-semibold text-slate-400">{j.resultado || "-"}</div>

              <div className="flex items-center gap-3 flex-1 justify-end">
                <span className="font-medium text-slate-700">{j.fora}</span>
                <img src={j.logoFora} alt={j.fora} className="w-8 h-8 object-contain" />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-slate-500 py-4">Nenhum jogo marcado</div>
        )}
      </div>
    </div>
  );
}
