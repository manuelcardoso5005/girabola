"use client";

import { useState } from "react";
import LayoutPage from "@/src/components/Layout/LayoutPage";
import { objecto } from "@/src/data/data";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular envio (aqui você integraria com backend/API)
    setTimeout(() => {
      setEnviado(true);
      setLoading(false);
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      });

      // Reset mensagem de sucesso após 5 segundos
      setTimeout(() => setEnviado(false), 5000);
    }, 1500);
  };

  const competicao = objecto.competicao[0];

  const assuntos = [
    "Informações Gerais",
    "Calendário de Jogos",
    "Regulamento",
    "Questões Disciplinares",
    "Arbitragem",
    "Comunicação Social/Imprensa",
    "Parcerias e Patrocínios",
    "Reclamações",
    "Sugestões",
    "Outro",
  ];

  const departamentos = [
    {
      titulo: "Secretaria Geral",
      icon: "📋",
      email: "geral@girabola.ao",
      telefone: "+244 222 334 455",
      horario: "Segunda a Sexta: 08:00 - 17:00",
      color: "bg-blue-500",
    },
    {
      titulo: "Departamento de Competições",
      icon: "🏆",
      email: "competicoes@girabola.ao",
      telefone: "+244 222 334 456",
      horario: "Segunda a Sexta: 08:00 - 17:00",
      color: "bg-green-500",
    },
    {
      titulo: "Comissão de Arbitragem",
      icon: "🎽",
      email: "arbitragem@girabola.ao",
      telefone: "+244 222 334 457",
      horario: "Segunda a Sexta: 08:00 - 17:00",
      color: "bg-yellow-500",
    },
    {
      titulo: "Conselho de Disciplina",
      icon: "⚖️",
      email: "disciplina@girabola.ao",
      telefone: "+244 222 334 458",
      horario: "Segunda a Sexta: 08:00 - 17:00",
      color: "bg-red-500",
    },
    {
      titulo: "Comunicação e Imprensa",
      icon: "📰",
      email: "imprensa@girabola.ao",
      telefone: "+244 222 334 459",
      horario: "Segunda a Sexta: 08:00 - 17:00",
      color: "bg-purple-500",
    },
    {
      titulo: "Parcerias e Patrocínios",
      icon: "🤝",
      email: "parcerias@girabola.ao",
      telefone: "+244 222 334 460",
      horario: "Segunda a Sexta: 08:00 - 17:00",
      color: "bg-indigo-500",
    },
  ];

  const redesSociais = [
    {
      nome: "Facebook",
      icon: "📘",
      url: "https://facebook.com/girabola",
      username: "@GirabolaOficial",
      color: "bg-blue-600",
    },
    {
      nome: "Instagram",
      icon: "📷",
      url: "https://instagram.com/girabola",
      username: "@girabola_oficial",
      color: "bg-pink-600",
    },
    {
      nome: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/girabola",
      username: "@GirabolaAO",
      color: "bg-sky-500",
    },
    {
      nome: "YouTube",
      icon: "📺",
      url: "https://youtube.com/girabola",
      username: "Girabola Oficial",
      color: "bg-red-600",
    },
  ];

  return (
    <LayoutPage
      title="Entre em Contacto"
      subtitle="Estamos à disposição para esclarecer as suas dúvidas"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Formulário de Contacto - 2 colunas */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Envie a sua Mensagem</h2>
                <p className="text-sm text-gray-600">Responderemos o mais breve possível</p>
              </div>
            </div>

            {enviado && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg animate-fadeIn">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-green-800">Mensagem enviada com sucesso!</p>
                    <p className="text-sm text-green-700">Entraremos em contacto em breve.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Digite o seu nome completo"
                />
              </div>

              {/* Email e Telefone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="+244 900 000 000"
                  />
                </div>
              </div>

              {/* Assunto */}
              <div>
                <label htmlFor="assunto" className="block text-sm font-semibold text-gray-700 mb-2">
                  Assunto *
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecione um assunto</option>
                  {assuntos.map((assunto, idx) => (
                    <option key={idx} value={assunto}>
                      {assunto}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                  placeholder="Escreva a sua mensagem aqui..."
                />
              </div>

              {/* Botão de Envio */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-lg font-bold text-white transition-all ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    A enviar...
                  </span>
                ) : (
                  "Enviar Mensagem"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Informações de Contacto - 1 coluna */}
        <div className="space-y-6">
          {/* Informação Principal */}
          <div className="bg-linear-to-br from-red-600 to-yellow-500 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={competicao.logotipo}
                alt={competicao.nome}
                className="w-16 h-16 object-contain bg-white rounded-lg p-2"
              />
              <div>
                <h3 className="font-bold text-xl">{competicao.nome}</h3>
                <p className="text-sm opacity-90">{competicao.organizador}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold">Sede</p>
                  <p className="text-sm opacity-90">
                    Rua Direita do Patriota<br />
                    Luanda, Angola
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-sm opacity-90">+244 222 334 455</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm opacity-90">geral@girabola.ao</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold">Horário</p>
                  <p className="text-sm opacity-90">Segunda a Sexta<br />08:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">📱</span>
              Siga-nos nas Redes Sociais
            </h3>
            <div className="space-y-3">
              {redesSociais.map((rede, idx) => (
                <a
                    key={idx}
                    href={rede.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 ${rede.color} text-white rounded-lg hover:opacity-90 transition-opacity`}
                >

                  <span className="text-2xl">{rede.icon}</span>
                  <div className="flex-1">redesSociais
                    <p className="font-semibold">{rede.nome}</p>
                    <p className="text-sm opacity-90">{rede.username}</p>
                  </div>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Perguntas Frequentes */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Precisa de Ajuda Rápida?</h4>
                <p className="text-sm text-blue-800 mb-3">
                  Consulte a nossa secção de perguntas frequentes para respostas imediatas às questões mais comuns.
                </p>
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Ver Perguntas Frequentes
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Departamentos */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-red-600 rounded-full"></span>
          Departamentos e Contactos Diretos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departamentos.map((dept, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className={`${dept.color} p-4 text-white`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{dept.icon}</span>
                  <h3 className="font-bold text-lg">{dept.titulo}</h3>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href={`mailto:${dept.email}`} className="text-gray-700 hover:text-red-600 transition-colors">
                    {dept.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href={`tel:${dept.telefone.replace(/\s/g, "")}`} className="text-gray-700 hover:text-red-600 transition-colors">
                    {dept.telefone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {dept.horario}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </LayoutPage>
  );
}