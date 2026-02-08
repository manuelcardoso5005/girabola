// app/clubes/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { objecto } from "@/src/data/data";
import LayoutPage from "@/src/components/Layout/LayoutPage";

export default function ClubDetailPage() {
  const params = useParams();
  const clubId = Number(params.id);

  const club = objecto.clubs.find((c) => c.id === clubId);
  const clubsById = Object.fromEntries(
    objecto.clubs.map((c) => [c.id, c])
  );


  if (!club) {
    return (
      <LayoutPage title="Erro" subtitle="">
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">Clube não encontrado.</p>
          <Link href="/clubes" className="text-blue-600 hover:underline">
            Voltar para clubes
          </Link>
        </div>
      </LayoutPage>
    );
  }

  const stats = objecto.clubStats.find((s) => s.club === clubId);

  return (
    <LayoutPage title={club.nome} subtitle={club.alcunha || club.completeName}>
      {/* Header do Clube */}
      <div 
        className="relative rounded-2xl overflow-hidden mb-8 shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${club.colors[0]} 0%, ${club.colors[1]} 100%)`
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white rounded-full p-6 shadow-2xl">
            <img 
              src={club.logo} 
              alt={club.nome} 
              className="w-32 h-32 md:w-40 md:h-40 object-contain" 
            />
          </div>
          <div className="text-center md:text-left text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
              {club.nome}
            </h1>
            {club.alcunha && (
              <p className="text-xl md:text-2xl mb-4 opacity-90">
                "{club.alcunha}"
              </p>
            )}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                {club.shortName}
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                {club.reputation}
              </span>
              {club.fundation && (
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  Fundado em {club.fundation}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Informações do Clube */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 rounded" style={{ backgroundColor: club.colors[0] }} />
            Informações do Clube
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <InfoItem label="Nome Completo" value={club.completeName} />
            <InfoItem label="Cidade" value={club.city} />
            <InfoItem label="Estádio" value={club.stadium} />
            <InfoItem label="Divisão" value={club.divisao} />
            {club.estatuto && <InfoItem label="Estatuto" value={club.estatuto} />}
            {club.fundation && <InfoItem label="Fundação" value={club.fundation} />}
            {club.capitao && <InfoItem label="Capitão" value={club.capitao} />}
            {club.Subcapitao && <InfoItem label="Vice-Capitão" value={club.Subcapitao} />}
            {club.continental && <InfoItem label="Competição Continental" value={club.continental} />}
          </div>

          {/* Cores do Clube */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cores Oficiais</h3>
            <div className="flex gap-3">
              {club.colors.map((color, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-12 h-12 rounded-lg shadow-md border-2 border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm text-gray-600 font-mono">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rivais e Derbis */}
          {(club.rivais.length > 0 || club.derbis.length > 0) && (
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Rivalidades</h3>
              {club.rivais.length > 0 && (
                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-2">Rivais:</p>
                  <div className="flex flex-wrap gap-2">
                    {club.rivais.map((rivalId, idx) => {
                      const rivalClub = clubsById[rivalId];

                      if (!rivalClub) return null;

                      return (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium"
                        >
                          <Link href={`/clubes/${rivalClub.id}`}>
                            {rivalClub.nome}
                          </Link>
                        </span>
                      );
                    })}

                  </div>
                </div>
              )}
              {club.derbis.length > 0 && (
                <div>
                  <p className="text-sm text-gray-600 mb-2">Derbis:</p>
                  <div className="flex flex-wrap gap-2">
                    {club.derbis.map((derby, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                      >
                        {derby}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Estatísticas */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Estatísticas</h2>
          
          {stats ? (
            <div className="space-y-4">
              <StatCard 
                label="Pontos" 
                value={stats.points} 
                bgColor="bg-green-100" 
                textColor="text-green-800"
                highlight
              />
              
              <div className="grid grid-cols-3 gap-2">
                <StatCard 
                  label="V" 
                  value={stats.wins} 
                  bgColor="bg-green-50" 
                  textColor="text-green-700"
                  small
                />
                <StatCard 
                  label="E" 
                  value={stats.draws} 
                  bgColor="bg-yellow-50" 
                  textColor="text-yellow-700"
                  small
                />
                <StatCard 
                  label="D" 
                  value={stats.losses} 
                  bgColor="bg-red-50" 
                  textColor="text-red-700"
                  small
                />
              </div>

              <div className="pt-4 border-t space-y-3">
                <StatRow label="Jogos" value={stats.jogos} />
                <StatRow label="Golos Marcados" value={stats.goalsFor} />
                <StatRow label="Golos Sofridos" value={stats.goalsAgainst} />
                <StatRow 
                  label="Diferença de Golos" 
                  value={stats.goalDifference > 0 ? `+${stats.goalDifference}` : stats.goalDifference}
                  valueColor={stats.goalDifference > 0 ? "text-green-600" : stats.goalDifference < 0 ? "text-red-600" : "text-gray-900"}
                />
              </div>

              {/* Gráfico de Eficiência */}
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Eficiência</p>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(stats.points / (stats.jogos * 3)) * 100}%`,
                      background: `linear-gradient(to right, ${club.colors[0]}, ${club.colors[1]})`
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {((stats.points / (stats.jogos * 3)) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              Sem estatísticas disponíveis
            </p>
          )}
        </div>
      </div>

      {/* Botão Voltar */}
      <div className="text-center">
        <Link 
          href="/clubes"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para Clubes
        </Link>
      </div>
    </LayoutPage>
  );
}

// Componentes auxiliares
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <p className="text-xs text-gray-600 mb-1">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function StatCard({ 
  label, 
  value, 
  bgColor, 
  textColor, 
  highlight = false,
  small = false 
}: { 
  label: string; 
  value: number; 
  bgColor: string; 
  textColor: string;
  highlight?: boolean;
  small?: boolean;
}) {
  return (
    <div className={`${bgColor} rounded-lg p-3 ${highlight ? 'ring-2 ring-offset-2 ring-green-500' : ''}`}>
      <p className={`text-xs ${textColor} font-medium mb-1`}>{label}</p>
      <p className={`${small ? 'text-xl' : 'text-3xl'} font-bold ${textColor}`}>{value}</p>
    </div>
  );
}

function StatRow({ 
  label, 
  value, 
  valueColor = "text-gray-900" 
}: { 
  label: string; 
  value: string | number;
  valueColor?: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-600">{label}</span>
      <span className={`font-bold ${valueColor}`}>{value}</span>
    </div>
  );
}