"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import LayoutPage from "@/src/components/Layout/LayoutPage";
import { objecto } from "@/src/data/data";
import Link from "next/link";

interface GameStats {
  posse: [number, number]; // [casa, fora]
  remates: [number, number];
  rematesBaliza: [number, number];
  escanteios: [number, number];
  faltas: [number, number];
  cartoesAmarelos: [number, number];
  cartoesVermelhos: [number, number];
  impedimentos: [number, number];
  defesas: [number, number];
  passes: [number, number];
  passesCorretos: [number, number];
  duelos: [number, number];
}

interface GameEvent {
  minuto: number;
  tipo: "golo" | "cartao_amarelo" | "cartao_vermelho" | "substituicao";
  equipa: "casa" | "fora";
  jogador?: string;
  assistencia?: string;
  jogadorSai?: string;
  jogadorEntra?: string;
}

export default function JogoDetalhesPage() {
  const params = useParams();
  const jogoId = Number(params.id);

  const [abaAtiva, setAbaAtiva] = useState<"resumo" | "estatisticas" | "escalacoes">("resumo");

  // Encontrar o jogo
  const jogo = objecto.calendar
    .flatMap(jornada => 
      jornada.jogos.map(j => ({
        ...j,
        jornada: jornada.jornada
      }))
    )
    .find(j => j.id === jogoId);

  if (!jogo) {
    return (
      <LayoutPage title="Jogo não encontrado" subtitle="">
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">Este jogo não foi encontrado.</p>
          <Link href="/calendar" className="text-blue-600 hover:underline">
            Voltar ao calendário
          </Link>
        </div>
      </LayoutPage>
    );
  }

  const clubeCasa = objecto.clubs.find(c => c.id === jogo.casa);
  const clubeFora = objecto.clubs.find(c => c.id === jogo.fora);

  // Dados fictícios de estatísticas (você pode mover para o objeto principal)
  const estatisticas: GameStats = {
    posse: [58, 42],
    remates: [14, 8],
    rematesBaliza: [6, 3],
    escanteios: [7, 4],
    faltas: [12, 15],
    cartoesAmarelos: [2, 3],
    cartoesVermelhos: [0, 1],
    impedimentos: [3, 2],
    defesas: [3, 5],
    passes: [482, 358],
    passesCorretos: [412, 289],
    duelos: [28, 32],
  };

  // Eventos do jogo
  const eventos: GameEvent[] = [
    { minuto: 12, tipo: "golo", equipa: "casa", jogador: "Tiago Azulão", assistencia: "Danilson" },
    { minuto: 23, tipo: "cartao_amarelo", equipa: "fora", jogador: "Zito Luvumbo" },
    { minuto: 35, tipo: "golo", equipa: "fora", jogador: "Show", assistencia: "Paciência" },
    { minuto: 45, tipo: "substituicao", equipa: "casa", jogadorSai: "Job", jogadorEntra: "Manucho" },
    { minuto: 58, tipo: "cartao_amarelo", equipa: "casa", jogador: "Tiago Azulão" },
    { minuto: 67, tipo: "golo", equipa: "casa", jogador: "Danilson" },
    { minuto: 72, tipo: "substituicao", equipa: "fora", jogadorSai: "Paciência", jogadorEntra: "Dário Monteiro" },
    { minuto: 78, tipo: "cartao_vermelho", equipa: "fora", jogador: "Zito Luvumbo" },
    { minuto: 85, tipo: "substituicao", equipa: "casa", jogadorSai: "Danilson", jogadorEntra: "Gelson" },
  ];

  const resultado = jogo.resultado?.split(" - ").map(Number) || [0, 0];

  const abas = [
    { id: "resumo", label: "Resumo", icon: "📋" },
    { id: "estatisticas", label: "Estatísticas", icon: "📊" },
    { id: "escalacoes", label: "Escalações", icon: "👥" },
  ];

  return (
    <LayoutPage
      title={`${clubeCasa?.nome} vs ${clubeFora?.nome}`}
      subtitle={`Jornada ${jogo.jornada} • ${jogo.data} ${jogo.hora || ""}`}
    >
      {/* Header do Jogo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden mb-6"
      >
        {/* Placar */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {/* Casa */}
            <div className="flex-1 text-center">
              <motion.img
                whileHover={{ scale: 1.1, rotate: 5 }}
                src={clubeCasa?.logo}
                alt={clubeCasa?.nome}
                className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4"
              />
              <h3 className="text-white font-bold text-lg md:text-2xl">
                {clubeCasa?.nome}
              </h3>
            </div>

            {/* Resultado */}
            <div className="px-4 md:px-8">
              {jogo.resultado ? (
                <div className="bg-white rounded-2xl px-6 md:px-10 py-4 md:py-6 shadow-xl">
                  <p className="text-4xl md:text-6xl font-black text-gray-900 text-center">
                    {jogo.resultado}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 text-center mt-2">
                    Final
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl px-6 md:px-10 py-4 md:py-6 shadow-xl">
                  <p className="text-lg md:text-2xl font-bold text-gray-900 text-center">
                    {jogo.hora || "A definir"}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 text-center mt-1">
                    {jogo.data}
                  </p>
                </div>
              )}
            </div>

            {/* Fora */}
            <div className="flex-1 text-center">
              <motion.img
                whileHover={{ scale: 1.1, rotate: -5 }}
                src={clubeFora?.logo}
                alt={clubeFora?.nome}
                className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4"
              />
              <h3 className="text-white font-bold text-lg md:text-2xl">
                {clubeFora?.nome}
              </h3>
            </div>
          </div>
        </div>

        {/* Info do Jogo */}
        <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs md:text-sm text-gray-700 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">{clubeCasa?.stadium}</span>
            </div>
            {jogo.publico && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>{jogo.publico}</span>
              </div>
            )}
            {jogo.arbitro && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>Árbitro: {jogo.arbitro}</span>
              </div>
            )}
            {jogo.temperatura && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a3 3 0 00-3 3v6a4 4 0 108 0V5a3 3 0 00-3-3zm0 16a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{jogo.temperatura}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {abas.map((aba) => (
            <button
              key={aba.id}
              onClick={() => setAbaAtiva(aba.id as any)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap text-sm md:text-base ${
                abaAtiva === aba.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>{aba.icon}</span>
              {aba.label}
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo das Abas */}
      {abaAtiva === "resumo" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Eventos do Jogo */}
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Eventos do Jogo
            </h3>
            <div className="space-y-4">
              {eventos.map((evento, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: evento.equipa === "casa" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-center gap-4 ${
                    evento.equipa === "fora" ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Minuto */}
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-800 text-sm">
                      {evento.minuto}'
                    </span>
                  </div>

                  {/* Conteúdo do Evento */}
                  <div className={`flex-1 bg-gray-50 rounded-lg p-4 ${
                    evento.equipa === "fora" ? "text-right" : ""
                  }`}>
                    {evento.tipo === "golo" && (
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">⚽</span>
                          <span className="font-bold text-gray-900">{evento.jogador}</span>
                        </div>
                        {evento.assistencia && (
                          <p className="text-sm text-gray-600">
                            Assistência: {evento.assistencia}
                          </p>
                        )}
                      </div>
                    )}
                    {evento.tipo === "cartao_amarelo" && (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🟨</span>
                        <span className="font-semibold text-gray-900">{evento.jogador}</span>
                      </div>
                    )}
                    {evento.tipo === "cartao_vermelho" && (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🟥</span>
                        <span className="font-semibold text-gray-900">{evento.jogador}</span>
                      </div>
                    )}
                    {evento.tipo === "substituicao" && (
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">🔄</span>
                          <span className="text-sm text-gray-700">Substituição</span>
                        </div>
                        <p className="text-sm">
                          <span className="text-red-600">↓ {evento.jogadorSai}</span>
                          {" • "}
                          <span className="text-green-600">↑ {evento.jogadorEntra}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {abaAtiva === "estatisticas" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-md p-4 md:p-6"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Estatísticas do Jogo
          </h3>
          <div className="space-y-6">
            <StatBar
              label="Posse de Bola"
              casaValue={estatisticas.posse[0]}
              foraValue={estatisticas.posse[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
              unit="%"
            />
            <StatBar
              label="Remates"
              casaValue={estatisticas.remates[0]}
              foraValue={estatisticas.remates[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
            <StatBar
              label="Remates à Baliza"
              casaValue={estatisticas.rematesBaliza[0]}
              foraValue={estatisticas.rematesBaliza[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
            <StatBar
              label="Escanteios"
              casaValue={estatisticas.escanteios[0]}
              foraValue={estatisticas.escanteios[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
            <StatBar
              label="Faltas Cometidas"
              casaValue={estatisticas.faltas[0]}
              foraValue={estatisticas.faltas[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
            <StatBar
              label="Cartões Amarelos"
              casaValue={estatisticas.cartoesAmarelos[0]}
              foraValue={estatisticas.cartoesAmarelos[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
            <StatBar
              label="Cartões Vermelhos"
              casaValue={estatisticas.cartoesVermelhos[0]}
              foraValue={estatisticas.cartoesVermelhos[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
            <StatBar
              label="Impedimentos"
              casaValue={estatisticas.impedimentos[0]}
              foraValue={estatisticas.impedimentos[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
            <StatBar
              label="Defesas"
              casaValue={estatisticas.defesas[0]}
              foraValue={estatisticas.defesas[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
            <StatBar
              label="Passes Totais"
              casaValue={estatisticas.passes[0]}
              foraValue={estatisticas.passes[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
            <StatBar
              label="Passes Corretos"
              casaValue={estatisticas.passesCorretos[0]}
              foraValue={estatisticas.passesCorretos[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
            <StatBar
              label="Duelos Ganhos"
              casaValue={estatisticas.duelos[0]}
              foraValue={estatisticas.duelos[1]}
              casaNome={clubeCasa?.shortName || ""}
              foraNome={clubeFora?.shortName || ""}
            />
          </div>
        </motion.div>
      )}

      {abaAtiva === "escalacoes" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Casa */}
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <div className="flex items-center gap-3 mb-6">
              <img src={clubeCasa?.logo} alt={clubeCasa?.nome} className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{clubeCasa?.nome}</h3>
                <p className="text-sm text-gray-600">4-3-3</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700 mb-3">Titulares</p>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                <div key={num} className="flex items-center gap-3 py-2 border-b">
                  <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">
                    {num}
                  </span>
                  <span className="text-gray-900">Jogador {num}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fora */}
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <div className="flex items-center gap-3 mb-6">
              <img src={clubeFora?.logo} alt={clubeFora?.nome} className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{clubeFora?.nome}</h3>
                <p className="text-sm text-gray-600">4-4-2</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700 mb-3">Titulares</p>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                <div key={num} className="flex items-center gap-3 py-2 border-b">
                  <span className="w-8 h-8 bg-red-100 text-red-800 rounded-full flex items-center justify-center font-bold text-sm">
                    {num}
                  </span>
                  <span className="text-gray-900">Jogador {num}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Botão Voltar */}
      <div className="mt-8 text-center">
        <Link
          href="/calendario"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar ao Calendário
        </Link>
      </div>
    </LayoutPage>
  );
}

// Componente de barra de estatísticas
function StatBar({
  label,
  casaValue,
  foraValue,
  casaNome,
  foraNome,
  unit = "",
}: {
  label: string;
  casaValue: number;
  foraValue: number;
  casaNome: string;
  foraNome: string;
  unit?: string;
}) {
  const total = casaValue + foraValue;
  const casaPercentage = (casaValue / total) * 100;
  const foraPercentage = (foraValue / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="font-semibold text-blue-600">
          {casaValue}{unit}
        </span>
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="font-semibold text-red-600">
          {foraValue}{unit}
        </span>
      </div>
      <div className="flex h-3 rounded-full overflow-hidden bg-gray-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${casaPercentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-blue-500"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${foraPercentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-red-500"
        />
      </div>
    </div>
  );
}