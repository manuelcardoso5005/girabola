interface Artilheiro {
  nome: string;
  gols: number;
}

interface ArtilhariaProps {
  artilharia: Artilheiro[];
}

export default function Artilharia({ artilharia }: ArtilhariaProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-linear-to-r from-amber-600 to-amber-700 px-6 py-4">
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
          <div className="text-center text-slate-500 py-4">Nenhum gol marcado ainda</div>
        )}
      </div>
    </div>
  );
}
