"use client";

import { useState } from "react";
import { objecto } from "@/src/data/data";
import LayoutPage from "@/src/components/LayoutPage";
import TabelaClassificacao from "./components/tableCassification";

export default function Classificacao() {
  // Por defeito, mostramos a época atual
  const [selectedSeason, setSelectedSeason] = useState("current");

  // Função para retornar os últimos 5 resultados de um clube
  function getUltimosResultados(clubId: number) {
    const jogos = objecto.calendar
      .flatMap(r => r.jogos)
      .filter(j => j.resultado)
      .filter(j => j.casa === clubId || j.fora === clubId)
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);

    return jogos.map(jogo => {
      const [gCasa, gFora] = jogo.resultado!.split(" - ").map(Number);

      if (jogo.casa === clubId) {
        if (gCasa > gFora) return "W";
        if (gCasa < gFora) return "L";
        return "D";
      } else {
        if (gFora > gCasa) return "W";
        if (gFora < gCasa) return "L";
        return "D";
      }
    });
  }

  // Determinar os dados da temporada selecionada
  // Determinar os dados da temporada selecionada
  const seasonData =
    selectedSeason === "current"
      ? {
          standings: objecto.standings,
          clubStats: objecto.clubStats,
          clubs: objecto.clubs, // já são objetos completos
          season: "Época Atual",
        }
      : (() => {
          const past = objecto.pastSeasons.find(s => s.season === selectedSeason);
          if (!past) return { standings: [], clubStats: [], clubs: objecto.clubs, season: "Temporada não encontrada" };

          // aqui transformamos os IDs em objetos Club reais
          const clubsForSeason = past.clubs.map(id => objecto.clubs.find(c => c.id === id)!).filter(Boolean);

          return {
            standings: past.standings,
            clubStats: past.clubStats,
            clubs: clubsForSeason as typeof objecto.clubs, // força TypeScript a aceitar
            season: past.season,
          };
        })();



  return (
    <LayoutPage
      title="Tabela Classificativa"
      subtitle={`Resumo completo da temporada: ${seasonData.season || "Atual"}`}
      extraHeader={
        <div className="mb-6 inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md border border-slate-200">
          <label className="font-semibold text-slate-700 text-sm">
              Escolher Época:
          </label>
            <select
              value={selectedSeason}
              onChange={e => setSelectedSeason(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-slate-300 bg-white font-medium text-slate-800 cursor-pointer hover:border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
            >
              <option value="current">Época Atual</option>
              {objecto.pastSeasons.map(s => (
                <option key={s.id} value={s.season}>
                  {s.season}
                </option>
              ))}
            </select>
        </div>
      }
    >
      {/* Dropdown para selecionar época */}
      

      <TabelaClassificacao
        key={selectedSeason}
        standings={seasonData.standings}
        clubStats={seasonData.clubStats}
        clubs={seasonData.clubs}
        getUltimosResultados={getUltimosResultados}
      />

    </LayoutPage>
  );
}
