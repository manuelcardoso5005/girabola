import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CardOverview from "./CardOverview";

interface Time {
  posicao: number;
  nome: string;
  pontos: number;
}

interface TableClassificationProps {
  tabela: Time[];
}

export default function TableClassification({ tabela }: TableClassificationProps) {
  return (
    <CardOverview
      color="from-purple-600 to-purple-700"
      title="Classificação"
      subtitle="Ver Classificação"
      linkPage="/classificacao"
    >
      <div className="space-y-2">
        {tabela.slice(0, 5).map((time, idx) => (
          <div
            key={time.posicao}
            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
              idx < 2
                ? "bg-blue-50 hover:bg-blue-100"
                : "bg-slate-50 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-6 text-blue-600">
                {time.posicao}
              </span>
              <span className="font-medium text-slate-700">
                {time.nome}
              </span>
            </div>

            <span className="font-bold text-slate-800">
              {time.pontos}
            </span>
          </div>
        ))}
      </div>
    </CardOverview>
  );
}
