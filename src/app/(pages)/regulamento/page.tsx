"use client";

import { useState } from "react";
import LayoutPage from "@/src/components/Layout/LayoutPage";
import { objecto } from "@/src/data/data";

interface RegulamentoSecao {
  id: number;
  titulo: string;
  icon: string;
  conteudo: RegulamentoItem[];
}

interface RegulamentoItem {
  artigo?: number;
  titulo: string;
  descricao: string;
  subitems?: string[];
}

export default function RegulamentoPage() {
  const [secaoAberta, setSecaoAberta] = useState<number | null>(1);

  const regulamento: RegulamentoSecao[] = [
    {
      id: 1,
      titulo: "Disposições Gerais",
      icon: "📋",
      conteudo: [
        {
          artigo: 1,
          titulo: "Âmbito de Aplicação",
          descricao: "O presente regulamento aplica-se a todas as competições oficiais organizadas pela Federação Angolana de Futebol, incluindo o Campeonato Nacional da I Divisão (Girabola).",
        },
        {
          artigo: 2,
          titulo: "Entidade Organizadora",
          descricao: "O Girabola é organizado pela Federação Angolana de Futebol (FAF), entidade máxima do futebol angolano, reconhecida pela FIFA e CAF.",
        },
        {
          artigo: 3,
          titulo: "Época Desportiva",
          descricao: `A época desportiva ${objecto.epoca} tem início em ${new Date(objecto.inicio).toLocaleDateString('pt-PT')} e término previsto para ${new Date(objecto.fim).toLocaleDateString('pt-PT')}.`,
        },
        {
          artigo: 4,
          titulo: "Participantes",
          descricao: `Participam no Girabola ${objecto.totalClubes} clubes, conforme aprovação da Assembleia Geral da FAF.`,
        },
      ],
    },
    {
      id: 2,
      titulo: "Sistema de Competição",
      icon: "🏆",
      conteudo: [
        {
          artigo: 5,
          titulo: "Formato da Competição",
          descricao: "O Girabola disputa-se em sistema de pontos corridos, com jogos de ida e volta entre todos os participantes.",
          subitems: [
            "Cada clube joga 30 partidas por época (15 em casa, 15 fora)",
            "Vitória: 3 pontos",
            "Empate: 1 ponto",
            "Derrota: 0 pontos",
          ],
        },
        {
          artigo: 6,
          titulo: "Critérios de Desempate",
          descricao: "Em caso de igualdade pontual, aplicam-se os seguintes critérios pela ordem:",
          subitems: [
            "1º - Confronto direto (pontos)",
            "2º - Diferença de golos no confronto direto",
            "3º - Golos marcados no confronto direto",
            "4º - Diferença geral de golos",
            "5º - Golos marcados no campeonato",
            "6º - Menor número de golos sofridos",
            "7º - Jogo de desempate em campo neutro",
          ],
        },
        {
          artigo: 7,
          titulo: "Apuramento do Campeão",
          descricao: "Será declarado campeão nacional o clube que, no final das 30 jornadas, somar o maior número de pontos.",
        },
      ],
    },
    {
      id: 3,
      titulo: "Qualificação Continental",
      icon: "🌍",
      conteudo: [
        {
          artigo: 8,
          titulo: "CAF Champions League",
          descricao: "Qualificam-se para a Liga dos Campeões Africanos os clubes classificados nas seguintes posições:",
          subitems: [
            "1º classificado - Fase de grupos (acesso direto)",
            "2º classificado - Ronda preliminar",
          ],
        },
        {
          artigo: 9,
          titulo: "CAF Confederation Cup",
          descricao: "Qualifica-se para a Taça CAF o clube classificado em 3º lugar no Girabola.",
        },
        {
          artigo: 10,
          titulo: "Requisitos de Licenciamento",
          descricao: "Os clubes qualificados devem obter a Licença CAF, cumprindo critérios desportivos, infraestruturais, administrativos, legais e financeiros estabelecidos pela CAF.",
        },
      ],
    },
    {
      id: 4,
      titulo: "Descida de Divisão",
      icon: "⬇️",
      conteudo: [
        {
          artigo: 11,
          titulo: "Clubes Despromovidos",
          descricao: "São despromovidos à Segunda Divisão Nacional os clubes classificados nas seguintes posições:",
          subitems: [
            "15º lugar - Despromovido direto",
            "16º lugar - Despromovido direto",
          ],
        },
        {
          artigo: 12,
          titulo: "Clubes Promovidos",
          descricao: "Sobem à I Divisão os dois primeiros classificados da Segunda Divisão Nacional, desde que cumpram os requisitos de licenciamento estabelecidos pela FAF.",
        },
      ],
    },
    {
      id: 5,
      titulo: "Calendário e Jogos",
      icon: "📅",
      conteudo: [
        {
          artigo: 13,
          titulo: "Calendário Oficial",
          descricao: "O calendário de jogos é elaborado pela FAF e comunicado aos clubes com antecedência mínima de 30 dias antes do início da competição.",
        },
        {
          artigo: 14,
          titulo: "Horários dos Jogos",
          descricao: "Os jogos realizam-se preferencialmente aos sábados e domingos, nos seguintes horários:",
          subitems: [
            "Sábados: 15h00, 16h00, 17h00, 18h00",
            "Domingos: 15h00, 16h00, 17h00",
            "A FAF pode autorizar outros horários por razões de transmissão televisiva ou outras",
          ],
        },
        {
          artigo: 15,
          titulo: "Alteração de Datas e Horários",
          descricao: "Qualquer alteração ao calendário oficial depende de autorização expressa da FAF, mediante pedido fundamentado apresentado com 15 dias de antecedência.",
        },
        {
          artigo: 16,
          titulo: "Não Comparência",
          descricao: "O clube que não comparecer a um jogo oficial sem justificação aceite pela FAF:",
          subitems: [
            "Perde o jogo por 3-0 (ou pelo resultado mais desfavorável se já estiver a perder)",
            "É multado em valor a definir pelo Conselho de Disciplina",
            "Pode sofrer outras sanções disciplinares",
          ],
        },
      ],
    },
    {
      id: 6,
      titulo: "Jogadores e Inscrições",
      icon: "👥",
      conteudo: [
        {
          artigo: 17,
          titulo: "Inscrição de Jogadores",
          descricao: "Cada clube pode inscrever no máximo 30 jogadores para a competição, com duas janelas de transferências:",
          subitems: [
            "1ª Janela: Antes do início da época",
            "2ª Janela: Período de inverno (meio da época)",
          ],
        },
        {
          artigo: 18,
          titulo: "Jogadores Estrangeiros",
          descricao: "Cada clube pode ter no máximo 5 jogadores estrangeiros inscritos, podendo utilizar até 3 em simultâneo em cada jogo.",
        },
        {
          artigo: 19,
          titulo: "Ficha de Jogo",
          descricao: "A ficha de jogo pode incluir:",
          subitems: [
            "11 jogadores titulares",
            "7 jogadores suplentes",
            "Até 5 substituições por jogo",
          ],
        },
        {
          artigo: 20,
          titulo: "Elegibilidade",
          descricao: "Um jogador só pode participar em jogos oficiais se estiver devidamente inscrito e não estiver suspenso ou impedido de jogar.",
        },
      ],
    },
    {
      id: 7,
      titulo: "Arbitragem",
      icon: "🎽",
      conteudo: [
        {
          artigo: 21,
          titulo: "Nomeação de Árbitros",
          descricao: "A Comissão de Arbitragem da FAF é responsável pela designação dos árbitros para todos os jogos do Girabola.",
        },
        {
          artigo: 22,
          titulo: "Equipa de Arbitragem",
          descricao: "Cada jogo é dirigido por uma equipa composta por:",
          subitems: [
            "1 Árbitro Principal",
            "2 Árbitros Assistentes",
            "1 Quarto Árbitro",
            "Sistema VAR (quando disponível)",
          ],
        },
        {
          artigo: 23,
          titulo: "Relatórios",
          descricao: "O árbitro deve apresentar relatório detalhado de cada jogo no prazo máximo de 24 horas após o término da partida.",
        },
      ],
    },
    {
      id: 8,
      titulo: "Disciplina",
      icon: "⚖️",
      conteudo: [
        {
          artigo: 24,
          titulo: "Cartões Amarelos",
          descricao: "Cumprimento automático de suspensão:",
          subitems: [
            "3 cartões amarelos = 1 jogo de suspensão",
            "6 cartões amarelos = 2 jogos de suspensão",
            "9 cartões amarelos = 3 jogos de suspensão",
            "Os cartões amarelos prescrevem no final da época",
          ],
        },
        {
          artigo: 25,
          titulo: "Cartão Vermelho Direto",
          descricao: "Suspensão automática de no mínimo 1 jogo, podendo ser agravada pelo Conselho de Disciplina conforme a gravidade da infração.",
        },
        {
          artigo: 26,
          titulo: "Duplo Amarelo",
          descricao: "A expulsão por acumulação de dois cartões amarelos no mesmo jogo resulta em suspensão automática de 1 jogo.",
        },
        {
          artigo: 27,
          titulo: "Procedimento Disciplinar",
          descricao: "O Conselho de Disciplina da FAF tem competência para:",
          subitems: [
            "Aplicar sanções por infrações disciplinares",
            "Apreciar recursos apresentados pelos clubes",
            "Determinar multas e suspensões adicionais",
            "Analisar casos de violência, racismo e discriminação",
          ],
        },
      ],
    },
    {
      id: 9,
      titulo: "Infraestruturas",
      icon: "🏟️",
      conteudo: [
        {
          artigo: 28,
          titulo: "Estádios Homologados",
          descricao: "Todos os clubes devem disputar os seus jogos em casa em estádios homologados pela FAF, com condições mínimas de:",
          subitems: [
            "Capacidade mínima de 5.000 espectadores",
            "Iluminação adequada para jogos noturnos",
            "Vestiários para equipas e árbitros",
            "Sistema de segurança e emergência",
            "Área de imprensa e transmissão",
          ],
        },
        {
          artigo: 29,
          titulo: "Manutenção do Relvado",
          descricao: "O clube mandante é responsável por garantir que o campo de jogo esteja em condições adequadas, conforme inspeção realizada pelo delegado de jogo.",
        },
        {
          artigo: 30,
          titulo: "Segurança",
          descricao: "O clube mandante deve assegurar condições de segurança para jogadores, árbitros, adeptos e demais intervenientes, em conformidade com as normas estabelecidas pelas autoridades competentes.",
        },
      ],
    },
    {
      id: 10,
      titulo: "Disposições Finais",
      icon: "📄",
      conteudo: [
        {
          artigo: 31,
          titulo: "Casos Omissos",
          descricao: "Os casos não previstos neste regulamento serão resolvidos pela Direção da FAF, aplicando-se subsidiariamente as Leis do Jogo da FIFA e os regulamentos da CAF.",
        },
        {
          artigo: 32,
          titulo: "Alterações ao Regulamento",
          descricao: "Qualquer alteração a este regulamento deve ser aprovada pela Assembleia Geral da FAF e comunicada a todos os clubes participantes.",
        },
        {
          artigo: 33,
          titulo: "Entrada em Vigor",
          descricao: `O presente regulamento entra em vigor no início da época ${objecto.epoca} e mantém-se válido até ao término da mesma.`,
        },
      ],
    },
  ];

  const toggleSecao = (id: number) => {
    setSecaoAberta(secaoAberta === id ? null : id);
  };

  return (
    <LayoutPage
      title="Regulamento do Girabola"
      subtitle={`Época ${objecto.epoca} - Conheça todas as regras da competição`}
    >
      {/* Banner de Download */}
      <div className="bg-linear-to-r from-red-600 to-yellow-500 rounded-xl p-6 mb-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Regulamento Geral da FAF</h3>
              <p className="text-sm opacity-90">
                Documento oficial completo em formato PDF
              </p>
            </div>
          </div>
          <a
            href="https://web.archive.org/web/20161101085000/http://www.fafutebol-angola.og.ao/Regulamentos/regulamentogeral.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
            >

            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Baixar PDF Completo
          </a>
        </div>
      </div>

      {/* Índice Rápido */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Índice Rápido</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
          {regulamento.map((secao) => (
            <button
              key={secao.id}
              onClick={() => {
                toggleSecao(secao.id);
                document.getElementById(`secao-${secao.id}`)?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left group"
            >
              <span className="text-2xl">{secao.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-red-600 transition-colors">
                  {secao.titulo}
                </p>
                <p className="text-xs text-gray-500">
                  {secao.conteudo.length} artigos
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo do Regulamento */}
      <div className="space-y-4">
        {regulamento.map((secao) => (
          <div
            key={secao.id}
            id={`secao-${secao.id}`}
            className="bg-white rounded-xl shadow-md overflow-hidden scroll-mt-4"
          >
            {/* Header da Seção */}
            <button
              onClick={() => toggleSecao(secao.id)}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-2xl">
                  {secao.icon}
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-bold text-gray-900">
                    {secao.titulo}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {secao.conteudo.length} {secao.conteudo.length === 1 ? 'artigo' : 'artigos'}
                  </p>
                </div>
              </div>
              <svg
                className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                  secaoAberta === secao.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Conteúdo da Seção */}
            {secaoAberta === secao.id && (
              <div className="border-t border-gray-200 p-6 space-y-6 animate-slideDown">
                {secao.conteudo.map((item) => (
                  <div
                    key={item.artigo}
                    className="border-l-4 border-red-600 pl-6 py-2"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      {item.artigo && (
                        <span className="inline-flex items-center justify-center min-w-15 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                          Art. {item.artigo}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.titulo}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {item.descricao}
                    </p>
                    {item.subitems && item.subitems.length > 0 && (
                      <ul className="space-y-2 mt-3">
                        {item.subitems.map((subitem, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="text-red-600 font-bold mt-1">•</span>
                            <span className="flex-1">{subitem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Informação Adicional */}
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
        <div className="flex gap-3">
          <svg className="w-6 h-6 text-blue-600 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Nota Importante</h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              Este regulamento apresentado é uma versão resumida e adaptada para facilitar a consulta. 
              Para informações oficiais e completas, consulte o documento PDF oficial da Federação Angolana de Futebol. 
              Em caso de dúvidas ou conflitos de interpretação, prevalece sempre o regulamento oficial publicado pela FAF.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </LayoutPage>
  );
}