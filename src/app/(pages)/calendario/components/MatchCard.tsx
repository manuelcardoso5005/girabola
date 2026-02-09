"use client";

import { motion } from "framer-motion";
import MatchHeader from "./MatchHeader";
import MatchBody from "./MatchBody";
import MatchFooter from "./MatchFooter";

export default function MatchCard({
  game,
  index,
  onClick,
}: {
  game: any;
  index: number;
  onClick: (game: any) => void;
}){
  const isFinished = !!game.resultado;

  return (
    <motion.div
      onClick={() => onClick(game)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.01, y: -3 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 overflow-hidden"
    >
      <MatchHeader game={game} index={index} finished={isFinished} />
      <MatchBody game={game} index={index} finished={isFinished} />
      <MatchFooter game={game} finished={isFinished} />
    </motion.div>
  );
}
