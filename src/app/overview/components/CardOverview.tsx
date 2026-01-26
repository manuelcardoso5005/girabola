"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className={`bg-linear-to-r ${color} px-6 py-4 flex items-center justify-between`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <motion.h2 
          className="text-xl font-bold text-white"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {title}
        </motion.h2>
        <Link
          href={linkPage}
          className="text-white flex items-center gap-1 group"
        >
          <span className="sr-only">{subtitle}</span> {/* acessibilidade */}
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ChevronRight
              className="w-5 h-5 text-white group-hover:text-gray-200"
            />
          </motion.div>
        </Link>
      </motion.div>
      {children && (
        <motion.div 
          className="p-6 space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}