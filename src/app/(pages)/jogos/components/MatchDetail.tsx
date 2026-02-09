"use client";

interface MatchDetailProps {
  jogo: any;
  onClose: () => void;
}

export default function MatchDetail({ jogo, onClose }: MatchDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-11/12 max-w-xl">
        <button onClick={onClose} className="text-red-600 font-bold mb-4">Fechar</button>
        <h2 className="text-xl font-bold mb-2">{jogo.casaNome} VS {jogo.foraNome}</h2>
        <p>Jornada: {jogo.jornada}</p>
        <p>Estádio: {jogo.estadio}</p>
        <p>Cidade: {jogo.cidade}</p>
        <p>Data: {jogo.data} • Hora: {jogo.hora}</p>
        <p>Árbitro: {jogo.arbitro || "A definir"}</p>
        <p>Transmissão: {jogo.transmissao || "TPA 1"}</p>
        <p>Clima: {jogo.clima || "Ensolarado"}</p>
      </div>
    </div>
  );
}
