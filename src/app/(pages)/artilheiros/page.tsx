"use client";

import { useState } from "react";
import LayoutPage from "@/src/components/Layout/LayoutPage";
import { objecto } from "@/src/data/data";
import Link from "next/link";

interface TopScorer {
  id: number;
  player: string;
  club: number;
  goals: number;
  assists: number;
  jogos: number;
  penaltis?: number;
  faltasDirectas?: number;
  nacionalidade: string;
  posicao: string;
  idade: number;
  foto?: string;
}

export default function ArtilheirosPage() {
  const [filtroClube, setFiltroClube] = useState<number | "todos">("todos");
  const [ordenacao, setOrdenacao] = useState<"golos" | "assistencias" | "media">("golos");

  // Dados dos artilheiros (você pode adicionar isso ao objeto principal depois)
  const artilheiros: TopScorer[] = [
    {
      id: 1,
      player: "Tiago Azulão",
      club: 4,
      goals: 12,
      assists: 4,
      jogos: 5,
      penaltis: 2,
      faltasDirectas: 1,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Avançado",
      idade: 28,
      foto: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      player: "Show",
      club: 2,
      goals: 10,
      assists: 3,
      jogos: 5,
      penaltis: 1,
      faltasDirectas: 0,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Avançado",
      idade: 26,
      foto: "https://i.pravatar.cc/150?img=33",
    },
    {
      id: 3,
      player: "Zito Luvumbo",
      club: 1,
      goals: 8,
      assists: 2,
      jogos: 5,
      penaltis: 0,
      faltasDirectas: 2,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Extremo",
      idade: 24,
      foto: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 4,
      player: "Mabululu",
      club: 5,
      goals: 7,
      assists: 5,
      jogos: 5,
      penaltis: 1,
      faltasDirectas: 0,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Avançado",
      idade: 29,
      foto: "https://i.pravatar.cc/150?img=56",
    },
    {
      id: 5,
      player: "Gelson Dala",
      club: 8,
      goals: 6,
      assists: 3,
      jogos: 5,
      penaltis: 0,
      faltasDirectas: 1,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Extremo",
      idade: 27,
      foto: "https://i.pravatar.cc/150?img=68",
    },
    {
      id: 6,
      player: "Inácio Miguel",
      club: 9,
      goals: 6,
      assists: 4,
      jogos: 5,
      penaltis: 2,
      faltasDirectas: 0,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Médio Ofensivo",
      idade: 25,
      foto: "https://i.pravatar.cc/150?img=51",
    },
    {
      id: 7,
      player: "Herenilson",
      club: 6,
      goals: 5,
      assists: 2,
      jogos: 5,
      penaltis: 1,
      faltasDirectas: 0,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Avançado",
      idade: 30,
      foto: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 8,
      player: "Fredy",
      club: 10,
      goals: 5,
      assists: 3,
      jogos: 5,
      penaltis: 0,
      faltasDirectas: 1,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Extremo",
      idade: 23,
      foto: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 9,
      player: "Joaquim Paciência",
      club: 3,
      goals: 4,
      assists: 6,
      jogos: 5,
      penaltis: 0,
      faltasDirectas: 0,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Médio",
      idade: 26,
      foto: "https://i.pravatar.cc/150?img=60",
    },
    {
      id: 10,
      player: "Nelson Kialunda",
      club: 11,
      goals: 4,
      assists: 2,
      jogos: 5,
      penaltis: 1,
      faltasDirectas: 0,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Avançado",
      idade: 27,
      foto: "https://i.pravatar.cc/150?img=8",
    },
    {
      id: 11,
      player: "Erivaldo",
      club: 7,
      goals: 3,
      assists: 1,
      jogos: 5,
      penaltis: 0,
      faltasDirectas: 0,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Avançado",
      idade: 28,
      foto: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 12,
      player: "Maestro",
      club: 8,
      goals: 3,
      assists: 4,
      jogos: 5,
      penaltis: 0,
      faltasDirectas: 0,
      nacionalidade: "🇧🇷 Brasil",
      posicao: "Médio",
      idade: 29,
      foto: "https://i.pravatar.cc/150?img=70",
    },
    {
      id: 13,
      player: "Zizinho",
      club: 9,
      goals: 3,
      assists: 3,
      jogos: 5,
      penaltis: 0,
      faltasDirectas: 1,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Médio Ofensivo",
      idade: 24,
      foto: "https://i.pravatar.cc/150?img=57",
    },
    {
      id: 14,
      player: "Jacinto Dala",
      club: 1,
      goals: 3,
      assists: 2,
      jogos: 5,
      penaltis: 1,
      faltasDirectas: 0,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Extremo",
      idade: 22,
      foto: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: 15,
      player: "Danilson",
      club: 4,
      goals: 2,
      assists: 7,
      jogos: 5,
      penaltis: 0,
      faltasDirectas: 0,
      nacionalidade: "🇦🇴 Angola",
      posicao: "Médio",
      idade: 25,
      foto: "https://i.pravatar.cc/150?img=59",
    },
  ];

  // Filtrar e ordenar
  let artilheirosFiltrados = filtroClube === "todos"
    ? artilheiros
    : artilheiros.filter(a => a.club === filtroClube);

  artilheirosFiltrados = [...artilheirosFiltrados].sort((a, b) => {
    if (ordenacao === "golos") return b.goals - a.goals;
    if (ordenacao === "assistencias") return b.assists - a.assists;
    if (ordenacao === "media") return (b.goals / b.jogos) - (a.goals / a.jogos);
    return 0;
  });

  // Estatísticas gerais
  const totalGolos = artilheiros.reduce((acc, a) => acc + a.goals, 0);
  const totalAssistencias = artilheiros.reduce((acc, a) => acc + a.assists, 0);
  const mediaGolsPorJogador = (totalGolos / artilheiros.length).toFixed(1);

  const topGoleador = artilheiros[0];
  const topAssistente = [...artilheiros].sort((a, b) => b.assists - a.assists)[0];
  const melhorMedia = [...artilheiros].sort((a, b) => (b.goals / b.jogos) - (a.goals / a.jogos))[0];

  const getClubInfo = (clubId: number) => {
    return objecto.clubs.find(c => c.id === clubId);
  };

  const getMedal = (position: number) => {
    if (position === 1) return "🥇";
    if (position === 2) return "🥈";
    if (position === 3) return "🥉";
    return "";
  };

  return (
    <LayoutPage
      title="Melhores Marcadores"
      subtitle={`Época ${objecto.epoca} - Jornada ${objecto.jornadaAtual}`}
    >
      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-4xl">⚽</span>
            <div className="text-right">
              <p className="text-3xl font-bold">{totalGolos}</p>
              <p className="text-sm opacity-90">Total de Golos</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-4xl">🎯</span>
            <div className="text-right">
              <p className="text-3xl font-bold">{totalAssistencias}</p>
              <p className="text-sm opacity-90">Assistências</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-4xl">📊</span>
            <div className="text-right">
              <p className="text-3xl font-bold">{mediaGolsPorJogador}</p>
              <p className="text-sm opacity-90">Média/Jogador</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-4xl">👥</span>
            <div className="text-right">
              <p className="text-3xl font-bold">{artilheiros.length}</p>
              <p className="text-sm opacity-90">Marcadores</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Destaques */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Melhor Goleador */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-500">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🥇</span>
            <h3 className="font-bold text-gray-900">Melhor Goleador</h3>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={topGoleador?.foto}
              alt={topGoleador?.player}
              className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400"
            />
            <div className="flex-1">
              <p className="font-bold text-lg text-gray-900">{topGoleador?.player}</p>
              <p className="text-sm text-gray-600">
                {getClubInfo(topGoleador?.club)?.shortName}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-gray-600">Golos</span>
            <span className="text-3xl font-bold text-yellow-600">{topGoleador?.goals}</span>
          </div>
        </div>

        {/* Melhor Assistente */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🎯</span>
            <h3 className="font-bold text-gray-900">Melhor Assistente</h3>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={topAssistente?.foto}
              alt={topAssistente?.player}
              className="w-16 h-16 rounded-full object-cover border-4 border-blue-400"
            />
            <div className="flex-1">
              <p className="font-bold text-lg text-gray-900">{topAssistente?.player}</p>
              <p className="text-sm text-gray-600">
                {getClubInfo(topAssistente?.club)?.shortName}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-gray-600">Assistências</span>
            <span className="text-3xl font-bold text-blue-600">{topAssistente?.assists}</span>
          </div>
        </div>

        {/* Melhor Média */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">📈</span>
            <h3 className="font-bold text-gray-900">Melhor Média</h3>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={melhorMedia?.foto}
              alt={melhorMedia?.player}
              className="w-16 h-16 rounded-full object-cover border-4 border-green-400"
            />
            <div className="flex-1">
              <p className="font-bold text-lg text-gray-900">{melhorMedia?.player}</p>
              <p className="text-sm text-gray-600">
                {getClubInfo(melhorMedia?.club)?.shortName}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-gray-600">Golos/Jogo</span>
            <span className="text-3xl font-bold text-green-600">
              {(melhorMedia?.goals / melhorMedia?.jogos).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Filtro por Clube */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Filtrar por Clube
            </label>
            <select
              value={filtroClube}
              onChange={(e) => setFiltroClube(e.target.value === "todos" ? "todos" : Number(e.target.value))}
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="todos">Todos os Clubes</option>
              {objecto.clubs.map((club) => (
                <option key={club.id} value={club.id}>
                  {club.nome}
                </option>
              ))}
            </select>
          </div>

          {/* Ordenação */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ordenar por
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setOrdenacao("golos")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  ordenacao === "golos"
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Golos
              </button>
              <button
                onClick={() => setOrdenacao("assistencias")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  ordenacao === "assistencias"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Assistências
              </button>
              <button
                onClick={() => setOrdenacao("media")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  ordenacao === "media"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Média
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabela de Artilheiros */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Pos
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Jogador
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Clube
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Golos
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Assist.
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Jogos
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Média
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Penaltis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {artilheirosFiltrados.map((artilheiro, idx) => {
                const clube = getClubInfo(artilheiro.club);
                const media = (artilheiro.goals / artilheiro.jogos).toFixed(2);
                
                return (
                  <tr key={artilheiro.id} className="hover:bg-gray-50 transition-colors">
                    {/* Posição */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getMedal(idx + 1)}</span>
                        <span className="font-semibold text-gray-900">{idx + 1}</span>
                      </div>
                    </td>

                    {/* Jogador */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img
                          src={artilheiro.foto}
                          alt={artilheiro.player}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                        />
                        <div>
                          <p className="font-bold text-gray-900">{artilheiro.player}</p>
                          <p className="text-xs text-gray-600">
                            {artilheiro.posicao} • {artilheiro.idade} anos
                          </p>
                          <p className="text-xs text-gray-500">{artilheiro.nacionalidade}</p>
                        </div>
                      </div>
                    </td>

                    {/* Clube */}
                    <td className="px-6 py-4 text-center">
                      <Link
                        href={`/clubes/${clube?.id}`}
                        className="inline-flex items-center gap-2 hover:opacity-75 transition-opacity"
                      >
                        <img
                          src={clube?.logo}
                          alt={clube?.nome}
                          className="w-8 h-8 object-contain"
                        />
                        <span className="font-semibold text-gray-900 text-sm">
                          {clube?.shortName}
                        </span>
                      </Link>
                    </td>

                    {/* Golos */}
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-800 rounded-full font-bold text-lg">
                        {artilheiro.goals}
                      </span>
                    </td>

                    {/* Assistências */}
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-800 rounded-full font-bold text-lg">
                        {artilheiro.assists}
                      </span>
                    </td>

                    {/* Jogos */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-700 font-medium">{artilheiro.jogos}</span>
                    </td>

                    {/* Média */}
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold text-sm">
                        {media}
                      </span>
                    </td>

                    {/* Penaltis */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-600">{artilheiro.penaltis || 0}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legenda */}
      <div className="mt-6 bg-gray-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Legenda</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="text-gray-700">Golos marcados na época</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-gray-700">Assistências realizadas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-gray-700">Média de golos por jogo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            <span className="text-gray-700">Golos de penalti</span>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}