"use client";

import { jogos } from "@/src/data/jogos";
import { news } from "@/src/data/news";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AUTO_INTERVAL = 6000;

type SlideJogo = {
  type: "jogo";
  id: string | number;
  imagemFundo?: string;
  data: string;
  hora?: string;
  estado: "proximo" | "ao_vivo" | "resultado";
  placar?: string;
  clubeCasa: { nome: string; logo: string };
  clubeVisitante: { nome: string; logo: string };
  canal?: string;
};

type SlideNoticia = {
  type: "noticia";
  id: string | number;
  imagemFundo?: string;
  categoria?: string;
  titulo: string;
  clubeLogo?: string;
  clube?: string;
};

type Slide = SlideJogo | SlideNoticia;

function buildSlides(): Slide[] {
  const jogoSlides: Slide[] = (jogos ?? []).slice(0, 5).map((j: any) => ({
    type: "jogo",
    id: j.id ?? j._id ?? Math.random(),
    imagemFundo: j.imagemFundo ?? j.imagem ?? undefined,
    data: j.data ?? j.date ?? "",
    hora: j.hora ?? j.time ?? undefined,
    estado: j.estado ?? j.status ?? "proximo",
    placar: j.placar ?? j.score ?? undefined,
    clubeCasa: j.clubeCasa ?? j.home ?? { nome: "Casa", logo: "" },
    clubeVisitante: j.clubeVisitante ?? j.away ?? { nome: "Visitante", logo: "" },
    canal: j.canal ?? j.channel ?? undefined,
  }));

  const noticiaSlides: Slide[] = (news ?? []).slice(0, 3).map((n: any) => ({
    type: "noticia",
    id: n.id ?? Math.random(),
    imagemFundo: n.imagem ?? n.imagemFundo ?? undefined,
    categoria: n.categoria ?? "Notícia",
    titulo: n.content ?? n.titulo ?? "",
    clubeLogo: n.logo ?? undefined,
    clube: n.clube ?? undefined,
  }));

  return [...jogoSlides, ...noticiaSlides];
}

export default function HeaderSlider() {
  const slides = buildSlides();
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number, d: 1 | -1) => {
    setDir(d);
    setCurrent((next + total) % total);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
      setDir(1);
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  if (!total) return null;

  const slide = slides[current];
  const bottomCards = Array.from({ length: 3 }, (_, i) => slides[(current + 1 + i) % total]);

  return (
    <div className="w-full relative overflow-hidden bg-slate-950" style={{ minHeight: 320 }}>

      {/* Slide principal */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          className="relative w-full"
          style={{ minHeight: 550 }}
          initial={{ opacity: 0, x: dir * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -50 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Background */}
          <div className="absolute inset-0 overflow-hidden">
            {slide.imagemFundo ? (
              <img src={slide.imagemFundo} alt="" className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 px-6 lg:px-32 pt-7 pb-24">
            {slide.type === "jogo"
              ? <JogoContent slide={slide} />
              : <NoticiaContent slide={slide} />
            }
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Seta esquerda */}
      <button
        onClick={() => { go(current - 1, -1); resetTimer(); }}
        className="absolute left-2 lg:left-6 top-[44%] -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/70 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-slate-800 transition-all"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Seta direita */}
      <button
        onClick={() => { go(current + 1, 1); resetTimer(); }}
        className="absolute right-2 lg:right-6 top-[44%] -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/70 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-slate-800 transition-all"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-[62px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { go(i, i > current ? 1 : -1); resetTimer(); }}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-orange-500" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Cards inferiores */}
      
    </div>
  );
}

// ── Slide JOGO ─────────────────────────────────────────────────
function JogoContent({ slide }: { slide: SlideJogo }) {
  const isLive = slide.estado === "ao_vivo";
  const isResult = slide.estado === "resultado";

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <div className="flex items-center gap-2">
        {isLive ? (
          <span className="flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
          </span>
        ) : (
          <span className="text-slate-400 text-xs">{isResult ? "Resultado" : "Próximo Jogo"}</span>
        )}
        <span className="text-slate-600 text-xs">·</span>
        <span className="text-slate-300 text-xs">{slide.data}</span>
        {slide.hora && !isResult && (
          <>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-200 text-xs font-semibold">{slide.hora}</span>
          </>
        )}
      </div>

      <div className="flex items-center gap-6">
        <ClubePill nome={slide.clubeCasa.nome} logo={slide.clubeCasa.logo} />

        <div className="flex flex-col items-center gap-1">
          <div className="bg-slate-800/90 border border-white/10 rounded px-5 py-2.5">
            <span className="text-white text-2xl font-black tracking-wider">
              {isResult || isLive ? (slide.placar ?? "0 - 0") : (slide.hora ?? "–")}
            </span>
          </div>
          {slide.canal && <span className="text-slate-500 text-[10px]">{slide.canal}</span>}
        </div>

        <ClubePill nome={slide.clubeVisitante.nome} logo={slide.clubeVisitante.logo} />
      </div>

      <button className="self-start mt-1 px-4 py-2 border border-white/20 text-white text-xs font-semibold rounded-sm hover:bg-white/10 transition-colors tracking-wide">
        {isResult ? "Ver relatório" : "Ver antevisão"}
      </button>
    </div>
  );
}

function ClubePill({ nome, logo }: { nome: string; logo: string }) {
  return (
    <div className="flex flex-col items-center gap-2 w-20">
      <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 p-1.5 flex items-center justify-center">
        {logo ? <img src={logo} alt={nome} className="w-full h-full object-contain" /> : (
          <div className="w-full h-full rounded-full bg-slate-700" />
        )}
      </div>
      <span className="text-white text-[11px] font-semibold text-center leading-tight">{nome}</span>
    </div>
  );
}

// ── Slide NOTÍCIA ──────────────────────────────────────────────
function NoticiaContent({ slide }: { slide: SlideNoticia }) {
  return (
    <div className="flex flex-col gap-3 max-w-md">
      <div className="flex items-center gap-2">
        {slide.clubeLogo && (
          <img src={slide.clubeLogo} alt={slide.clube} className="w-4 h-4 object-contain" />
        )}
        <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest">
          {slide.categoria ?? "Notícia"}
        </span>
      </div>
      <h2 className="text-white text-xl font-bold leading-snug">{slide.titulo}</h2>
      <button className="self-start mt-1 px-4 py-2 border border-white/20 text-white text-xs font-semibold rounded-sm hover:bg-white/10 transition-colors tracking-wide">
        Ler mais
      </button>
    </div>
  );
}