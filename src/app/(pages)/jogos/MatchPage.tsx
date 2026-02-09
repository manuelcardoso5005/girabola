"use client";
import { useState, useMemo } from "react";
import LayoutPage from "@/src/components/Layout/LayoutPage";
import { objecto } from "@/src/data/data";
import { AnimatePresence, motion } from "framer-motion";
import FilterButtons from "./components/FilterButtons";
import MatchCard from "./components/MatchCard";
import { isLive, getTimestamp } from "./hooks/utils";
import MatchDetail from "./components/MatchDetail";
import { useRouter } from "next/navigation";

export default function MatchPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<"todos" | "aoVivo">("todos");
  //const [selectedMatch, setSelectedMatch] = useState<any | null>(null);

  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, { nome: c.nome, shortName: c.shortName, logo: c.logo, stadium: c.stadium, city: c.city }])
  );

  const matches = objecto.calendar.flatMap((round) =>
    round.jogos.map((match) => ({
      ...match,
      jornada: round.jornada,
      casaNome: typeof match.casa === "number" ? clubeMap[match.casa].nome : match.casa,
      foraNome: typeof match.fora === "number" ? clubeMap[match.fora].nome : match.fora,
      casaLogo: typeof match.casa === "number" ? clubeMap[match.casa].logo : undefined,
      foraLogo: typeof match.fora === "number" ? clubeMap[match.fora].logo : undefined,
      estadio: typeof match.casa === "number" ? clubeMap[match.casa].stadium : "Estádio a definir",
      cidade: typeof match.casa === "number" ? clubeMap[match.casa].city : undefined,
    }))
  );

  const filteredMatches = useMemo(() => {
    let toShow = matches.filter((m) => !m.resultado);
    if (filter === "aoVivo") toShow = toShow.filter(isLive);

    return toShow.sort((a, b) => {
      const aLive = isLive(a);
      const bLive = isLive(b);
      if (aLive && !bLive) return -1;
      if (!aLive && bLive) return 1;
      return getTimestamp(a) - getTimestamp(b);
    });
  }, [matches, filter]);

  const liveCount = matches.filter((m) => !m.resultado && isLive(m)).length;

  return (
    <LayoutPage
      title="Próximos Jogos"
      subtitle="Confira os jogos agendados"
      extraHeader={<FilterButtons filter={filter} setFilter={setFilter} liveCount={liveCount} />}
    >
      <AnimatePresence mode="wait">
        {filteredMatches.length > 0 ? (
          <motion.div key="matches-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
            {filteredMatches.map((match, index) => (
              <MatchCard key={match.id} match={match} index={index} onSelect={() => router.push(`/jogos/${match.id}`)} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty-state"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-lg p-12 text-center"
          >
            <p className="text-slate-500 text-lg font-medium">
              {filter === "aoVivo" ? "Nenhum jogo ao vivo no momento." : "Nenhum jogo futuro disponível."}
            </p>
            <p className="text-slate-400 text-sm mt-2">
              {filter === "aoVivo" ? "Aguarde o início dos próximos jogos." : "Aguarde a divulgação dos próximos jogos."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MatchDetail */}
    </LayoutPage>
  );
}
