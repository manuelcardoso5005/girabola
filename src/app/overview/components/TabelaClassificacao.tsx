interface Time {
  posicao: number;
  nome: string;
  pontos: number;
}

interface TabelaClassificacaoProps {
  tabela: Time[];
}

export default function TabelaClassificacao({ tabela }: TabelaClassificacaoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-linear-to-r from-purple-600 to-purple-700 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Classificação</h2>
      </div>
      <div className="p-6 space-y-2">
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
  );
}
