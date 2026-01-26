import { objecto } from "@/src/data/data";
import LayoutPage from "@/src/components/LayoutPage";
import Legend from "./components/legend";
import TabelaClassificacao from "./components/tableCassification";

export default function Classificacao() {
  function getUltimosResultados(clubId: number) {
    const jogos = objecto.calendar
      .flatMap(r => r.jogos)
      .filter(j => j.resultado)
      .filter(j => j.casa === clubId || j.fora === clubId)
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);

    return jogos.map(jogo => {
      const [gCasa, gFora] = jogo.resultado!.split(" - ").map(Number);

      if (jogo.casa === clubId) {
        if (gCasa > gFora) return "W";
        if (gCasa < gFora) return "L";
        return "D";
      } else {
        if (gFora > gCasa) return "W";
        if (gFora < gCasa) return "L";
        return "D";
      }
    });
  }

  return (
    <LayoutPage title="Sobre" subtitle="Informações sobre o Girabola e esta aplicação">
      <TabelaClassificacao
        standings={objecto.standings}
        clubStats={objecto.clubStats}
        clubs={objecto.clubs}
        getUltimosResultados={getUltimosResultados}
      />
      <Legend />
    </LayoutPage>
  );
}
