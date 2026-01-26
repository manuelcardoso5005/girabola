interface Jogo {
  casa: string;
  fora: string;
  resultado?: string;
  logoCasa?: string;
  logoFora?: string;
}

interface UltimoJogoProps {
  jogo?: Jogo;
}

export default function LastGame({ jogo }: UltimoJogoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-linear-to-r from-blue-600 to-blue-700 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Último Jogo</h2>
      </div>
      {jogo ? (
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="bg-slate-100 p-3 rounded-xl">
                <img src={jogo.logoCasa} alt={jogo.casa} className="w-12 h-12 object-contain" />
              </div>
              <span className="font-semibold text-slate-800 text-lg">{jogo.casa}</span>
            </div>

            <div className="px-8">
              <div className="text-3xl font-bold text-blue-600 bg-blue-50 px-6 py-3 rounded-xl">
                {jogo.resultado}
              </div>
            </div>

            <div className="flex items-center gap-4 flex-1 justify-end">
              <span className="font-semibold text-slate-800 text-lg">{jogo.fora}</span>
              <div className="bg-slate-100 p-3 rounded-xl">
                <img src={jogo.logoFora} alt={jogo.fora} className="w-12 h-12 object-contain" />
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
  );
}
