"use client";

import { useState, useEffect } from "react";
import { objecto } from "@/src/data/data";
import { motion, AnimatePresence } from "framer-motion";
import HeaderTop from "./components/HeaderTop";
import HeaderMain from "./components/HeaderMain";
import HeaderNews from "./components/HeaderNews";
import HeaderSlider from "./components/HeaderSlider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { competicao, epoca } = objecto;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700 shadow-lg">
      
      {/* HeaderTop desaparece ao fazer scroll */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <HeaderTop />
          </motion.div>
        )}
      </AnimatePresence>

      <HeaderMain
        liga={competicao[0]}
        epoca={epoca}
        links={[
          { href: "/", label: "Vista geral" },
          { href: "/jogos", label: "Jogos" },
          { href: "/calendario", label: "Calendário" },
          { href: "/classificacao", label: "Classificação" },
          { href: "/clubes", label: "Clubes" },
          { href: "/sobre", label: "Sobre" },
        ]}
      />
      
      {!scrolled && (<HeaderNews />)}
      <HeaderSlider />
    </header>
  );
}