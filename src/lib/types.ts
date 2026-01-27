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