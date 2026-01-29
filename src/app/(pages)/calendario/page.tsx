"use client";

import { objecto } from "@/src/data/data";
import { useState } from "react";
import LayoutPage from "@/src/components/Layout/LayoutPage";
import { motion, AnimatePresence } from "framer-motion";

export default function Calendar() {
  // Map id -> { nome, logo, stadium, city }
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, { nome: c.nome, logo: c.logo, stadium: c.stadium, city: c.city }])
  );

  // Todos os jogos em uma lista única
  const jogos = objecto.calendar.flatMap((rodada) =>
    rodada.jogos.map((jogo) => ({
      ...jogo,
      jornada: rodada.jornada,
      casaNome: typeof jogo.casa === "number" ? clubeMap[jogo.casa].nome : jogo.casa,
      foraNome: typeof jogo.fora === "number" ? clubeMap[jogo.fora].nome : jogo.fora,
      casaLogo: typeof jogo.casa === "number" ? clubeMap[jogo.casa].logo : undefined,
      foraLogo: typeof jogo.fora === "number" ? clubeMap[jogo.fora].logo : undefined,
      estadio: typeof jogo.casa === "number" ? clubeMap[jogo.casa].stadium : undefined,
      cidade: typeof jogo.casa === "number" ? clubeMap[jogo.casa].city : undefined,
    }))
  );

  // Todas as jornadas (passadas e futuras)
  const todasJornadas = Array.from(new Set(jogos.map(j => j.jornada))).sort((a, b) => a - b);

  // Última jornada completa (última que tem resultado)
  const jornadasComResultado = Array.from(new Set(jogos.filter(j => j.resultado).map(j => j.jornada))).sort((a, b) => a - b);
  const ultimaJornadaCompleta = jornadasComResultado[jornadasComResultado.length - 1] || todasJornadas[0];

  const [jornadaSelecionada, setJornadaSelecionada] = useState(ultimaJornadaCompleta);

  // Jogos filtrados pela jornada selecionada
  const jogosSelecionados = jogos.filter(j => j.jornada === jornadaSelecionada);

  return (
    <LayoutPage 
      title="Calendário" 
      subtitle="Veja todos os jogos por jornada" 
      extraHeader={
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md border border-slate-200"
        >
          <label className="font-semibold text-slate-700 text-sm">
            Jornada:
          </label>

          <motion.select
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            value={jornadaSelecionada}
            onChange={(e) => setJornadaSelecionada(Number(e.target.value))}
            className="px-4 py-2 rounded-lg border-2 border-slate-300 bg-white font-medium text-slate-800 cursor-pointer hover:border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
          >
            {todasJornadas.map((j) => (
              <option key={j} value={j}>
                {j}
              </option>
            ))}
          </motion.select>
        </motion.div>
      }
    >
      <AnimatePresence mode="wait">
        {jogosSelecionados.length > 0 ? (
          <motion.div
            key={`jornada-${jornadaSelecionada}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            {jogosSelecionados.map((jogo, index) => {
              const isRealizado = !!jogo.resultado;

              return (
                <motion.div
                  key={jogo.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ scale: 1.01, y: -3 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 overflow-hidden"
                >
                  {/* Cabeçalho do Card */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.08 + 0.2 }}
                    className="bg-linear-to-r from-slate-700 to-slate-600 px-6 py-3"
                  >
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-sm">{jogo.estadio || "Estádio a definir"}</p>
                          <p className="text-xs text-slate-300">{jogo.cidade || "Cidade"}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Árbitro */}
                        <div className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="text-slate-200">
                            Árbitro: <span className="font-medium text-white">{jogo.arbitro || "A definir"}</span>
                          </span>
                        </div>

                        {/* Status */}
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.08 + 0.3, type: "spring", stiffness: 200 }}
                          className={`px-3 py-1 text-white text-xs font-bold rounded-full ${
                            isRealizado ? "bg-blue-500" : "bg-emerald-500"
                          }`}
                        >
                          {isRealizado ? "REALIZADO" : "AGENDADO"}
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Corpo do Card - Confronto */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      {/* Casa */}
                      <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.08 + 0.3 }}
                        className="flex items-center gap-4 flex-1"
                      >
                        {jogo.casaLogo && (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="bg-linear-to-br from-slate-50 to-slate-100 p-3 rounded-xl shadow-md border border-slate-200"
                          >
                            <img src={jogo.casaLogo} alt={jogo.casaNome} className="w-14 h-14 object-contain" />
                          </motion.div>
                        )}
                        <div>
                          <span className="font-bold text-slate-800 text-xl block">{jogo.casaNome}</span>
                          <span className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Casa
                          </span>
                        </div>
                      </motion.div>

                      {/* Resultado ou Data/Hora */}
                      <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.08 + 0.4, type: "spring", stiffness: 150 }}
                        className="px-8 text-center"
                      >
                        {isRealizado ? (
                          <div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="bg-linear-to-br from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg mb-3"
                            >
                              <motion.p
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.08 + 0.5, type: "spring", stiffness: 300 }}
                                className="text-4xl font-black tracking-wider"
                              >
                                {jogo.resultado}
                              </motion.p>
                            </motion.div>
                            <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="font-medium">{jogo.data}</span>
                              {jogo.hora && (
                                <>
                                  <span className="text-slate-400">•</span>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="font-medium">{jogo.hora}</span>
                                </>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="bg-linear-to-br from-emerald-50 to-emerald-100 px-8 py-4 rounded-2xl border-2 border-emerald-200">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p className="text-sm font-semibold text-emerald-800">
                                {jogo.data || "Data a definir"}
                              </p>
                            </div>
                            {jogo.hora && (
                              <div className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-2xl font-bold text-emerald-900">{jogo.hora}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </motion.div>

                      {/* Fora */}
                      <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.08 + 0.5 }}
                        className="flex items-center gap-4 flex-1 justify-end"
                      >
                        <div className="text-right">
                          <span className="font-bold text-slate-800 text-xl block">{jogo.foraNome}</span>
                          <span className="text-sm text-slate-500 flex items-center gap-1 justify-end mt-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                            </svg>
                            Visitante
                          </span>
                        </div>
                        {jogo.foraLogo && (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="bg-linear-to-br from-slate-50 to-slate-100 p-3 rounded-xl shadow-md border border-slate-200"
                          >
                            <img src={jogo.foraLogo} alt={jogo.foraNome} className="w-14 h-14 object-contain" />
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </div>

                  {/* Rodapé do Card */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.08 + 0.6 }}
                    className="bg-slate-50 px-6 py-3 border-t border-slate-200"
                  >
                    <div className="flex items-center justify-between text-sm">
                      {/* Público */}
                      <div className="flex items-center gap-2 text-slate-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>
                          Público: <span className="font-semibold text-slate-800">
                            {isRealizado ? (jogo.publico || "Não informado") : "A confirmar"}
                          </span>
                        </span>
                      </div>

                      {/* Transmissão */}
                      <div className="flex items-center gap-2 text-slate-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>
                          Transmissão: <span className="font-semibold text-slate-800">
                            {jogo.transmissao || "TPA 1"}
                          </span>
                        </span>
                      </div>

                      {/* Meteorologia (para jogos futuros) */}
                      {!isRealizado && (
                        <div className="flex items-center gap-2 text-slate-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                          </svg>
                          <span>
                            Clima: <span className="font-semibold text-slate-800">
                              {jogo.clima || "Ensolarado"}
                            </span>
                          </span>
                        </div>
                      )}

                      {/* Temperatura (para jogos realizados) */}
                      {isRealizado && (
                        <div className="flex items-center gap-2 text-slate-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <span>
                            Temperatura: <span className="font-semibold text-slate-800">
                              {jogo.temperatura || "28°C"}
                            </span>
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-lg p-12 text-center"
          >
            <motion.svg
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-16 h-16 mx-auto text-slate-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </motion.svg>
            <p className="text-slate-500 text-lg font-medium">Nenhum jogo nesta jornada.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutPage>
  );
}