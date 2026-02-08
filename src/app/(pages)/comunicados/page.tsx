"use client";

import { useState } from "react";
import LayoutPage from "@/src/components/Layout/LayoutPage";
import { objecto } from "@/src/data/data";

// Tipos de comunicados
type ComunicadoCategoria = "oficial" | "disciplinar" | "arbitragem" | "competicao" | "geral";

interface Comunicado {
  id: number;
  titulo: string;
  categoria: ComunicadoCategoria;
  data: string;
  conteudo: string;
  destaque: boolean;
  anexos?: { nome: string; url: string }[];
}

export default function ComunicadosPage() {
  const [categoriaFiltro, setCategoriaFiltro] = useState<ComunicadoCategoria | "todos">("todos");
  const [comunicadoSelecionado, setComunicadoSelecionado] = useState<Comunicado | null>(null);

  // Dados dos comunicados (você pode mover isso para o objeto principal depois)
  const comunicados: Comunicado[] = [
    {
      id: 1,
      titulo: "Calendário Oficial da Época 2025/2026",
      categoria: "oficial",
      data: "2026-01-15",
      destaque: true,
      conteudo: `A Federação Angolana de Futebol (FAF) comunica que o calendário oficial da época 2025/2026 do Girabola foi aprovado e será divulgado nos próximos dias.

A competição terá início no dia 25 de Janeiro de 2026 e contará com a participação de 16 clubes distribuídos por todo o território nacional.

Todas as jornadas serão disputadas aos sábados e domingos, com jogos a serem transmitidos pela TPA e ZAP Viva.

Para mais informações, os clubes devem contactar a secretaria da FAF.`,
      anexos: [
        { nome: "Calendário_Completo_2025-2026.pdf", url: "#" },
        { nome: "Regulamento_Competicao.pdf", url: "#" }
      ]
    },
    {
      id: 2,
      titulo: "Suspensão do Jogador Tiago Azulão por 2 Jogos",
      categoria: "disciplinar",
      data: "2026-02-10",
      destaque: false,
      conteudo: `O Conselho de Disciplina da FAF decidiu suspender o jogador Tiago Azulão (Petro de Luanda) por 2 jogos, na sequência da expulsão ocorrida na jornada 4 do Girabola.

O jogador foi expulso aos 78 minutos por acumulação de cartões amarelos e, após análise do relatório do árbitro, foi determinada a suspensão adicional de mais um jogo por comportamento antidesportivo.

A suspensão terá efeito imediato, impedindo a participação do atleta nas jornadas 6 e 7.

O clube pode apresentar recurso no prazo de 48 horas.`,
      anexos: [
        { nome: "Decisao_Disciplinar_023.pdf", url: "#" }
      ]
    },
    {
      id: 3,
      titulo: "Designação de Árbitros para a Jornada 6",
      categoria: "arbitragem",
      data: "2026-02-26",
      destaque: true,
      conteudo: `A Comissão de Arbitragem da FAF designou os seguintes árbitros para a jornada 6 do Girabola:

- Wiliete vs Petro de Luanda - Roberto Marques (Árbitro Principal)
- Kabuscorp vs 1º de Agosto - Samuel Duarte (Árbitro Principal)
- Sagrada Esperança vs Recreativo do Libolo - Tomás Araújo (Árbitro Principal)
- Desportivo da Huíla vs Académica do Lobito - Ulisses Ramos (Árbitro Principal)

Todos os árbitros designados são de categoria FIFA e possuem vasta experiência em competições nacionais e internacionais.

As equipas de arbitragem completas (assistentes e 4º árbitro) serão comunicadas 48 horas antes de cada jogo.`,
    },
    {
      id: 4,
      titulo: "Alteração de Horário do Jogo Interclube vs Luanda City",
      categoria: "competicao",
      data: "2026-02-20",
      destaque: false,
      conteudo: `Por solicitação do Interclube e com concordância do Luanda City, a FAF informa que o jogo da jornada 6 entre estas equipas foi reagendado.

Dados originais:
- Data: 02/03/2026
- Horário: 16:00
- Estádio: 22 de Junho

Novos dados:
- Data: 02/03/2026
- Horário: 18:30
- Estádio: 22 de Junho

A alteração foi motivada por questões de logística e segurança, garantindo melhores condições para a realização do encontro.

Os bilhetes já adquiridos mantêm-se válidos para o novo horário.`,
    },
    {
      id: 5,
      titulo: "Protocolo de Colaboração com a CAF",
      categoria: "oficial",
      data: "2026-02-05",
      destaque: true,
      conteudo: `A Federação Angolana de Futebol (FAF) assinou um protocolo de colaboração com a Confederação Africana de Futebol (CAF) para o desenvolvimento do futebol angolano.

O acordo prevê:
- Formação de árbitros e treinadores
- Apoio técnico para modernização de infraestruturas
- Programas de desenvolvimento de base
- Intercâmbio de experiências com outras federações africanas

Este protocolo reforça o compromisso da FAF em elevar o nível do futebol nacional e preparar melhor os clubes angolanos para as competições continentais.

A cerimónia de assinatura decorreu na sede da CAF, no Cairo, com a presença do Presidente da FAF e do Secretário-Geral da CAF.`,
      anexos: [
        { nome: "Protocolo_FAF_CAF_2026.pdf", url: "#" }
      ]
    },
    {
      id: 6,
      titulo: "Multa ao Bravos do Maquis por Atraso no Início do Jogo",
      categoria: "disciplinar",
      data: "2026-02-18",
      destaque: false,
      conteudo: `O Conselho de Disciplina da FAF aplicou uma multa de 150.000 Kz (cento e cinquenta mil kwanzas) ao Bravos do Maquis pelo atraso de 15 minutos no início do jogo da jornada 4 contra o 1º de Agosto.

Segundo o relatório do delegado de jogo, o atraso deveu-se a problemas na preparação do equipamento da equipa visitante.

O clube foi notificado e tem 10 dias úteis para efetuar o pagamento da multa.

Esta é a segunda infração do clube na época atual. Uma nova ocorrência resultará em penalizações mais severas, incluindo possível perda de pontos.`,
    },
    {
      id: 7,
      titulo: "Novos Critérios de Classificação para Competições Africanas",
      categoria: "competicao",
      data: "2026-01-28",
      destaque: false,
      conteudo: `A FAF informa que, a partir da época 2025/2026, os critérios de classificação para as competições africanas foram atualizados:

CAF Champions League (2 vagas):
- 1º e 2º classificados do Girabola

CAF Confederation Cup (1 vaga):
- 3º classificado do Girabola
- Em caso de o vencedor da Taça de Angola estar entre os 3 primeiros, a vaga passa para o 4º classificado

Os clubes qualificados devem:
- Possuir licença CAF válida
- Cumprir todos os requisitos financeiros e administrativos
- Ter infraestruturas aprovadas pela CAF

A FAF prestará todo o apoio necessário aos clubes classificados para garantir o sucesso nas competições continentais.`,
    },
    {
      id: 8,
      titulo: "Campanha de Fair Play e Respeito no Futebol",
      categoria: "geral",
      data: "2026-02-12",
      destaque: true,
      conteudo: `A FAF lança a campanha "Futebol com Respeito" para promover o fair play e combater a violência nos estádios durante a época 2025/2026.

Objetivos da campanha:
- Reduzir incidentes de violência entre adeptos
- Promover respeito pelos árbitros e adversários
- Educar jovens atletas sobre valores do desporto
- Envolver famílias e comunidades no futebol

Ações previstas:
- Sessões de sensibilização em todos os clubes
- Material educativo distribuído nos estádios
- Prémios para clubes com melhor comportamento
- Penalizações severas para comportamentos violentos

Contamos com a colaboração de todos os clubes, jogadores, treinadores e adeptos para fazer do Girabola uma competição exemplar.`,
    },
  ];

  const categorias = [
    { id: "todos", label: "Todos", icon: "📋", color: "bg-gray-600" },
    { id: "oficial", label: "Oficiais", icon: "📢", color: "bg-blue-600" },
    { id: "disciplinar", label: "Disciplinares", icon: "⚖️", color: "bg-red-600" },
    { id: "arbitragem", label: "Arbitragem", icon: "🎽", color: "bg-yellow-600" },
    { id: "competicao", label: "Competição", icon: "🏆", color: "bg-green-600" },
    { id: "geral", label: "Gerais", icon: "ℹ️", color: "bg-purple-600" },
  ];

  const comunicadosFiltrados = categoriaFiltro === "todos"
    ? comunicados
    : comunicados.filter(c => c.categoria === categoriaFiltro);

  const comunicadosOrdenados = [...comunicadosFiltrados].sort((a, b) => {
    if (a.destaque && !b.destaque) return -1;
    if (!a.destaque && b.destaque) return 1;
    return new Date(b.data).getTime() - new Date(a.data).getTime();
  });

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-PT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoriaInfo = (categoria: ComunicadoCategoria) => {
    return categorias.find(c => c.id === categoria);
  };

  return (
    <LayoutPage
      title="Comunicados Oficiais"
      subtitle={`Época ${objecto.epoca} - Mantenha-se informado sobre todas as decisões e novidades`}
    >
      {/* Filtros */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaFiltro(cat.id as any)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                categoriaFiltro === cat.id
                  ? `${cat.color} text-white shadow-lg scale-105`
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Comunicados */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comunicadosOrdenados.map((comunicado) => {
          const catInfo = getCategoriaInfo(comunicado.categoria);
          return (
            <div
              key={comunicado.id}
              onClick={() => setComunicadoSelecionado(comunicado)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
            >
              {/* Header do Card */}
              <div className={`${catInfo?.color} p-4 text-white relative`}>
                {comunicado.destaque && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                      ⭐ Destaque
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{catInfo?.icon}</span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase opacity-90 mb-1">
                      {catInfo?.label}
                    </p>
                    <h3 className="font-bold text-lg line-clamp-2 group-hover:line-clamp-none transition-all">
                      {comunicado.titulo}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {formatarData(comunicado.data)}
                </div>

                <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                  {comunicado.conteudo}
                </p>

                {comunicado.anexos && comunicado.anexos.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-2">
                      📎 {comunicado.anexos.length} anexo(s)
                    </p>
                  </div>
                )}

                <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                  Ler mais
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {comunicadosOrdenados.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <p className="text-gray-500 text-lg">Nenhum comunicado encontrado nesta categoria.</p>
        </div>
      )}

      {/* Modal de Detalhes */}
      {comunicadoSelecionado && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setComunicadoSelecionado(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className={`${getCategoriaInfo(comunicadoSelecionado.categoria)?.color} p-6 text-white sticky top-0 z-10`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{getCategoriaInfo(comunicadoSelecionado.categoria)?.icon}</span>
                    <span className="text-sm font-semibold uppercase opacity-90">
                      {getCategoriaInfo(comunicadoSelecionado.categoria)?.label}
                    </span>
                    {comunicadoSelecionado.destaque && (
                      <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full ml-2">
                        ⭐ Destaque
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold">
                    {comunicadoSelecionado.titulo}
                  </h2>
                </div>
                <button
                  onClick={() => setComunicadoSelecionado(null)}
                  className="ml-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {formatarData(comunicadoSelecionado.data)}
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6">
              <div className="prose prose-lg max-w-none">
                {comunicadoSelecionado.conteudo.split('\n').map((paragrafo, idx) => (
                  paragrafo.trim() && (
                    <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                      {paragrafo}
                    </p>
                  )
                ))}
              </div>

              {/* Anexos */}
              {comunicadoSelecionado.anexos && comunicadoSelecionado.anexos.length > 0 && (
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                    </svg>
                    Documentos Anexos
                  </h3>
                  <div className="space-y-2">
                    {comunicadoSelecionado.anexos.map((anexo, idx) => (
                        <a
                            key={idx}
                            href={anexo.url}
                            className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                        >
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                            </div>

                            <div className="flex-1">
                            <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {anexo.nome}
                            </p>
                            <p className="text-xs text-gray-500">Clique para fazer download</p>
                            </div>

                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                        ))}

                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="mt-6 pt-6 border-t flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Comunicado #{comunicadoSelecionado.id}
                </p>
                <button
                  onClick={() => setComunicadoSelecionado(null)}
                  className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
      `}</style>
    </LayoutPage>
  );
}