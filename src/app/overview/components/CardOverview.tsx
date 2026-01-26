import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CardOverviewProps {
  color?: string; 
  title?: string;
  subtitle?: string;
  linkPage: string;
  children?: React.ReactNode; // precisa pra aceitar conteúdo dentro do card
}

export default function CardOverview({
  color,
  title,
  subtitle,
  linkPage,
  children
}: CardOverviewProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className={`bg-linear-to-r ${color} px-6 py-4 flex items-center justify-between`}>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <Link
          href={linkPage}
          className="text-white flex items-center gap-1 group"
        >
          <span className="sr-only">{subtitle}</span> {/* acessibilidade */}
          <ChevronRight
            className="w-5 h-5 text-white transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-200"
          />
        </Link>
      </div>
      {children && <div className="p-6">{children}</div>}
    </div>
  );
}
