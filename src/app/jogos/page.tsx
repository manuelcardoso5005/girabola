"use client";

import { objecto } from "@/src/data/data";
import LayoutPage from "@/src/components/LayoutPage";

export default function Jogos() {
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, { nome: c.nome, logo: c.logo }])
  );

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

  const jogosFuturos = jogos.filter((j) => !j.resultado);

  return (
    <LayoutPage title="Jogos" subtitle="Jornada Actual">
      {jogosFuturos.length > 0 ? (
        <div className="space-y-4">
          {jogosFuturos.map((jogo) => (
            <div
              key={jogo.id}
              className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-shadow"
            >
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

                {/* Data e hora */}
                <div className="px-8 text-center">
                  <div className="bg-emerald-100 px-6 py-3 rounded-xl">
                    <p className="text-sm font-medium text-emerald-700">{jogo.data || "A definir"}</p>
                    {jogo.hora && <p className="text-lg font-bold text-emerald-800 mt-1">{jogo.hora}</p>}
                  </div>
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
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <p className="text-slate-500 text-lg">Nenhum jogo futuro disponível.</p>
        </div>
      )}
    </LayoutPage>
  );
}
