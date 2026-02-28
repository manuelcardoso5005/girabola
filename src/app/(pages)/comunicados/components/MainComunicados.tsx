"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { epocas } from "@/src/data/comunicados";
import EpocasScroller from "./EpocasScroller";


export default function MainComunicados() {
  const router = useRouter();


const [selectedEpocaId, setSelectedEpocaId] = useState(epocas[0].id);

const selectedEpoca = epocas.find(e => e.id === selectedEpocaId);
const comunicados = selectedEpoca?.comunicados ?? [];
  return (
    <main className="lg:col-span-3 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-800">
          Comunicados
        </h1>
      </div>

      {/* Épocas */}
      <div className="flex items-center gap-2 overflow-x-auto py-2">
        {epocas.map((epoca) => (
          <EpocasScroller
            selectedEpocaId={selectedEpocaId}
            setSelectedEpocaId={setSelectedEpocaId}
          />
        ))}
      </div>

      {/* Lista */}
      <div className="space-y-4">
        {comunicados.map((comunicado) => (
          <div
            key={comunicado.id}
            onClick={() =>
              router.push(
                `/comunicados/${comunicado.id}?epoca=${selectedEpoca}`
              )
            }
            className="bg-gray-100/20 rounded-2xl p-4 hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-between gap-4"
          >
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-xl">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
            </div>

            <div className="flex-1">
              <p className="font-semibold text-slate-800">
                {comunicado.titulo}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                {comunicado.subtitulo}
              </p>
            </div>

            <div className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
