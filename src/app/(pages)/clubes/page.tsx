"use client";

import Link from "next/link";
import { objecto } from "@/src/data/data";
import LayoutPage from "@/src/components/Layout/LayoutPage";

export default function ClubesPage() {
  return (
    <LayoutPage
      title="Clubes do Girabola"
      subtitle="Todos os clubes que participam na época actual"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {objecto.clubs.map((club) => (
          <Link
            key={club.id}
            href={`/clubes/${club.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Header com cores do clube */}
            <div 
              className="h-2 flex"
              style={{
                background: `linear-gradient(to right, ${club.colors[0]} 50%, ${club.colors[1]} 50%)`
              }}
            />
            
            {/* Conteúdo principal */}
            <div className="p-5">
              {/* Logo e nome */}
              <div className="flex items-center gap-4 mb-4">
                <div className="shrink-0">
                  <img
                    src={club.logo}
                    alt={club.nome}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-lg text-gray-900 mb-1 truncate">
                    {club.nome}
                  </h2>
                  <p className="text-sm font-medium text-gray-600">
                    {club.shortName}
                  </p>
                </div>
              </div>

              {/* Informações adicionais */}
              <div className="space-y-2 border-t pt-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Cidade:</span>
                  <span className="font-medium text-gray-900">{club.city}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Estádio:</span>
                  <span className="font-medium text-gray-900 truncate ml-2">
                    {club.stadium}
                  </span>
                </div>

                {club.alcunha && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Alcunha:</span>
                    <span className="font-medium text-gray-900 truncate ml-2">
                      {club.alcunha}
                    </span>
                  </div>
                )}

                {club.fundation && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Fundação:</span>
                    <span className="font-medium text-gray-900">{club.fundation}</span>
                  </div>
                )}
              </div>

              {/* Badge de reputação */}
              <div className="mt-4 pt-3 border-t">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {club.reputation}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </LayoutPage>
  );
}