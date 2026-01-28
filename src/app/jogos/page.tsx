"use client";

import { objecto } from "@/src/data/data";
import LayoutPage from "@/src/components/LayoutPage";

export default function Jogos() {
  const clubeMap = Object.fromEntries(
    objecto.clubs.map((c) => [
      c.id,
      { nome: c.nome, logo: c.logo, stadium: c.stadium, city: c.city }
    ])
  );

  const jogos = objecto.calendar.flatMap((rodada) =>
    rodada.jogos.map((jogo) => ({
      ...jogo,
      jornada: rodada.jornada,
      casaNome: typeof jogo.casa === "number" ? clubeMap[jogo.casa].nome : jogo.casa,
      foraNome: typeof jogo.fora === "number" ? clubeMap[jogo.fora].nome : jogo.fora,
      casaLogo: typeof jogo.casa === "number" ? clubeMap[jogo.casa].logo : undefined,
      foraLogo: typeof jogo.fora === "number" ? clubeMap[jogo.fora].logo : undefined,
      estadio: typeof jogo.casa === "number" ? clubeMap[jogo.casa].stadium : "Estádio a definir",
      cidade: typeof jogo.casa === "number" ? clubeMap[jogo.casa].city : undefined,
    }))
  );

  const jogosFuturos = jogos.filter((j) => !j.resultado);

  return (
    <LayoutPage title="Próximos Jogos" subtitle="Confira os jogos agendados" extraHeader={"Jogos em direto"}>
      {jogosFuturos.length > 0 ? (
        <div className="space-y-5">
          {jogosFuturos.map((jogo) => (
            <div
              key={jogo.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
            >
              {/* Cabeçalho do Card */}
              <div className="bg-linear-to-r from-slate-700 to-slate-600 px-6 py-3">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">{jogo.estadio || "Estádio a definir"}</p>
                      <p className="text-xs text-slate-300">{jogo.cidade || "Cidade"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Jornada */}
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-slate-200">
                        Jornada: <span className="font-bold text-white">{jogo.jornada}</span>
                      </span>
                    </div>

                    {/* Árbitro */}
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-slate-200">
                        Árbitro: <span className="font-medium text-white">{jogo.arbitro || "A definir"}</span>
                      </span>
                    </div>

                    {/* Status */}
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                      AGENDADO
                    </span>
                  </div>
                </div>
              </div>

              {/* Corpo do Card - Confronto */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  {/* Casa */}
                  <div className="flex items-center gap-4 flex-1">
                    {jogo.casaLogo && (
                      <div className="bg-linear-to-br from-slate-50 to-slate-100 p-3 rounded-xl shadow-md border border-slate-200">
                        <img src={jogo.casaLogo} alt={jogo.casaNome} className="w-14 h-14 object-contain" />
                      </div>
                    )}
                    <div>
                      <span className="font-bold text-slate-800 text-xl block">{jogo.casaNome}</span>
                      <span className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Casa
                      </span>
                    </div>
                  </div>

                  {/* Data e Hora */}
                  <div className="px-8 text-center">
                    <div className="bg-linear-to-br from-emerald-50 to-emerald-100 px-8 py-4 rounded-2xl border-2 border-emerald-200">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-semibold text-emerald-800">
                          {jogo.data || "Data a definir"}
                        </p>
                      </div>
                      {jogo.hora && (
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-2xl font-bold text-emerald-900">{jogo.hora}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Fora */}
                  <div className="flex items-center gap-4 flex-1 justify-end">
                    <div className="text-right">
                      <span className="font-bold text-slate-800 text-xl block">{jogo.foraNome}</span>
                      <span className="text-sm text-slate-500 flex items-center gap-1 justify-end mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                        Visitante
                      </span>
                    </div>
                    {jogo.foraLogo && (
                      <div className="bg-linear-to-br from-slate-50 to-slate-100 p-3 rounded-xl shadow-md border border-slate-200">
                        <img src={jogo.foraLogo} alt={jogo.foraNome} className="w-14 h-14 object-contain" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Rodapé do Card - Informações Adicionais */}
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-200">
                <div className="flex items-center justify-between text-sm">
                  {/* Transmissão */}
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>
                      Transmissão: <span className="font-semibold text-slate-800">
                        {jogo.transmissao || "TPA 1"}
                      </span>
                    </span>
                  </div>

                  {/* Previsão do Tempo */}
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <span>
                      Previsão: <span className="font-semibold text-slate-800">
                        {jogo.clima || "Ensolarado"}
                      </span>
                    </span>
                  </div>

                  {/* Ingressos */}
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                    <span>
                      Ingressos: <span className="font-semibold text-emerald-700">
                        Disponíveis
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-slate-500 text-lg font-medium">Nenhum jogo futuro disponível.</p>
          <p className="text-slate-400 text-sm mt-2">Aguarde a divulgação dos próximos jogos.</p>
        </div>
      )}
    </LayoutPage>
  );
}