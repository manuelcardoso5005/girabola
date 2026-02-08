"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

type Artilheiro = {
  id: number;
  player: string;
  club: number;
  goals: number;
  assists: number;
  foto: string;
};

type Props = {
  topArtilheiros: Artilheiro[];
  getClub: (clubId: number) => {
    nome: string;
    logo: string;
    shortName: string;
  } | undefined;
};

export default function GoalInvolvement({ topArtilheiros, getClub }: Props) {
  // Variantes de animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Variantes de animação para cada item
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  // Variantes para os badges de estatísticas
  const statBadgeVariants: Variants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Variantes para a medalha
  const medalVariants: Variants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div 
        className="bg-linear-to-r from-yellow-500 to-orange-600 p-4 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-2">
          <motion.span 
            className="text-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          >
            ⚽
          </motion.span>
          <h2 className="font-bold text-white text-lg">Melhores Marcadores</h2>
        </div>
        <Link 
          href="/artilheiros"
          className="text-white text-sm hover:underline flex items-center gap-1 group"
        >
          Ver todos
          <motion.svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </Link>
      </motion.div>

      {/* Lista de Artilheiros */}
      <motion.div 
        className="divide-y divide-gray-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {topArtilheiros.map((artilheiro, idx) => {
          const clube = getClub(artilheiro.club);
          return (
            <motion.div
              key={artilheiro.id}
              variants={itemVariants}
              className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
              whileHover={{ 
                backgroundColor: "rgb(249 250 251)",
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center gap-4">
                {/* Posição com Medalha */}
                <div className="shrink-0 w-8">
                  <motion.span 
                    className={`text-2xl font-bold inline-block ${
                      idx === 0 ? "text-yellow-500" : 
                      idx === 1 ? "text-gray-400" : 
                      idx === 2 ? "text-orange-600" : 
                      "text-gray-600"
                    }`}
                    variants={medalVariants}
                    initial="initial"
                    animate="animate"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `${idx + 1}º`}
                  </motion.span>
                </div>

                {/* Foto do Jogador com efeito */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.img
                    src={artilheiro.foto}
                    alt={artilheiro.player}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: idx * 0.1 + 0.3,
                    }}
                  />
                </motion.div>

                {/* Info do Jogador */}
                <div className="flex-1 min-w-0">
                  <motion.p 
                    className="font-bold text-gray-900 truncate"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.4 }}
                  >
                    {artilheiro.player}
                  </motion.p>
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                  >
                    <motion.img
                      src={clube?.logo}
                      alt={clube?.nome}
                      className="w-4 h-4 object-contain"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    />
                    <p className="text-sm text-gray-600 truncate">
                      {clube?.shortName}
                    </p>
                  </motion.div>
                </div>

                {/* Estatísticas */}
                <div className="flex items-center gap-3">
                  {/* Golos */}
                  <div className="text-center">
                    <motion.div 
                      className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center"
                      variants={statBadgeVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      custom={idx}
                      transition={{ delay: idx * 0.1 + 0.6 }}
                    >
                      <motion.span 
                        className="text-lg font-bold text-yellow-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.8 }}
                      >
                        {artilheiro.goals}
                      </motion.span>
                    </motion.div>
                    <motion.p 
                      className="text-xs text-gray-600 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.9 }}
                    >
                      golos
                    </motion.p>
                  </div>

                  {/* Assistências */}
                  <div className="text-center">
                    <motion.div 
                      className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                      variants={statBadgeVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      custom={idx}
                      transition={{ delay: idx * 0.1 + 0.7 }}
                    >
                      <motion.span 
                        className="text-lg font-bold text-blue-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.9 }}
                      >
                        {artilheiro.assists}
                      </motion.span>
                    </motion.div>
                    <motion.p 
                      className="text-xs text-gray-600 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 1.0 }}
                    >
                      assist.
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer */}
      <motion.div 
        className="bg-gray-50 p-3 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link 
          href="/artilheiros"
          className="text-sm font-semibold text-orange-600 hover:text-orange-800 transition-colors inline-flex items-center gap-1 group"
        >
          <span>Ver classificação completa</span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}