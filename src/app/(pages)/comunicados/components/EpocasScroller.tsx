"use client";

import { useRef } from "react";
import { epocas } from "@/src/data/comunicados";

export default function EpocasScroller({
  selectedEpocaId,
  setSelectedEpocaId,
}: {
  selectedEpocaId: number;
  setSelectedEpocaId: (id: number) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex items-center w-full">
      {/* Botão Esquerda */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center shrink-0"
      >
        ‹
      </button>

      {/* Lista Scrollável */}
      <div
        ref={scrollRef}
        data-hide-scrollbar
        className="flex gap-3 overflow-x-auto px-10 py-2 w-full scrollbar-hide"
        >
        {epocas.map((epoca) => (
          <button
            key={epoca.id}
            onClick={() => setSelectedEpocaId(epoca.id)}
            className={`px-5 py-2 whitespace-nowrap rounded-full text-sm font-medium transition ${
              selectedEpocaId === epoca.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {epoca.nome}
          </button>
        ))}
      </div>

      {/* Botão Direita */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center shrink-0"
      >
        ›
      </button>
    </div>
  );
}