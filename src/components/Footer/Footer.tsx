"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { objecto } from "@/src/data/data";

export default function Footer() {
  const competicao = objecto.competicao[0];
  const currentYear = new Date().getFullYear();

  const linksSections = [
    {
      title: "Competição",
      links: [
        { href: "/", label: "Vista Geral" },
        { href: "/calendario", label: "Calendário" },
        { href: "/classificacao", label: "Classificação" },
        { href: "/clubes", label: "Clubes" },
      ],
    },
    {
      title: "Informações",
      links: [
        { href: "/estatisticas", label: "Estatísticas" },
        { href: "/artilheiros", label: "Artilheiros" },
        { href: "/comunicados", label: "Comunicados" },
        { href: "/regulamento", label: "Regulamento" },
      ],
    },
    {
      title: "Institucional",
      links: [
        { href: "/sobre", label: "Sobre o Girabola" },
        { href: "/historia", label: "História" },
        { href: "/contacto", label: "Contacto" },
      ],
    },
  ];

  const socialMedia = [
    { 
      href: "https://facebook.com/girabola", 
      Icon: FaFacebookF, 
      label: "Facebook",
      color: "hover:bg-blue-600" 
    },
    { 
      href: "https://youtube.com/girabola", 
      Icon: FaYoutube, 
      label: "YouTube",
      color: "hover:bg-red-600" 
    },
    { 
      href: "https://instagram.com/girabola", 
      Icon: FaInstagram, 
      label: "Instagram",
      color: "hover:bg-pink-600" 
    },
    { 
      href: "https://twitter.com/girabola", 
      Icon: FaTwitter, 
      label: "Twitter",
      color: "hover:bg-sky-500" 
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 mt-16 border-t-4 border-red-600">
      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={competicao.logotipo} 
                alt={competicao.nome}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-white font-bold text-2xl">{competicao.nome}</h3>
                <p className="text-sm text-slate-400">Época {objecto.epoca}</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A principal competição de futebol de Angola. Acompanhe todos os jogos, 
              resultados, estatísticas e notícias do campeonato nacional.
            </p>
            
            {/* Estatísticas Rápidas */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                <p className="text-xs text-slate-400">Clubes</p>
                <p className="text-xl font-bold text-white">{objecto.totalClubes}</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                <p className="text-xs text-slate-400">Jornada</p>
                <p className="text-xl font-bold text-white">{objecto.jornadaAtual}/{objecto.totalJornadas}</p>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {linksSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Redes Sociais e Contacto */}
        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-700">
          
          {/* Redes Sociais */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Siga-nos
            </h4>
            <div className="flex gap-3">
              {socialMedia.map(({ href, Icon, label, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 ${color} transition-colors duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:geral@girabola.ao" className="hover:text-white transition-colors">
                  geral@girabola.ao
                </a>
              </p>
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:+244222334455" className="hover:text-white transition-colors">
                  +244 222 334 455
                </a>
              </p>
              <p className="text-sm text-slate-400 flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>
                  {competicao.organizador}<br/>
                  Luanda, Angola
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {currentYear} {competicao.nome}. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <Link href="/privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}