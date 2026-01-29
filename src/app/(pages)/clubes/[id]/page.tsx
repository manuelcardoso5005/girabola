// app/clubes/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { objecto } from "@/src/data/data";

export default function ClubDetailPage() {
  const params = useParams();
  const clubId = Number(params.id);

  const club = objecto.clubs.find((c) => c.id === clubId);

  if (!club) return <p className="p-6">Clube não encontrado.</p>;

  // pegar estatísticas do clube
  const stats = objecto.clubStats.find((s) => s.club === clubId);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="flex items-center gap-6 mb-6">
        <img src={club.logo} alt={club.nome} className="w-24 h-24 object-contain" />
        <div>
          <h1 className="text-3xl font-bold">{club.nome}</h1>
          <p className="text-gray-500">{club.city}</p>
          <p className="text-gray-500">{club.stadium}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Estatísticas</h2>
        {stats ? (
          <ul className="space-y-2">
            <li>Jogos: {stats.jogos}</li>
            <li>Vitórias: {stats.wins}</li>
            <li>Empates: {stats.draws}</li>
            <li>Derrotas: {stats.losses}</li>
            <li>Golos a favor: {stats.goalsFor}</li>
            <li>Golos contra: {stats.goalsAgainst}</li>
            <li>Diferença de golos: {stats.goalDifference}</li>
            <li>Pontos: {stats.points}</li>
          </ul>
        ) : (
          <p>Sem estatísticas disponíveis.</p>
        )}
      </div>
    </div>
  );
}
