import { objecto } from "@/src/data/data";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface TabelaClassificacaoProps {
  standings: typeof objecto.standings;
  clubStats: typeof objecto.clubStats;
  clubs: typeof objecto.clubs;
  getUltimosResultados: (clubId: number) => ("W" | "D" | "L")[];
}

export default function TabelaClassificacao({
  standings,
  clubStats,
  clubs,
  getUltimosResultados,
}: TabelaClassificacaoProps) {

  const championsPositions =
    objecto.internationalCompetitions.find(
      c => c.name === "Liga dos Campeões"
    )?.qualificationPositions ?? [];

  const cafPositions =
    objecto.internationalCompetitions.find(
      c => c.name === "Taça CAF"
    )?.qualificationPositions ?? [];

  function getClub(clubId: number) {
    return clubs.find(c => c.id === clubId);
  }

  function getStats(clubId: number) {
    return clubStats.find(c => c.club === clubId);
  }

  const legendItems = [
    ...objecto.internationalCompetitions.map(comp => ({
      name: comp.name,
      color:
        comp.name === "Liga dos Campeões"
          ? "bg-blue-600"
          : comp.name === "Taça CAF"
          ? "bg-emerald-600"
          : "bg-gray-500",
    })),
    {
      name: "Zona de Despromoção",
      color: "bg-red-600",
    },
  ];

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const rowVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const legendVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const formBadgeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  }),
};

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Cabeçalho da Tabela */}
      <motion.div 
        className="bg-linear-to-r from-slate-800 to-slate-700 px-6 py-4"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-xl font-bold text-white">Classificação</h2>
      </motion.div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <motion.thead
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <tr className="bg-slate-100 border-b-2 border-slate-200">
              <th className="p-3 text-sm font-semibold text-slate-700 text-center">#</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-left">Equipa</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Jogos">J</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Vitórias">V</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Empates">E</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Derrotas">D</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Golos Marcados">GM</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Golos Sofridos">GS</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center" title="Saldo de Golos">SG</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center">Pts</th>
              <th className="p-3 text-sm font-semibold text-slate-700 text-center">Forma</th>
            </tr>
          </motion.thead>

          <motion.tbody
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {standings.map((time, index) => {
              const club = getClub(time.club as number);
              const stats = getStats(time.club as number);

              const isChampions = championsPositions.includes(time.position);
              const isCAF = cafPositions.includes(time.position);
              const relegationPositions = objecto.relegation.positions;
              const isRelegated = relegationPositions.includes(time.position);

              return (
                <motion.tr
                  key={time.club}
                  variants={rowVariants}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    isChampions
                      ? "bg-blue-300/20 hover:bg-blue-50"
                      : isCAF
                      ? "bg-emerald-300/20 hover:bg-emerald-50"
                      : isRelegated
                      ? "bg-red-300/20 hover:bg-red-50"
                      : ""
                  }`}
                  whileHover={{ 
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* POSIÇÃO */}
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center">
                      <motion.span
                        className={`w-7 h-7 flex items-center justify-center rounded-md font-bold text-sm ${
                          isChampions
                            ? "bg-blue-600 text-white"
                            : isCAF
                            ? "bg-emerald-600 text-white"
                            : isRelegated
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                      >
                        {time.position}
                      </motion.span>
                    </div>
                  </td>

                  {/* CLUBE */}
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <motion.img
                        src={club?.logo}
                        className="w-8 h-8 object-contain"
                        alt={club?.nome}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * 0.05 + 0.1,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                      />
                      <motion.span 
                        className="font-semibold text-gray-800 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.15 }}
                      >
                        {club?.nome}
                      </motion.span>
                    </div>
                  </td>

                  {/* Estatísticas */}
                  <td className="p-3 text-center text-gray-700 text-sm font-medium">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                    >
                      {time.wins + time.draws + time.losses}
                    </motion.span>
                  </td>

                  <td className="p-3 text-center text-green-700 text-sm font-semibold">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.25 }}
                    >
                      {time.wins}
                    </motion.span>
                  </td>

                  <td className="p-3 text-center text-gray-600 text-sm font-medium">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.3 }}
                    >
                      {time.draws}
                    </motion.span>
                  </td>

                  <td className="p-3 text-center text-red-600 text-sm font-semibold">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.35 }}
                    >
                      {time.losses}
                    </motion.span>
                  </td>

                  <td className="p-3 text-center text-gray-700 text-sm font-medium">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.4 }}
                    >
                      {stats?.goalsFor ?? 0}
                    </motion.span>
                  </td>

                  <td className="p-3 text-center text-gray-700 text-sm font-medium">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.45 }}
                    >
                      {stats?.goalsAgainst ?? 0}
                    </motion.span>
                  </td>

                  <td className="p-3 text-center">
                    <motion.span
                      className={`font-bold text-sm ${
                        (stats?.goalDifference ?? 0) > 0
                          ? "text-green-700"
                          : (stats?.goalDifference ?? 0) < 0
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.05 + 0.5,
                        type: "spring",
                        stiffness: 150
                      }}
                    >
                      {(stats?.goalDifference ?? 0) > 0 ? "+" : ""}
                      {stats?.goalDifference ?? 0}
                    </motion.span>
                  </td>

                  <td className="p-3 text-center">
                    <motion.span 
                      className="font-bold text-slate-800 text-base"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.05 + 0.55,
                        type: "spring",
                        stiffness: 200,
                        damping: 12
                      }}
                    >
                      {time.points}
                    </motion.span>
                  </td>

                  {/* ÚLTIMOS 5 RESULTADOS */}
                  <td className="p-3">
                    <div className="flex gap-1 justify-center">
                      {getUltimosResultados(time.club as number)
                        .slice(-5)
                        .map((r, i) => (
                          <motion.span
                            key={i}
                            custom={i}
                            variants={formBadgeVariants}
                            initial="hidden"
                            animate="visible"
                            className={`w-7 h-7 flex items-center justify-center rounded-md text-white text-xs font-bold shadow-sm ${
                              r === "W"
                                ? "bg-green-600"
                                : r === "D"
                                ? "bg-gray-500"
                                : "bg-red-600"
                            }`}
                            title={
                              r === "W"
                                ? "Vitória"
                                : r === "D"
                                ? "Empate"
                                : "Derrota"
                            }
                            whileHover={{ 
                              scale: 1.2,
                              rotate: 5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {r === "W" ? "V" : r === "D" ? "E" : "D"}
                          </motion.span>
                        ))}
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </motion.tbody>
        </table>
      </div>

      {/* Legenda */}   
      <motion.div 
        className="bg-gray-50 px-6 py-4 border-t border-gray-200"
        variants={legendVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-wrap gap-6 text-sm">
          {legendItems.map((item, i) => (
            <motion.div 
              key={i} 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className={`w-4 h-4 rounded ${item.color}`}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
              <span className="text-gray-700">{item.name}</span>
            </motion.div>
          ))}
        </div> 
      </motion.div>
    </motion.div>
  );
}