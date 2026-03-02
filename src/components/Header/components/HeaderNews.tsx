"use client";

import { news } from "@/src/data/news";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ITEMS_VISIBLE = 3;
const INTERVAL_MS = 9000;

export default function HeaderNews() {
  const [startIndex, setStartIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setStartIndex((prev) => (prev + ITEMS_VISIBLE) % news.length);
        setVisible(true);
      }, 350);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const visibleNews = Array.from({ length: ITEMS_VISIBLE }, (_, i) => {
    const index = (startIndex + i) % news.length;
    return { ...news[index], key: `${startIndex}-${i}` };
  });

  return (
    <div className="w-full bg-slate-950/80 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-full mx-auto px-6 lg:px-32 relative">
        <AnimatePresence mode="wait">
          {visible && (
            <motion.div
              key={startIndex}
              className="flex items-stretch divide-x divide-white/[0.06]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {visibleNews.map((item, i) => (
                <motion.a
                  key={item.key}
                  href="#"
                  className="group flex items-center gap-3 flex-1 min-w-0 px-5 py-3 hover:bg-white/[0.03] transition-colors duration-200"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  {/* Acento vertical laranja */}
                  <div className="w-0.5 h-6 bg-orange-500/60 rounded-full shrink-0 group-hover:bg-orange-400 transition-colors duration-200" />

                  {/* Logo do clube */}
                  <div className="w-5 h-5 flex items-center justify-center shrink-0 opacity-85 group-hover:opacity-100 transition-opacity">
                    <img
                      src={item.logo}
                      alt={item.clube}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Texto */}
                  <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-100 truncate tracking-wide transition-colors duration-200">
                    {item.content}
                  </span>

                  {/* Seta */}
                  <svg
                    className="w-2.5 h-2.5 text-slate-600 group-hover:text-orange-400 shrink-0 ml-auto transition-all duration-200 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}