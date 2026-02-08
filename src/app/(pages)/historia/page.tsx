"use client";

import { useState } from "react";
import LayoutPage from "@/src/components/Layout/LayoutPage";
import { objecto } from "@/src/data/data";

interface EventoHistorico {
  ano: number;
  titulo: string;
  descricao: string;
  destaque?: boolean;
  imagem?: string;
  categoria: "fundacao" | "marco" | "campeao" | "internacional" | "modernizacao";
}

interface Campeao {
  ano: string;
  clube: number;
  pontos?: number;
  titulos: number;
}

export default function HistoriaPage() {
  const [filtroDecada, setFiltroDecada] = useState<number | "todos">("todos");
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("todos");

  const eventosHistoricos: EventoHistorico[] = [
    {
      ano: 1979,
      titulo: "Fundação do Girabola",
      descricao: "Após a independência de Angola em 1975, é criado o Campeonato Nacional de Futebol da I Divisão, oficialmente denominado 'Girabola'. O nome é uma homenagem à palanca-negra gigante, símbolo nacional de Angola. A primeira edição contou com 12 equipas de todo o país.",
      destaque: true,
      categoria: "fundacao",
    },
    {
      ano: 1979,
      titulo: "Primeiro Campeão",
      descricao: "O Primeiro de Agosto sagra-se o primeiro campeão nacional de Angola, iniciando uma dinastia que marcaria as primeiras décadas da competição. Este título inaugural foi celebrado em todo o país como um momento histórico do futebol angolano.",
      destaque: true,
      categoria: "campeao",
    },
    {
      ano: 1982,
      titulo: "Expansão da Competição",
      descricao: "O Girabola expande-se para 14 equipas, permitindo maior representatividade regional e o surgimento de novos clubes que marcariam a história da competição, como o Petro de Luanda e clubes das províncias.",
      categoria: "marco",
    },
    {
      ano: 1987,
      titulo: "Década Dourada do 1º de Agosto",
      descricao: "O Primeiro de Agosto domina o futebol angolano durante os anos 80, conquistando múltiplos títulos consecutivos e estabelecendo-se como uma das maiores potências do país. Este período ficou conhecido como a 'era verde e preta'.",
      categoria: "campeao",
    },
    {
      ano: 1992,
      titulo: "Início da Rivalidade Petro vs 1º de Agosto",
      descricao: "Consolida-se a maior rivalidade do futebol angolano entre Petro de Luanda e Primeiro de Agosto. Os 'Derbis de Luanda' tornam-se os jogos mais aguardados da época, atraindo multidões ao estádio da Cidadela.",
      destaque: true,
      categoria: "marco",
    },
    {
      ano: 1997,
      titulo: "Primeira Participação em Competições Africanas",
      descricao: "Clubes angolanos começam a participar regularmente nas competições da CAF (Liga dos Campeões e Taça CAF), elevando o nível técnico do campeonato e a exposição internacional do futebol angolano.",
      categoria: "internacional",
    },
    {
      ano: 2000,
      titulo: "Novo Milénio",
      descricao: "O Girabola entra no século XXI com reformas estruturais, melhorias nos estádios e aumento da cobertura mediática. A TPA passa a transmitir mais jogos em direto, aproximando o campeonato dos adeptos.",
      categoria: "modernizacao",
    },
    {
      ano: 2002,
      titulo: "Fim da Guerra Civil",
      descricao: "Com o fim da guerra civil em Angola, o Girabola ganha novo impulso. Equipas de todas as províncias podem finalmente participar regularmente, e o campeonato torna-se verdadeiramente nacional.",
      destaque: true,
      categoria: "marco",
    },
    {
      ano: 2007,
      titulo: "Profissionalização do Campeonato",
      descricao: "Implementação de medidas de profissionalização, incluindo regulamentos mais rigorosos de licenciamento de clubes, critérios de infraestruturas e gestão financeira. O Girabola moderniza-se para competir a nível continental.",
      categoria: "modernizacao",
    },
    {
      ano: 2010,
      titulo: "Sagrada Esperança - A Revelação",
      descricao: "O Sagrada Esperança, das Lundas, emerge como força competitiva, quebrando a hegemonia dos clubes de Luanda e Benguela. Este momento marca o início de maior competitividade regional no campeonato.",
      categoria: "campeao",
    },
    {
      ano: 2012,
      titulo: "Sucesso Continental do Recreativo do Libolo",
      descricao: "O Recreativo do Libolo torna-se o primeiro clube angolano a chegar à final da Liga dos Campeões Africanos, colocando o futebol angolano no mapa continental e inspirando uma nova geração.",
      destaque: true,
      categoria: "internacional",
    },
    {
      ano: 2016,
      titulo: "Expansão para 16 Equipas",
      descricao: "O Girabola expande-se para o formato atual de 16 equipas, permitindo mais jogos, maior visibilidade para clubes de diferentes regiões e aumento da competitividade geral do campeonato.",
      categoria: "marco",
    },
    {
      ano: 2018,
      titulo: "Novos Estádios e Infraestruturas",
      descricao: "Inauguração de novos estádios modernos em várias províncias, incluindo o renovado Estádio 11 de Novembro em Luanda. Melhoria significativa das condições de jogo e da experiência dos adeptos.",
      categoria: "modernizacao",
    },
    {
      ano: 2020,
      titulo: "Pandemia COVID-19",
      descricao: "O Girabola enfrenta a pandemia com adaptações: jogos sem público, protocolos sanitários rigorosos e calendários ajustados. O campeonato demonstra resiliência ao manter-se ativo durante períodos difíceis.",
      categoria: "marco",
    },
    {
      ano: 2022,
      titulo: "Digitalização e Transmissões HD",
      descricao: "Implementação de tecnologia de transmissão em alta definição e plataformas digitais. O Girabola torna-se mais acessível à diáspora angolana e aos adeptos internacionais através de streaming online.",
      categoria: "modernizacao",
    },
    {
      ano: 2024,
      titulo: "Petro de Luanda - Hegemonia Recente",
      descricao: "O Petro de Luanda conquista o título da época 2024/2025, consolidando-se como a equipa mais dominante da década de 2020 e acumulando recordes de títulos nacionais.",
      categoria: "campeao",
    },
    {
      ano: 2025,
      titulo: "45 Anos de História",
      descricao: "O Girabola celebra 45 anos de existência, consolidado como a principal competição desportiva de Angola e uma das ligas mais competitivas de África. O campeonato continua a revelar talentos que brilham em palcos internacionais.",
      destaque: true,
      categoria: "marco",
    },
  ];

  const campeoesPorClube = [
    {
      clube: 4, // Petro de Luanda
      titulos: 16,
      anos: ["1987", "1988", "1993", "1994", "1995", "1997", "1998", "2009", "2010", "2011", "2012", "2013", "2014", "2016", "2020", "2024"],
    },
    {
      clube: 3, // 1º de Agosto
      titulos: 13,
      anos: ["1979", "1980", "1981", "1982", "1983", "1984", "1990", "1991", "1996", "1999", "2006", "2016", "2018"],
    },
    {
      clube: 5, // Sagrada Esperança
      titulos: 4,
      anos: ["2005", "2015", "2017", "2021"],
    },
    {
      clube: 8, // Recreativo do Libolo
      titulos: 3,
      anos: ["2011", "2019", "2022"],
    },
    {
      clube: 9, // Interclube
      titulos: 2,
      anos: ["2001", "2008"],
    },
    {
      clube: 2, // Kabuscorp
      titulos: 1,
      anos: ["2007"],
    },
  ];

  const recordes = [
    {
      titulo: "Clube Mais Vitorioso",
      valor: "Petro de Luanda",
      detalhe: "16 títulos",
      icon: "🏆",
      color: "bg-yellow-500",
    },
    {
      titulo: "Maior Sequência de Títulos",
      valor: "1º de Agosto",
      detalhe: "6 títulos consecutivos (1979-1984)",
      icon: "🔥",
      color: "bg-red-500",
    },
    {
      titulo: "Melhor Ataque Histórico",
      valor: "102 golos",
      detalhe: "Petro de Luanda - 2013",
      icon: "⚽",
      color: "bg-green-500",
    },
    {
      titulo: "Melhor Defesa Histórica",
      valor: "8 golos sofridos",
      detalhe: "1º de Agosto - 1982",
      icon: "🛡️",
      color: "bg-blue-500",
    },
    {
      titulo: "Maior Público",
      valor: "60.000 espectadores",
      detalhe: "Petro vs 1º de Agosto - 1995",
      icon: "👥",
      color: "bg-purple-500",
    },
    {
      titulo: "Artilheiro Histórico",
      valor: "Akwá",
      detalhe: "187 golos (1997-2012)",
      icon: "👟",
      color: "bg-orange-500",
    },
  ];

  const decadas = [1970, 1980, 1990, 2000, 2010, 2020];

  const eventosFiltrados = eventosHistoricos.filter(evento => {
    const passaDecada = filtroDecada === "todos" || Math.floor(evento.ano / 10) * 10 === filtroDecada;
    const passaCategoria = categoriaFiltro === "todos" || evento.categoria === categoriaFiltro;
    return passaDecada && passaCategoria;
  });

  const getCategoriaInfo = (categoria: string) => {
    const categorias: Record<string, { label: string; color: string; icon: string }> = {
      fundacao: { label: "Fundação", color: "bg-purple-500", icon: "🏛️" },
      marco: { label: "Marco Histórico", color: "bg-blue-500", icon: "📍" },
      campeao: { label: "Campeões", color: "bg-yellow-500", icon: "🏆" },
      internacional: { label: "Internacional", color: "bg-green-500", icon: "🌍" },
      modernizacao: { label: "Modernização", color: "bg-indigo-500", icon: "🚀" },
    };
    return categorias[categoria] || categorias.marco;
  };

  return (
    <LayoutPage
      title="História do Girabola"
      subtitle="45 anos de paixão, glória e futebol angolano"
    >
      {/* Banner Introdutório */}
      <div className="bg-linear-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl p-8 md:p-12 text-white mb-12 shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            1979 - 2024
          </h2>
          <p className="text-xl md:text-2xl mb-6 opacity-95">
            45 Anos de História e Emoção
          </p>
          <p className="text-lg leading-relaxed opacity-90">
            Desde a sua fundação em 1979, o Girabola tem sido o palco principal do futebol angolano,
            revelando talentos, criando rivalidades épicas e unindo o país através da paixão pelo desporto.
            Uma competição que cresceu, modernizou-se e se consolidou como uma das mais importantes de África.
          </p>
        </div>
      </div>

      {/* Recordes e Estatísticas */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-yellow-500 rounded-full"></span>
          Recordes Históricos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recordes.map((recorde, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className={`${recorde.color} p-4 text-white`}>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{recorde.icon}</span>
                  <h3 className="font-bold text-lg">{recorde.titulo}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-2xl font-bold text-gray-900 mb-2">{recorde.valor}</p>
                <p className="text-sm text-gray-600">{recorde.detalhe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campeões por Clube */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-green-500 rounded-full"></span>
          Palmarés - Clubes Campeões
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-linear-to-r from-yellow-500 to-yellow-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Posição</th>
                  <th className="px-6 py-4 text-left font-bold">Clube</th>
                  <th className="px-6 py-4 text-center font-bold">Títulos</th>
                  <th className="px-6 py-4 text-left font-bold">Anos Conquistados</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {campeoesPorClube.map((campeao, idx) => {
                  const clube = objecto.clubs.find(c => c.id === campeao.clube);
                  return (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-2xl font-bold text-gray-900">
                          {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `${idx + 1}º`}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={clube?.logo}
                            alt={clube?.nome}
                            className="w-12 h-12 object-contain"
                          />
                          <div>
                            <p className="font-bold text-gray-900">{clube?.nome}</p>
                            <p className="text-sm text-gray-600">{clube?.city}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-800 rounded-full font-bold text-2xl">
                          {campeao.titulos}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {campeao.anos.map((ano, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold"
                            >
                              {ano}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Filtros da Timeline */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
          Linha do Tempo
        </h2>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filtro por Década */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filtrar por Década
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFiltroDecada("todos")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    filtroDecada === "todos"
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Todas
                </button>
                {decadas.map((decada) => (
                  <button
                    key={decada}
                    onClick={() => setFiltroDecada(decada)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      filtroDecada === decada
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {decada}s
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro por Categoria */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filtrar por Categoria
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCategoriaFiltro("todos")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    categoriaFiltro === "todos"
                      ? "bg-gray-800 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Todas
                </button>
                {["fundacao", "marco", "campeao", "internacional", "modernizacao"].map((cat) => {
                  const info = getCategoriaInfo(cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => setCategoriaFiltro(cat)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                        categoriaFiltro === cat
                          ? `${info.color} text-white shadow-lg`
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span>{info.icon}</span>
                      {info.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline de Eventos */}
      <div className="relative">
        {/* Linha vertical */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-red-500 via-yellow-500 to-red-500 h-full rounded-full"></div>

        <div className="space-y-12">
          {eventosFiltrados.map((evento, idx) => {
            const catInfo = getCategoriaInfo(evento.categoria);
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8`}
              >
                {/* Conteúdo */}
                <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                  <div
                    className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 ${
                      evento.destaque ? "ring-4 ring-yellow-400" : ""
                    }`}
                  >
                    {evento.destaque && (
                      <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold mb-3">
                        ⭐ Destaque
                      </span>
                    )}
                    <div className={`flex items-center gap-2 mb-3 ${isLeft ? "md:justify-end" : "md:justify-start"} justify-start`}>
                      <span className={`px-3 py-1 ${catInfo.color} text-white rounded-full text-sm font-semibold flex items-center gap-1`}>
                        <span>{catInfo.icon}</span>
                        {catInfo.label}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {evento.titulo}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {evento.descricao}
                    </p>
                  </div>
                </div>

                {/* Ano Central */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-linear-to-br from-red-600 to-yellow-500 rounded-full items-center justify-center shadow-xl z-10 border-4 border-white">
                  <span className="text-white font-bold text-lg">{evento.ano}</span>
                </div>

                {/* Ano Mobile */}
                <div className="md:hidden w-16 h-16 bg-linear-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                  <span className="text-white font-bold">{evento.ano}</span>
                </div>

                {/* Espaço vazio do outro lado */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>

      {eventosFiltrados.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <p className="text-gray-500 text-lg">
            Nenhum evento encontrado para os filtros selecionados.
          </p>
        </div>
      )}

      {/* Citação Final */}
      <div className="mt-16 bg-linear-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
        <svg className="w-16 h-16 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-2xl md:text-3xl font-bold mb-4 italic">
          "O Girabola é mais que um campeonato, é a alma do futebol angolano."
        </p>
        <p className="text-lg opacity-90">
          45 anos de história, paixão e glória
        </p>
      </div>
    </LayoutPage>
  );
}