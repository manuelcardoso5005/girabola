export interface Comunicado {
  id: number;
  titulo: string;
  subtitulo: string;
  conteudo: string;
}

export interface Epoca {
  id: number;
  nome: string;
  comunicados: Comunicado[];
}

export const epocas: Epoca[] = [
  {
    id: 1,
    nome: "2021 - 2021",
    comunicados: [
      {
        id: 1,
        titulo: "Comunicado Oficial",
        subtitulo: "Início da época desportiva",
        conteudo: "Detalhes completos sobre o início da época 2021."
      },
      {
        id: 2,
        titulo: "Comunicado Oficial",
        subtitulo: "Alterações no regulamento",
        conteudo: "Novas regras aplicáveis à época 2021."
      }
    ]
  },

  {
    id: 2,
    nome: "Época 2022",
    comunicados: [
      {
        id: 3,
        titulo: "Comunicado Oficial",
        subtitulo: "Novas inscrições",
        conteudo: "Processo de inscrição atualizado para 2022."
      },
      {
        id: 4,
        titulo: "Comunicado Oficial",
        subtitulo: "Atualização de quotas",
        conteudo: "Revisão dos valores de quotas."
      }
    ]
  },

  {
    id: 3,
    nome: "Época 2023",
    comunicados: [
      {
        id: 5,
        titulo: "Comunicado Oficial",
        subtitulo: "Calendário oficial",
        conteudo: "Calendário completo da época 2023."
      }
    ]
  },

  {
    id: 4,
    nome: "Época 2024",
    comunicados: [
      {
        id: 6,
        titulo: "Comunicado Oficial",
        subtitulo: "Nova equipa técnica",
        conteudo: "Apresentação da equipa técnica 2024."
      }
    ]
  },

  {
    id: 5,
    nome: "Época 2025",
    comunicados: [
      {
        id: 7,
        titulo: "Comunicado Oficial",
        subtitulo: "Expansão das modalidades",
        conteudo: "Introdução de novas modalidades."
      }
    ]
  },

  {
    id: 6,
    nome: "Época 2026",
    comunicados: [
      {
        id: 8,
        titulo: "Comunicado Oficial",
        subtitulo: "Modernização digital",
        conteudo: "Lançamento de novas plataformas digitais."
      }
    ]
  },

  {
    id: 7,
    nome: "Época 2027",
    comunicados: [
      {
        id: 9,
        titulo: "Comunicado Oficial",
        subtitulo: "Reestruturação interna",
        conteudo: "Mudanças estruturais na organização."
      }
    ]
  },

  {
    id: 8,
    nome: "Época 2028",
    comunicados: [
      {
        id: 10,
        titulo: "Comunicado Oficial",
        subtitulo: "Novo centro de treinos",
        conteudo: "Inauguração do novo centro desportivo."
      }
    ]
  },

  {
    id: 9,
    nome: "Época 2029",
    comunicados: [
      {
        id: 11,
        titulo: "Comunicado Oficial",
        subtitulo: "Plano estratégico",
        conteudo: "Plano estratégico definido para os próximos anos."
      }
    ]
  },

  {
    id: 10,
    nome: "Época 2030",
    comunicados: [
      {
        id: 12,
        titulo: "Comunicado Oficial",
        subtitulo: "Celebração histórica",
        conteudo: "Comemoração especial do marco histórico do clube."
      }
    ]
  }
];
