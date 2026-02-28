import { epocas } from "@/src/data/comunicados";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ComunicadoDetail({ params }: PageProps) {
  const { id } = params;

  // Junta todos os comunicados de todas as épocas
  const allComunicados = epocas.flatMap((epoca) => epoca.comunicados);
const epocaDoComunicado = epocas.find((epoca) =>
  epoca.comunicados.some((c) => c.id === Number(id))
);
  const comunicado = allComunicados.find(
    (c) => c.id === Number(id)
  );

  if (!comunicado) {
    return <div className="p-6">Comunicado não encontrado.</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">
        {comunicado.titulo}
      </h1>
<p className="text-sm text-slate-500">
  {epocaDoComunicado?.nome}
</p>
    </div>
  );
}
