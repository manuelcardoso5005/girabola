export interface Club {
  id: number;
  nome: string;
  shortName: string;
  logo: string;
  stadium: string;
  city: string;
  colors: [string, string];
}

export interface ClubStats {
  club: number | string; // id ou nome
  jogos: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface Competicao {
  id?: number;
  nome: string;
  pais: string;
  nivel: number;
  organizador: string;
  logotipo: string;
  temporadaAtual?: string;
}


export interface InternationalCompetition {
  name: string;
  slots: number;
  qualificationPositions: number[];
}

export interface Jogo {
  id: number;
  casa: number | string;
  fora: number | string;
  resultado?: string;
  data?: string;
  logoCasa?: string;
  logoFora?: string;
  hora?: string;
}

export interface Rodada {
  jornada: number;
  jogos: Jogo[];
}

export interface Standing {
  position: number;
  club: number | string;
  points: number;
  wins: number;
  draws: number;
  losses: number;
  competition?: string;
  relegated?: boolean;
}

export interface TopScorer {
  player: string;
  goals: number;
  team: number | string;
}

export interface Relegation {
  slots: number;
  positions: number[];
  leagueBelow: string;
}

export interface PastSeason {
  season: string;
  champion: string;
  relegated: string[];
  topScorers: TopScorer[];
  standings: Standing[];
}

export interface data {
  id: number;
  epoca: string;
  inicio: string;
  fim: string;
  totalClubes: number;
  totalJornadas: number;
  jornadaAtual: number;
  competicao: Competicao[];
  clubs: Club[];
  clubStats: ClubStats[];
  calendar: Rodada[];
  standings: Standing[];
  topScorers: TopScorer[];
  internationalCompetitions: InternationalCompetition[];
  relegation: Relegation;
  pastSeasons: PastSeason[];
}

// -------------------- exemplo funcional --------------------

export const objecto: data = {
  id: 1,
  epoca: "2025/2026",
  inicio: "2026-01-25",
  fim: "2026-03-15",
  totalClubes: 4,
  totalJornadas: 6,
  jornadaAtual: 5,
 competicao: [
  {
    nome: "Girabola",
    pais: "Angola",
    nivel: 1,
    organizador: "Federação Angolana de Futebol",
    logotipo: "https://i.ibb.co/S49kJ7Wb/girabola-logo.png",
  }
],

  clubs: [
    { id: 1, nome: "Wiliete", shortName: "WIL", logo: "https://i.ibb.co/dsfttTn6/club-wiliete.png", stadium: "Estádio Wiliete", city: "Benguela", colors: ["#FF0000", "#FFFFFF"] },
    { id: 2, nome: "Kabuscorp", shortName: "KAB", logo: "https://i.ibb.co/zcmy14V/club-kabuscorp.png", stadium: "Estádio 1º de Maio", city: "Benguela", colors: ["#0000FF", "#FFFF00"] },
    { id: 3, nome: "Primeiro de Agosto", shortName: "PRI", logo: "https://i.ibb.co/JFSZMvHH/club-primeirodeagosto.png", stadium: "França Ndalu", city: "Luanda", colors: ["#00FF00", "#000000"] },
    { id: 4, nome: "Petro de Luanda", shortName: "APL", logo: "https://i.ibb.co/j9tFbP6X/club-petro.jpg", stadium: "Estádio da Cidadela", city: "Luanda", colors: ["#FFA500", "#0000FF"] },
  ],

  clubStats: [
    { club: 1, jogos: 5, wins: 1, draws: 2, losses: 2, goalsFor: 4, goalsAgainst: 5, goalDifference: -1, points: 5 },
    { club: 2, jogos: 5, wins: 3, draws: 1, losses: 1, goalsFor: 8, goalsAgainst: 5, goalDifference: 3, points: 10 },
    { club: 3, jogos: 5, wins: 0, draws: 3, losses: 2, goalsFor: 5, goalsAgainst: 7, goalDifference: -2, points: 3 },
    { club: 4, jogos: 5, wins: 2, draws: 2, losses: 1, goalsFor: 6, goalsAgainst: 6, goalDifference: 0, points: 8 },
  ],

calendar: [
  // Primeira volta
  {
    jornada: 1,
    jogos: [
      { id: 1, casa: 1, fora: 2, resultado: "0 - 2", data: "2026-01-25",hora: "16:00" }, // Wiliete 0 x 2 Kabuscorp
      { id: 2, casa: 3, fora: 4, resultado: "1 - 1", data: "2026-01-26",hora: "18:00" }, // Progresso 1 x 1 Petro
    ]
  },
  {
    jornada: 2,
    jogos: [
      { id: 3, casa: 1, fora: 3, resultado: "2 - 0", data: "2026-02-01",hora: "16:00" }, // Wiliete 2 x 0 Progresso
      { id: 4, casa: 2, fora: 4, resultado: "1 - 1", data: "2026-02-02",hora: "18:00" }, // Kabuscorp 1 x 1 Petro
    ]
  },
  {
    jornada: 3,
    jogos: [
      { id: 5, casa: 1, fora: 4, resultado: "1 - 3", data: "2026-02-08" ,hora: "16:00"}, // Wiliete 1 x 3 Petro
      { id: 6, casa: 2, fora: 3, resultado: "2 - 2", data: "2026-02-09",hora: "18:00" }, // Kabuscorp 2 x 2 Progresso
    ]
  },
  // Segunda volta (mandos invertidos)
  {
    jornada: 4,
    jogos: [
      { id: 7, casa: 2, fora: 1, resultado: "2 - 1", data: "2026-03-01",hora: "16:00" }, // Kabuscorp 2 x 1 Wiliete
      { id: 8, casa: 4, fora: 3, resultado: "1 - 2", data: "2026-03-02",hora: "18:00" }, // Petro 1 x 2 Progresso
    ]
  },
  {
    jornada: 5,
    jogos: [
      { id: 9, casa: 3, fora: 1, resultado: "0 - 0", data: "2026-03-08",hora: "16:00" }, // Progresso 0 x 0 Wiliete
      { id: 10, casa: 4, fora: 2, resultado: "1 - 1", data: "2026-03-09",hora: "18:00" }, // Petro 1 x 1 Kabuscorp
    ]
  },
  {
    jornada: 6,
    jogos: [
      { id: 11, casa: 4, fora: 1, hora: "16:00" }, // Petro vs Wiliete (não jogado)
      { id: 12, casa: 3, fora: 2, hora: "18:00" }, // Progresso vs Kabuscorp (não jogado)
    ]
  }
],

  standings: [
  {
    position: 1,
    club: 2,          // Kabuscorp
    points: 10,
    wins: 3,
    draws: 1,
    losses: 1,
    competition: "Liga dos Campeões",
    relegated: false,
  },
  {
    position: 2,
    club: 4,          // Petro
    points: 8,
    wins: 2,
    draws: 2,
    losses: 1,
    competition: "Liga dos Campeões",
    relegated: false,
  },
  {
    position: 3,
    club: 1,          // Wiliete
    points: 5,
    wins: 1,
    draws: 2,
    losses: 2,
    competition: "Taça CAF",
    relegated: false,
  },
  {
    position: 4,
    club: 3,          // Progresso
    points: 3,
    wins: 0,
    draws: 3,
    losses: 2,
    competition: "",
    relegated: true,
  },
],


  topScorers: [], // preencher depois

  internationalCompetitions: [
    { name: "Liga dos Campeões", slots: 2, qualificationPositions: [1, 2] },
    { name: "Taça CAF", slots: 1, qualificationPositions: [3] },
  ],

  relegation: { slots: 1, positions: [4], leagueBelow: "Segunda Divisão" },

  pastSeasons: [], // preencher depois
};





