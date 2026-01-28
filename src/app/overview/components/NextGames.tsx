import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Jogo {
  id: number;
  casaNome: string;
  foraNome: string;
  casaLogo?: string;
  foraLogo?: string;
  data?: string;
  hora?: string;
}

interface Props {
  proximosJogos: Jogo[];
  formatarDataCompacta: (data: string) => string;
}

export default function NextGames({ proximosJogos, formatarDataCompacta }: Props) {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-slate-800">Jogos</h3>
        <Link href="/jogos" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group">
          <span>Ver todos os jogos</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {proximosJogos.map((jogo) => (
          <div key={jogo.id} className="bg-white rounded-xl p-4 hover:shadow-lg transition-all shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              {jogo.casaLogo && (
                <div className="bg-slate-100 p-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <img src={jogo.casaLogo} alt={jogo.casaNome} className="w-7 h-7 object-contain" />
                </div>
              )}
              <span className="text-slate-800 font-bold text-sm flex-1 truncate">{jogo.casaNome}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              {jogo.foraLogo && (
                <div className="bg-slate-100 p-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <img src={jogo.foraLogo} alt={jogo.foraNome} className="w-7 h-7 object-contain" />
                </div>
              )}
              <span className="text-slate-800 font-bold text-sm flex-1 truncate">{jogo.foraNome}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-slate-600 text-xs font-semibold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                {formatarDataCompacta(jogo.data || "")}
              </div>
              {jogo.hora && (
                <div className="text-slate-800 text-sm font-bold bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                  {jogo.hora}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-slate-600">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium">
            Todas as horas em <span className="font-bold text-slate-800">WAT</span>
          </span>
        </div>
        
        <div className="h-8 w-px bg-slate-200"></div>
        
        <Link href="/calendario" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group">
          <span>Calendário completo</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </>
  );
}
