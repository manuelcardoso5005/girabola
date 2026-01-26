"use client";
import { motion } from "framer-motion";

interface LayoutPageProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function LayoutPage({ title, subtitle, children }: LayoutPageProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-2">{title}</h1>
          {subtitle && <p className="text-slate-600">{subtitle}</p>}
        </motion.div>

        {/* Conteúdo animado */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=""
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
