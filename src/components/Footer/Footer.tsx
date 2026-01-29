"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl">Girabola</h3>
          <p className="text-slate-400 text-sm">
            Acompanhe todos os jogos, resultados e estatísticas do Girabola.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Links Úteis</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Vista Geral</Link></li>
            <li><Link href="/calendar" className="hover:text-white">Calendário</Link></li>
            <li><Link href="/classificacao" className="hover:text-white">Classificação</Link></li>
            <li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
          </ul>
        </div>

        {/* Mais */}
        <div>
          <h4 className="text-white font-semibold mb-3">Mais</h4>
          <ul className="space-y-2">
            <li><Link href="/noticias" className="hover:text-white">Notícias</Link></li>
            <li><Link href="/clubes" className="hover:text-white">Clubes</Link></li>
            <li><Link href="/statistics" className="hover:text-white">Estatísticas</Link></li>
            <li><Link href="/clubes" className="hover:text-white">Clubes</Link></li>
            <li><Link href="/regulamento" className="hover:text-white">Regulamento</Link></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Redes Sociais</h4>
            <div className="flex gap-4">
              {[
                { href: "#", Icon: FaFacebookF },
                { href: "#", Icon: FaYoutube },
                { href: "#", Icon: FaInstagram },
              ].map(({ href, Icon }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-slate-300"
                >
                  <Link href={href}>
                    <Icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contacto</h4>
            <p className="text-sm text-slate-400">
              Email: <a href="mailto:contato@girabola.com" className="hover:text-white">contato@girabola.com</a>
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Tel: <a href="tel:+244912345678" className="hover:text-white">+244 912 345 678</a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-8 py-4 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Girabola. Todos os direitos reservados.
      </div>
    </footer>
  );
}
