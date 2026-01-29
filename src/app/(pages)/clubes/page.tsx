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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {objecto.clubs.map((club) => (
          <Link
            key={club.id}
            href={`/clubes/${club.id}`}
            className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-xl transition-shadow"
          >
            <img
              src={club.logo}
              alt={club.nome}
              className="w-16 h-16 object-contain"
            />
            <div>
              {/* Texto escuro para contraste no fundo branco */}
              <h2 className="font-semibold text-lg text-gray-900">{club.nome}</h2>
              <p className="text-sm text-gray-700">{club.city}</p>
            </div>
          </Link>
        ))}
      </div>
    </LayoutPage>
  );
}
