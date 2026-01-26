import { temporada } from "@/src/data/data";

export default function Jogos() {
  // cria map de id -> nome do clube
  const clubeMap = Object.fromEntries(
    temporada.clubs.map((c) => [c.id, c.nome])
  );

  // transforma todas as rodadas em uma lista única de jogos
  const jogos = temporada.calendar.flatMap((rodada) =>
    rodada.jogos.map((jogo) => ({
      ...jogo,
      casaNome: typeof jogo.casa === "number" ? clubeMap[jogo.casa] : jogo.casa,
      foraNome: typeof jogo.fora === "number" ? clubeMap[jogo.fora] : jogo.fora,
    }))
  );

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Jogos do Girabola</h1>

      <div className="space-y-4">
        {jogos.map((jogo) => (
          <div
            key={jogo.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex-1 text-right">
              <span className="font-semibold text-lg">{jogo.casaNome}</span>
            </div>

            <div className="px-6 text-center">
              <span className="text-xl font-bold bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">
                {jogo.resultado || "-"}
              </span>
              <p className="text-sm text-gray-500 mt-1">{jogo.data || "Data não definida"}</p>
            </div>

            <div className="flex-1 text-left">
              <span className="font-semibold text-lg">{jogo.foraNome}</span>
            </div>
          </div>
        ))}
      </div>

      {jogos.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          Nenhum jogo disponível.
        </p>
      )}
    </div>
  );
}
