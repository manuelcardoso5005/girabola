"use client";

import { motion } from "framer-motion";

interface Props {
  rounds: number[];
  value: number;
  onChange: (value: number) => void;
}

export default function CalendarHeader({ rounds, value, onChange }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col sm:inline-flex sm:flex-row items-stretch sm:items-center gap-3 bg-white px-4 sm:px-6 py-3 rounded-xl shadow-md border border-slate-200 w-full sm:w-auto"
    >
      <label className="font-semibold text-slate-700 text-sm sm:text-base text-center sm:text-left">
        Jornada:
      </label>

      <motion.select
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full sm:w-auto px-4 py-2 rounded-lg border-2 border-slate-300 bg-white font-medium text-slate-800 cursor-pointer hover:border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-center sm:text-left"
      >
        {rounds.map((r) => (
          <option key={r} value={r}>
            Jornada {r}
          </option>
        ))}
      </motion.select>
    </motion.div>
  );
}