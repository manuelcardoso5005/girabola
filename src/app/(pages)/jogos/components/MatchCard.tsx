"use client";
import MatchHeader from "./MatchHeader";
import MatchTeam from "./MatchTeam";
import MatchDateTime from "./MatchDateTime";
import MatchFooter from "./MatchFooter";
import { motion } from "framer-motion";
import { isLive } from "../hooks/utils";

interface MatchCardProps {
  jogo?: any;
  onSelect?: () => void;
  match: any; 
  index: number
}

export default function MatchCard({ match, index, onSelect }: MatchCardProps) {
  const live = isLive(match);

  return (
    <motion.div
    onClick={onSelect}
      key={match.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.01, y: -5 }}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border overflow-hidden ${
        live ? "border-red-500 border-2" : "border-gray-100"
      }`}
    >
      <MatchHeader match={match} index={index} live={live} />
      <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <MatchTeam team="home" match={match} index={index} />
        <MatchDateTime match={match} index={index} live={live} />
        <MatchTeam team="away" match={match} index={index} />
      </div>
      <MatchFooter match={match} live={live} index={index} />
    </motion.div>
  );
}
