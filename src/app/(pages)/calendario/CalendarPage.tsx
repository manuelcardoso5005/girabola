"use client";

import LayoutPage from "@/src/components/Layout/LayoutPage";
import { AnimatePresence, motion } from "framer-motion";
import { useCalendarData } from "./hooks/useCalendarData";
import CalendarHeader from "./components/CalendarHeader";
import MatchCard from "./components/MatchCard";
import { useRouter } from "next/navigation";

export default function CalendarPage() {
  const router = useRouter();
  const {
    allRounds,
    selectedRound,
    setSelectedRound,
    selectedGames
  } = useCalendarData();

  return (
    <LayoutPage
      title="Calendário"
      subtitle="Veja todos os jogos por jornada"
      extraHeader={
        <CalendarHeader
          rounds={allRounds}
          value={selectedRound}
          onChange={setSelectedRound}
        />
      }
    >
      <AnimatePresence mode="wait">
        {selectedGames.length > 0 ? (
          <motion.div className="space-y-5">
            {selectedGames.map((game, index) => (
              <MatchCard key={game.id} game={game} index={index} onClick={(game) => router.push(`/jogos /${game.id}`)} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-12 text-center"
          >
            <p className="text-slate-500 text-lg font-medium">
              Nenhum jogo nesta jornada.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutPage>
  );
}
