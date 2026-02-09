"use client";
import { motion, AnimatePresence } from "framer-motion";

interface FilterButtonsProps {
  filter: "todos" | "aoVivo";
  setFilter: (f: "todos" | "aoVivo") => void;
  liveCount: number;
}

export default function FilterButtons({ filter, setFilter, liveCount }: FilterButtonsProps) {
  return (
    <div className="flex gap-3">
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setFilter("aoVivo")}
        className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
          filter === "aoVivo" 
            ? "bg-red-600 text-white shadow-lg" 
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <motion.span 
          animate={{ scale: filter === "aoVivo" ? [1, 1.2, 1] : 1 }}
          transition={{ repeat: filter === "aoVivo" ? Infinity : 0, duration: 1.5 }}
          className={`w-2 h-2 rounded-full ${filter === "aoVivo" ? "bg-white" : "bg-red-600"}`}
        />
        Ao Vivo
        <AnimatePresence>
          {liveCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                filter === "aoVivo" ? "bg-white text-red-600" : "bg-red-600 text-white"
              }`}
            >
              {liveCount}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setFilter("todos")}
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          filter === "todos" 
            ? "bg-blue-600 text-white shadow-lg" 
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Todos os Jogos
      </motion.button>
    </div>
  );
}
