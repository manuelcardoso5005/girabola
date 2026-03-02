// Dados extraídos de @/src/data/data.ts
// Formatados para uso no HeaderSlider

export type JogoEstado = "proximo" | "ao_vivo" | "resultado";

export interface Jogo {
  id: number;
  estado: JogoEstado;
  data: string;
  hora: string;
  jornada: number;
  placar?: string;
  imagemFundo?: string;
  canal: string;
  arbitro?: string;
  publico?: string;
  clubeCasa: {
    id: number;
    nome: string;
    shortName: string;
    logo: string;
    cidade: string;
  };
  clubeVisitante: {
    id: number;
    nome: string;
    shortName: string;
    logo: string;
    cidade: string;
  };
}

export const jogos: Jogo[] = [

  // ─── JORNADA 6 — Próximos jogos ────────────────────────────────

  {
    id: 41,
    estado: "proximo",
    jornada: 6,
    data: "01 Mar 2026",
    hora: "16:00",
    canal: "TPA 1",
    arbitro: "Roberto Marques",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 1,
      nome: "Wiliete Sport Club",
      shortName: "WIL",
      logo: "https://i.ibb.co/4RsT9R1D/club-wiliete-removebg-preview.png",
      cidade: "Benguela",
    },
    clubeVisitante: {
      id: 4,
      nome: "Petro de Luanda",
      shortName: "PET",
      logo: "https://i.ibb.co/WWh99nCn/club-petro-removebg-preview.png",
      cidade: "Luanda",
    },
  },

  {
    id: 42,
    estado: "proximo",
    jornada: 6,
    data: "01 Mar 2026",
    hora: "18:00",
    canal: "TPA 1",
    arbitro: "Samuel Duarte",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 2,
      nome: "Kabuscorp Sport Club",
      shortName: "KAB",
      logo: "https://i.ibb.co/zcmy14V/club-kabuscorp.png",
      cidade: "Luanda",
    },
    clubeVisitante: {
      id: 3,
      nome: "1º de Agosto",
      shortName: "PRI",
      logo: "https://i.ibb.co/JFSZMvHH/club-primeirodeagosto.png",
      cidade: "Luanda",
    },
  },

  {
    id: 43,
    estado: "proximo",
    jornada: 6,
    data: "02 Mar 2026",
    hora: "15:00",
    canal: "TPA 2",
    arbitro: "Tomás Araújo",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 5,
      nome: "Sagrada Esperança",
      shortName: "SAG",
      logo: "https://i.ibb.co/fjj6wcM/club-sagrada-removebg-preview.png",
      cidade: "Lunda Norte",
    },
    clubeVisitante: {
      id: 8,
      nome: "Recreativo do Libolo",
      shortName: "LIB",
      logo: "https://i.ibb.co/DfzB8bkK/club-Recreativo-Do-Libolo.png",
      cidade: "Calulo",
    },
  },

  {
    id: 44,
    estado: "proximo",
    jornada: 6,
    data: "02 Mar 2026",
    hora: "15:00",
    canal: "ZAP Viva",
    arbitro: "Ulisses Ramos",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 6,
      nome: "Desportivo da Huíla",
      shortName: "DHU",
      logo: "https://i.ibb.co/WvgskyWs/club-CDHu-la.png",
      cidade: "Huíla",
    },
    clubeVisitante: {
      id: 7,
      nome: "Académica do Lobito",
      shortName: "ACA",
      logo: "https://i.ibb.co/8n6r2tTL/club-Acad-mica-do-Lobito.png",
      cidade: "Lobito",
    },
  },

  {
    id: 45,
    estado: "proximo",
    jornada: 6,
    data: "02 Mar 2026",
    hora: "16:00",
    canal: "TPA 1",
    arbitro: "Valter Pires",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 9,
      nome: "GD Interclube",
      shortName: "INT",
      logo: "https://i.ibb.co/pjvdQMRv/club-GD-Interclube.png",
      cidade: "Luanda",
    },
    clubeVisitante: {
      id: 12,
      nome: "Luanda City",
      shortName: "LDC",
      logo: "https://i.ibb.co/JjCzcZsT/images-removebg-preview.png",
      cidade: "Luanda",
    },
  },

  {
    id: 46,
    estado: "proximo",
    jornada: 6,
    data: "02 Mar 2026",
    hora: "16:00",
    canal: "TPA 2",
    arbitro: "Xavier Domingues",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 10,
      nome: "Bravos do Maquis",
      shortName: "BRM",
      logo: "https://i.ibb.co/VWgtBK5t/club-FC-Bravos-do-Maquis.png",
      cidade: "Moxico",
    },
    clubeVisitante: {
      id: 11,
      nome: "Guelson FC",
      shortName: "GFC",
      logo: "https://i.ibb.co/WvdSB3vZ/guelson-removebg-preview-128x128.png",
      cidade: "Benguela",
    },
  },

  {
    id: 47,
    estado: "proximo",
    jornada: 6,
    data: "02 Mar 2026",
    hora: "17:00",
    canal: "ZAP Viva",
    arbitro: "Yuri Leal",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 13,
      nome: "Redonda FC",
      shortName: "RDC",
      logo: "https://i.ibb.co/7dKCx0d0/club-redonda.png",
      cidade: "Bengo",
    },
    clubeVisitante: {
      id: 16,
      nome: "1º de Maio",
      shortName: "1MA",
      logo: "https://i.ibb.co/Pz50pHMy/Estrela-Clube-Primeiro-de-Maio.png",
      cidade: "Benguela",
    },
  },

  {
    id: 48,
    estado: "proximo",
    jornada: 6,
    data: "02 Mar 2026",
    hora: "17:00",
    canal: "TPA 1",
    arbitro: "Zacarias Bento",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 14,
      nome: "São Salvador",
      shortName: "SSO",
      logo: "https://i.ibb.co/j9g5MhWm/salvador-removebg-preview.png",
      cidade: "Soyo",
    },
    clubeVisitante: {
      id: 15,
      nome: "CD Lunda Sul",
      shortName: "DLS",
      logo: "https://i.ibb.co/KjKzvGzV/club-lunda-sul.png",
      cidade: "Lunda Sul",
    },
  },

  // ─── JORNADA 5 — Resultados recentes ───────────────────────────

  {
    id: 33,
    estado: "resultado",
    jornada: 5,
    data: "22 Fev 2026",
    hora: "16:00",
    placar: "1 - 2",
    canal: "TPA 1",
    arbitro: "Diogo Cardoso",
    publico: "9.700",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 1,
      nome: "Wiliete Sport Club",
      shortName: "WIL",
      logo: "https://i.ibb.co/4RsT9R1D/club-wiliete-removebg-preview.png",
      cidade: "Benguela",
    },
    clubeVisitante: {
      id: 2,
      nome: "Kabuscorp Sport Club",
      shortName: "KAB",
      logo: "https://i.ibb.co/zcmy14V/club-kabuscorp.png",
      cidade: "Luanda",
    },
  },

  {
    id: 34,
    estado: "resultado",
    jornada: 5,
    data: "22 Fev 2026",
    hora: "18:00",
    placar: "0 - 1",
    canal: "TPA 1",
    arbitro: "Hugo Monteiro",
    publico: "14.100",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 3,
      nome: "1º de Agosto",
      shortName: "PRI",
      logo: "https://i.ibb.co/JFSZMvHH/club-primeirodeagosto.png",
      cidade: "Luanda",
    },
    clubeVisitante: {
      id: 4,
      nome: "Petro de Luanda",
      shortName: "PET",
      logo: "https://i.ibb.co/WWh99nCn/club-petro-removebg-preview.png",
      cidade: "Luanda",
    },
  },

  {
    id: 35,
    estado: "resultado",
    jornada: 5,
    data: "23 Fev 2026",
    hora: "15:00",
    placar: "2 - 2",
    canal: "TPA 2",
    arbitro: "Jaime Correia",
    publico: "7.600",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 5,
      nome: "Sagrada Esperança",
      shortName: "SAG",
      logo: "https://i.ibb.co/fjj6wcM/club-sagrada-removebg-preview.png",
      cidade: "Lunda Norte",
    },
    clubeVisitante: {
      id: 6,
      nome: "Desportivo da Huíla",
      shortName: "DHU",
      logo: "https://i.ibb.co/WvgskyWs/club-CDHu-la.png",
      cidade: "Huíla",
    },
  },

  {
    id: 38,
    estado: "resultado",
    jornada: 5,
    data: "23 Fev 2026",
    hora: "16:00",
    placar: "3 - 1",
    canal: "TPA 2",
    arbitro: "Orlando Fonseca",
    publico: "8.300",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 11,
      nome: "Guelson FC",
      shortName: "GFC",
      logo: "https://i.ibb.co/WvdSB3vZ/guelson-removebg-preview-128x128.png",
      cidade: "Benguela",
    },
    clubeVisitante: {
      id: 12,
      nome: "Luanda City",
      shortName: "LDC",
      logo: "https://i.ibb.co/JjCzcZsT/images-removebg-preview.png",
      cidade: "Luanda",
    },
  },

  {
    id: 40,
    estado: "resultado",
    jornada: 5,
    data: "23 Fev 2026",
    hora: "17:00",
    placar: "2 - 0",
    canal: "TPA 1",
    arbitro: "Quim Teixeira",
    publico: "6.400",
    imagemFundo:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    clubeCasa: {
      id: 15,
      nome: "CD Lunda Sul",
      shortName: "DLS",
      logo: "https://i.ibb.co/KjKzvGzV/club-lunda-sul.png",
      cidade: "Lunda Sul",
    },
    clubeVisitante: {
      id: 16,
      nome: "1º de Maio",
      shortName: "1MA",
      logo: "https://i.ibb.co/Pz50pHMy/Estrela-Clube-Primeiro-de-Maio.png",
      cidade: "Benguela",
    },
  },
];

// ─── Helpers ────────────────────────────────────────────────────

/** Jogos da jornada 6 (próximos) */
export const proximosJogos = jogos.filter((j) => j.estado === "proximo");

/** Resultados recentes (jornada 5) */
export const resultadosRecentes = jogos.filter((j) => j.estado === "resultado");

/** Jogos ao vivo (nenhum por agora, mas a estrutura está pronta) */
export const jogosAoVivo = jogos.filter((j) => j.estado === "ao_vivo");

/** Todos os jogos ordenados: ao_vivo → proximo → resultado */
const ordemEstado: Record<JogoEstado, number> = { ao_vivo: 0, proximo: 1, resultado: 2 };
export const jogosPriorizados = [...jogos].sort(
  (a, b) => ordemEstado[a.estado] - ordemEstado[b.estado]
);