import Link from "next/link";
import { objecto } from "@/src/data/data";
import { ChevronRight } from "lucide-react";

interface Props {
  top5: typeof objecto.standings;
  getClub: (id: number) => typeof objecto.clubs[0] | undefined;
  getClubStats: (id: number) => typeof objecto.clubStats[0] | undefined;
}

export default function CompactClassification({ top5, getClub, getClubStats }: Props) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md border border-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="mb-4 pb-3 border-b border-slate-100">
          <p className="text-slate-500 text-xs font-medium">
            {objecto.competicao[0].nome} {objecto.epoca}
          </p>
        </div>
        <Link href="/classificacao" className="group">
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-800 transition group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Tabela */}
      <div className="space-y-1">
        {/* Header da Tabela */}
        <div className="grid grid-cols-12 gap-2 text-slate-500 text-xs font-semibold pb-2 border-b border-slate-200">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-5">Clube</div>
          <div className="col-span-1 text-center">PD</div>
          <div className="col-span-1 text-center">V</div>
          <div className="col-span-1 text-center">E</div>
          <div className="col-span-1 text-center">D</div>
          <div className="col-span-1 text-center">DG</div>
          <div className="col-span-1 text-center">Pts</div>
        </div>

        {top5.map((time) => {
          const club = getClub(time.club);
          const stats = getClubStats(time.club);
          const championsPositions = objecto.internationalCompetitions.find(c => c.name === "Liga dos Campeões")?.qualificationPositions ?? [];
          const cafPositions = objecto.internationalCompetitions.find(c => c.name === "Taça CAF")?.qualificationPositions ?? [];

          const isChampions = championsPositions.includes(time.position);
          const isCAF = cafPositions.includes(time.position);

          return (
            <div
              key={time.club}
              className="grid grid-cols-12 gap-2 text-slate-800 text-sm py-2.5 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {/* Posição */}
              <div className="col-span-1 flex items-center justify-center">
                <span className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold shadow-sm ${
                  isChampions ? "bg-blue-500 text-white" :
                  isCAF ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-700"
                }`}>
                  {time.position}
                </span>
              </div>

              {/* Logo + Nome */}
              <div className="col-span-5 flex items-center gap-2">
                <img src={club?.logo} alt={club?.nome} className="w-6 h-6 object-contain" />
                <span className="font-semibold text-xs truncate text-slate-800">{club?.nome}</span>
              </div>

              {/* Estatísticas */}
              <div className="col-span-1 text-center text-xs text-slate-600 font-medium">{time.wins + time.draws + time.losses}</div>
              <div className="col-span-1 text-center text-xs font-bold text-emerald-600">{time.wins}</div>
              <div className="col-span-1 text-center text-xs text-slate-600 font-medium">{time.draws}</div>
              <div className="col-span-1 text-center text-xs font-bold text-red-600">{time.losses}</div>
              <div className={`col-span-1 text-center text-xs font-bold ${
                (stats?.goalDifference ?? 0) > 0 ? "text-emerald-600" :
                (stats?.goalDifference ?? 0) < 0 ? "text-red-600" : "text-slate-600"
              }`}>
                {(stats?.goalDifference ?? 0) > 0 ? "+" : ""}{stats?.goalDifference ?? 0}
              </div>
              <div className="col-span-1 text-center text-xs font-bold text-slate-800">{time.points}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
