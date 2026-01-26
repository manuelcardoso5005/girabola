"use client";

import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo e descrição */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl">Girabola</h3>
          <p className="text-slate-400 text-sm">
            Acompanhe todos os jogos, resultados e estatísticas do Girabola.
          </p>
        </div>

        {/* Links Úteis */}
        <div>
          <h4 className="text-white font-semibold mb-3">Links Úteis</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Vista Geral</Link>
            </li>
            <li>
              <Link href="/calendar" className="hover:text-white transition-colors">Calendário</Link>
            </li>
            <li>
              <Link href="/classificacao" className="hover:text-white transition-colors">Classificação</Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link>
            </li>
          </ul>
        </div>

        {/* Mais Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Mais</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/noticias" className="hover:text-white transition-colors">Notícias</Link>
            </li>
            <li>
              <Link href="/statistics" className="hover:text-white transition-colors">Estatísticas</Link>
            </li>
            <li>
              <Link href="/clubes" className="hover:text-white transition-colors">Clubes</Link>
            </li>
            <li>
              <Link href="/regulamento" className="hover:text-white transition-colors">Regulamento</Link>
            </li>
          </ul>
        </div>

        {/* Redes sociais e Contato */}
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              {[
                { href: "#", icon: Github },
                { href: "#", icon: Linkedin },
                { href: "#", icon: Instagram },
                { href: "#", icon: Twitter },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, color: "#fff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-slate-300 cursor-pointer"
                >
                  <Link href={item.href}>
                    <item.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contato</h4>
            <p className="text-sm text-slate-400">
              Email: <a href="mailto:contato@girabola.com" className="hover:text-white transition-colors">contato@girabola.com</a>
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Tel: <a href="tel:+244912345678" className="hover:text-white transition-colors">+244 912 345 678</a>
            </p>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="border-t border-slate-800 mt-8 py-4 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Girabola. Todos os direitos reservados.
      </div>
    </footer>
  );
}
