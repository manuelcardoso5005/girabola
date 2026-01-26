"use client";

import { objecto } from "@/src/data/data";
import { useState } from "react";
import LayoutPage from "@/src/components/LayoutPage";

export default function Calendar() {
  // Map id -> { nome, logo }
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, { nome: c.nome, logo: c.logo }])
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
    <LayoutPage title="Calendário" subtitle="Veja todos os jogos por jornada">
      {/* Select de jornada */}
      <div className="mb-6 inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md border border-slate-200">
        <label className="font-semibold text-slate-700 text-sm">Jornada:</label>
        <select
          value={jornadaSelecionada}
          onChange={(e) => setJornadaSelecionada(Number(e.target.value))}
          className="px-4 py-2 rounded-lg border-2 border-slate-300 bg-linear-to-br from-white to-slate-50 font-medium text-slate-800 cursor-pointer hover:border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        >
          {todasJornadas.map((j) => (
            <option key={j} value={j}>Jornada {j}</option>
          ))}
        </select>
      </div>

      {jogosSelecionados.length > 0 ? (
        <div className="space-y-4">
          {jogosSelecionados.map((jogo) => {
            const isRealizado = !!jogo.resultado;

            return (
              <div key={jogo.id} className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  {/* Casa */}
                  <div className="flex items-center gap-4 flex-1">
                    {jogo.casaLogo && (
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img src={jogo.casaLogo} alt={jogo.casaNome} className="w-12 h-12 object-contain" />
                      </div>
                    )}
                    <span className="font-semibold text-slate-800 text-lg">{jogo.casaNome}</span>
                  </div>

                  {/* Resultado ou Data/Hora */}
                  <div className="px-8 text-center">
                    {isRealizado ? (
                      <div className="bg-blue-600 text-white px-6 py-3 rounded-xl mb-2">
                        <p className="text-2xl font-bold">{jogo.resultado}</p>
                      </div>
                    ) : (
                      <div className="bg-emerald-100 px-6 py-3 rounded-xl mb-2">
                        <p className="text-sm font-medium text-emerald-700">{jogo.data || "A definir"}</p>
                        {jogo.hora && <p className="text-lg font-bold text-emerald-800 mt-1">{jogo.hora}</p>}
                      </div>
                    )}
                  </div>

                  {/* Fora */}
                  <div className="flex items-center gap-4 flex-1 justify-end">
                    <span className="font-semibold text-slate-800 text-lg">{jogo.foraNome}</span>
                    {jogo.foraLogo && (
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img src={jogo.foraLogo} alt={jogo.foraNome} className="w-12 h-12 object-contain" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <p className="text-slate-500 text-lg">Nenhum jogo nesta jornada.</p>
        </div>
      )}
    </LayoutPage>
  );
}
