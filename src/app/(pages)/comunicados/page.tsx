"use client";


import LayoutPage from "@/src/components/Layout/LayoutPage";
import News from "./components/News";
import MainComunicados from "./components/MainComunicados";

import { motion } from "framer-motion";

export default function ComunicadosPage() {


  return (
    <LayoutPage
      title="Comunicados Oficiais"
      subtitle="Mantenha-se informado sobre todas as decisões e novidades"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <News />

        {/* Main Content */}
        <MainComunicados />

      </div>
    </LayoutPage>
  );
}
