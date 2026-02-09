"use client";

import { useState } from "react";
import { objecto } from "@/src/data/data";

export function useCalendarData() {
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [
      c.id,
      { nome: c.nome, logo: c.logo, stadium: c.stadium, city: c.city }
    ])
  );

  const games = objecto.calendar.flatMap((round) =>
    round.jogos.map((game) => ({
      ...game,
      jornada: round.jornada,
      casaNome: typeof game.casa === "number" ? clubeMap[game.casa].nome : game.casa,
      foraNome: typeof game.fora === "number" ? clubeMap[game.fora].nome : game.fora,
      casaLogo: typeof game.casa === "number" ? clubeMap[game.casa].logo : undefined,
      foraLogo: typeof game.fora === "number" ? clubeMap[game.fora].logo : undefined,
      estadio: typeof game.casa === "number" ? clubeMap[game.casa].stadium : undefined,
      cidade: typeof game.casa === "number" ? clubeMap[game.casa].city : undefined,
    }))
  );

  const allRounds = Array.from(new Set(games.map(g => g.jornada))).sort((a, b) => a - b);

  const roundsWithResult = Array.from(
    new Set(games.filter(g => g.resultado).map(g => g.jornada))
  ).sort((a, b) => a - b);

  const lastCompletedRound = roundsWithResult.at(-1) ?? allRounds[0];

  const [selectedRound, setSelectedRound] = useState(lastCompletedRound);

  const selectedGames = games.filter(g => g.jornada === selectedRound);

  return {
    allRounds,
    selectedRound,
    setSelectedRound,
    selectedGames
  };
}
