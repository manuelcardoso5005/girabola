import { data } from "@/src/lib/types";

export const objecto: data = {
  id: 1,
  epoca: "2025/2026",
  inicio: "2026-01-25",
  fim: "2026-03-15",
  totalClubes: 16,
  totalJornadas: 6,
  jornadaAtual: 5,

  competicao: [
    {
      nome: "Girabola",
      pais: "Angola",
      nivel: 1,
      organizador: "Federação Angolana de Futebol",
      logotipo: "https://i.ibb.co/LXwLZsTp/girabola-logo-removebg-preview.png",
    },
  ],

  clubs: [
    { id: 1, nome: "Wiliete Sport Club", shortName: "WIL", logo: "https://i.ibb.co/4RsT9R1D/club-wiliete-removebg-preview.png", stadium: "Estádio Wiliete", city: "Benguela", colors: ["#FF0000", "#FFFFFF"] },
    { id: 2, nome: "Kabuscorp Sport Club", shortName: "KAB", logo: "https://i.ibb.co/zcmy14V/club-kabuscorp.png", stadium: "1º de Maio", city: "Luanda", colors: ["#0000FF", "#FFFF00"] },
    { id: 3, nome: "1º de Agosto", shortName: "PRI", logo: "https://i.ibb.co/JFSZMvHH/club-primeirodeagosto.png", stadium: "França Ndalu", city: "Luanda", colors: ["#00FF00", "#000000"] },
    { id: 4, nome: "Petro de Luanda", shortName: "PET", logo: "https://i.ibb.co/WWh99nCn/club-petro-removebg-preview.png", stadium: "Cidadela", city: "Luanda", colors: ["#FFA500", "#0000FF"] },
    { id: 5, nome: "Sagrada Esperança", shortName: "SAG", logo: "https://i.ibb.co/fjj6wcM/club-sagrada-removebg-preview.png", stadium: "Quintalão", city: "Dundo", colors: ["#FFD700", "#000000"] },
    { id: 6, nome: "Desportivo da Huíla", shortName: "DHU", logo: "https://i.ibb.co/WvgskyWs/club-CDHu-la.png", stadium: "Tundavala", city: "Lubango", colors: ["#008000", "#FFFFFF"] },
    { id: 7, nome: "Académica do Lobito", shortName: "ACA", logo: "https://i.ibb.co/8n6r2tTL/club-Acad-mica-do-Lobito.png", stadium: "Lobito", city: "Lobito", colors: ["#0000FF", "#FFFFFF"] },
    { id: 8, nome: "Recreativo do Libolo", shortName: "LIB", logo: "https://i.ibb.co/DfzB8bkK/club-Recreativo-Do-Libolo.png", stadium: "Calulo", city: "Calulo", colors: ["#FFD700", "#008000"] },
    { id: 9, nome: "GD Interclube", shortName: "INT", logo: "https://i.ibb.co/pjvdQMRv/club-GD-Interclube.png", stadium: "22 de Junho", city: "Luanda", colors: ["#FF0000", "#000000"] },
    { id: 10, nome: "Bravos do Maquis", shortName: "BRM", logo: "https://i.ibb.co/VWgtBK5t/club-FC-Bravos-do-Maquis.png", stadium: "Mangueiras", city: "Luena", colors: ["#008000", "#FFD700"] },
    { id: 11, nome: "Guelson FC", shortName: "GFC", logo: "https://i.ibb.co/WvdSB3vZ/guelson-removebg-preview-128x128.png", stadium: "Ombaka", city: "Benguela", colors: ["#0000FF", "#FF0000"] },
    { id: 12, nome: "Luanda City", shortName: "LDC", logo: "https://i.ibb.co/JjCzcZsT/images-removebg-preview.png", stadium: "Coqueiros", city: "Luanda", colors: ["#008000", "#FFFFFF"] },
    { id: 13, nome: "Redonda FC", shortName: "RDC", logo: "https://i.ibb.co/7dKCx0d0/club-redonda.png", stadium: "Uíge", city: "Bengo", colors: ["#800000", "#FFFFFF"] },
    { id: 14, nome: "São Salvador", shortName: "SSO", logo: "https://i.ibb.co/j9g5MhWm/salvador-removebg-preview.png", stadium: "Soyo", city: "Soyo", colors: ["#000080", "#FFFFFF"] },
    { id: 15, nome: "CD Lunda Sul", shortName: "DLS", logo: "https://i.ibb.co/KjKzvGzV/club-lunda-sul.png", stadium: "Saurimo", city: "Saurimo", colors: ["#FF4500", "#000000"] },
    { id: 16, nome: "1º de Maio", shortName: "1MA", logo: "https://i.ibb.co/Pz50pHMy/Estrela-Clube-Primeiro-de-Maio.png", stadium: "Buraco", city: "Benguela", colors: ["#8B0000", "#FFFFFF"] },
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
        { id: 1, casa: 1, fora: 2, resultado: "1 - 0", data: "2026-01-25", hora: "16:00" },
        { id: 2, casa: 3, fora: 4, resultado: "1 - 1", data: "2026-01-25", hora: "18:00" },
        { id: 3, casa: 5, fora: 6, resultado: "2 - 0", data: "2026-01-26", hora: "15:00" },
        { id: 4, casa: 7, fora: 8, resultado: "0 - 0", data: "2026-01-26", hora: "15:00" },
        { id: 5, casa: 9, fora: 10, resultado: "1 - 2", data: "2026-01-26", hora: "16:00" },
        { id: 6, casa: 11, fora: 12, resultado: "3 - 1", data: "2026-01-26", hora: "16:00" },
        { id: 7, casa: 13, fora: 14, resultado: "0 - 1", data: "2026-01-26", hora: "17:00" },
        { id: 8, casa: 15, fora: 16, resultado: "2 - 2", data: "2026-01-26", hora: "17:00" },
      ],
  },
  {
    jornada: 2,
    jogos: [
      { id: 9, casa: 2, fora: 1, resultado: "2 - 2", data: "2026-02-01", hora: "16:00" },
      { id: 10, casa: 4, fora: 3, resultado: "1 - 0", data: "2026-02-01", hora: "18:00" },
      { id: 11, casa: 6, fora: 5, resultado: "0 - 1", data: "2026-02-02", hora: "15:00" },
      { id: 12, casa: 8, fora: 7, resultado: "2 - 2", data: "2026-02-02", hora: "15:00" },
      { id: 13, casa: 10, fora: 9, resultado: "1 - 1", data: "2026-02-02", hora: "16:00" },
      { id: 14, casa: 12, fora: 11, resultado: "0 - 2", data: "2026-02-02", hora: "16:00" },
      { id: 15, casa: 14, fora: 13, resultado: "3 - 1", data: "2026-02-02", hora: "17:00" },
      { id: 16, casa: 16, fora: 15, resultado: "1 - 0", data: "2026-02-02", hora: "17:00" },
    ],
  },
  {
    jornada: 3,
    jogos: [
      { id: 17, casa: 1, fora: 4, resultado: "1 - 1", data: "2026-02-08", hora: "16:00" },
      { id: 18, casa: 2, fora: 3, resultado: "2 - 0", data: "2026-02-08", hora: "18:00" },
      { id: 19, casa: 5, fora: 6, resultado: "0 - 0", data: "2026-02-09", hora: "15:00" },
      { id: 20, casa: 7, fora: 8, resultado: "1 - 2", data: "2026-02-09", hora: "15:00" },
      { id: 21, casa: 9, fora: 10, resultado: "0 - 1", data: "2026-02-09", hora: "16:00" },
      { id: 22, casa: 11, fora: 12, resultado: "2 - 2", data: "2026-02-09", hora: "16:00" },
      { id: 23, casa: 13, fora: 14, resultado: "1 - 3", data: "2026-02-09", hora: "17:00" },
      { id: 24, casa: 15, fora: 16, resultado: "0 - 0", data: "2026-02-09", hora: "17:00" },
    ]
  },
  {
    jornada: 4,
    jogos: [
      { id: 25, casa: 4, fora: 1, resultado: "2 - 1", data: "2026-02-15", hora: "16:00" },
      { id: 26, casa: 3, fora: 2, resultado: "1 - 1", data: "2026-02-15", hora: "18:00" },
      { id: 27, casa: 6, fora: 5, resultado: "3 - 0", data: "2026-02-16", hora: "15:00" },
      { id: 28, casa: 8, fora: 7, resultado: "2 - 2", data: "2026-02-16", hora: "15:00" },
      { id: 29, casa: 10, fora: 9, resultado: "1 - 0", data: "2026-02-16", hora: "16:00" },
      { id: 30, casa: 12, fora: 11, resultado: "0 - 1", data: "2026-02-16", hora: "16:00" },
      { id: 31, casa: 14, fora: 13, resultado: "2 - 0", data: "2026-02-16", hora: "17:00" },
      { id: 32, casa: 16, fora: 15, resultado: "1 - 1", data: "2026-02-16", hora: "17:00" },
    ]
  },
  {
    jornada: 5,
    jogos: [
      { id: 33, casa: 1, fora: 2, resultado: "1 - 2", data: "2026-02-22", hora: "16:00" },
      { id: 34, casa: 3, fora: 4, resultado: "0 - 1", data: "2026-02-22", hora: "18:00" },
      { id: 35, casa: 5, fora: 6, resultado: "2 - 2", data: "2026-02-23", hora: "15:00" },
      { id: 36, casa: 7, fora: 8, resultado: "1 - 0", data: "2026-02-23", hora: "15:00" },
      { id: 37, casa: 9, fora: 10, resultado: "0 - 0", data: "2026-02-23", hora: "16:00" },
      { id: 38, casa: 11, fora: 12, resultado: "3 - 1", data: "2026-02-23", hora: "16:00" },
      { id: 39, casa: 13, fora: 14, resultado: "1 - 1", data: "2026-02-23", hora: "17:00" },
      { id: 40, casa: 15, fora: 16, resultado: "2 - 0", data: "2026-02-23", hora: "17:00" },
    ]
  },
  {
    jornada: 6,
      jogos: [
        { id: 41, casa: 1, fora: 4, hora: "16:00" },
        { id: 42, casa: 2, fora: 3, hora: "18:00" },
        { id: 43, casa: 5, fora: 8, hora: "15:00" },
        { id: 44, casa: 6, fora: 7, hora: "15:00" },
        { id: 45, casa: 9, fora: 12, hora: "16:00" },
        { id: 46, casa: 10, fora: 11, hora: "16:00" },
        { id: 47, casa: 13, fora: 16, hora: "17:00" },
        { id: 48, casa: 14, fora: 15, hora: "17:00" },
      ],
  }
],

  standings: [
    {
      position: 1,
      club: 2, // Kabuscorp
      points: 11,
      wins: 3,
      draws: 2,
      losses: 0,
      competition: "Liga dos Campeões",
      relegated: false,
    },
    {
      position: 2,
      club: 4, // Petro de Luanda
      points: 10,
      wins: 3,
      draws: 1,
      losses: 1,
      competition: "Liga dos Campeões",
      relegated: false,
    },
    {
      position: 3,
      club: 1, // Wiliete
      points: 8,
      wins: 2,
      draws: 2,
      losses: 1,
      competition: "Taça CAF",
      relegated: false,
    },
    {
      position: 4,
      club: 9, // Interclube
      points: 8,
      wins: 2,
      draws: 2,
      losses: 1,
      competition: "",
      relegated: false,
    },
    {
      position: 5,
      club: 5, // Sagrada Esperança
      points: 7,
      wins: 2,
      draws: 1,
      losses: 2,
      competition: "",
      relegated: false,
    },
    {
      position: 6,
      club: 6, // Desportivo da Huíla
      points: 7,
      wins: 2,
      draws: 1,
      losses: 2,
      competition: "",
      relegated: false,
    },
    {
      position: 7,
      club: 10, // Bravos do Maquis
      points: 6,
      wins: 1,
      draws: 3,
      losses: 1,
      competition: "",
      relegated: false,
    },
    {
      position: 8,
      club: 11, // Guelson FC
      points: 6,
      wins: 2,
      draws: 0,
      losses: 3,
      competition: "",
      relegated: false,
    },
    {
      position: 9,
      club: 3, // 1º de Agosto
      points: 5,
      wins: 1,
      draws: 2,
      losses: 2,
      competition: "",
      relegated: false,
    },
    {
      position: 10,
      club: 7, // Académica do Lobito
      points: 5,
      wins: 1,
      draws: 2,
      losses: 2,
      competition: "",
      relegated: false,
    },
    {
      position: 11,
      club: 8, // Recreativo do Libolo
      points: 4,
      wins: 1,
      draws: 1,
      losses: 3,
      competition: "",
      relegated: false,
    },
    {
      position: 12,
      club: 12, // Luanda City
      points: 4,
      wins: 1,
      draws: 1,
      losses: 3,
      competition: "",
      relegated: false,
    },
    {
      position: 13,
      club: 13, // Redonda FC
      points: 3,
      wins: 0,
      draws: 3,
      losses: 2,
      competition: "",
      relegated: false,
    },
    {
      position: 14,
      club: 14, // São Salvador
      points: 3,
      wins: 0,
      draws: 3,
      losses: 2,
      competition: "",
      relegated: false,
    },
    {
      position: 15,
      club: 15, // Lunda Sul
      points: 2,
      wins: 0,
      draws: 2,
      losses: 3,
      competition: "",
      relegated: true,
    },
    {
      position: 16,
      club: 16, // 1º de Maio
      points: 1,
      wins: 0,
      draws: 1,
      losses: 4,
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





