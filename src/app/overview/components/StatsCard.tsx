import Link from "next/link";
import { Calendar, Trophy, TrendingUp } from "lucide-react";
import { objecto } from "@/src/data/data";

interface Props {
  totalJogosRealizados: number;
  totalGolos: number;
}

export default function StatsCard ({ totalJogosRealizados, totalGolos }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {/* Jornada Atual */}
        <Link href="/calendario" className="block group">
          <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-blue-50" />
              <span className="text-blue-50 text-xs font-semibold uppercase tracking-wide">Jornada</span>
            </div>
            <div className="text-white text-3xl font-black">{objecto.jornadaAtual}</div>
            <div className="text-blue-100 text-xs mt-1 font-medium">de {objecto.totalJornadas}</div>
          </div>
        </Link>

        {/* Jogos Realizados */}
        <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-emerald-50" />
            <span className="text-emerald-50 text-xs font-semibold uppercase tracking-wide">Jogos</span>
          </div>
          <div className="text-white text-3xl font-black">{totalJogosRealizados}</div>
          <div className="text-emerald-100 text-xs mt-1 font-medium">realizados</div>
        </div>
      </div>

      {/* Golos Totais */}
      <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-orange-50" />
              <span className="text-orange-50 text-xs font-semibold uppercase tracking-wide">Golos</span>
            </div>
            <div className="text-white text-4xl font-black">{totalGolos}</div>
            <div className="text-orange-100 text-xs mt-1 font-medium">
              Média: {(totalGolos / Math.max(totalJogosRealizados, 1)).toFixed(1)} por jogo
            </div>
          </div>
          <div className="text-white/20 text-6xl font-black">⚽</div>
        </div>
      </div>
    </>
  );
}
