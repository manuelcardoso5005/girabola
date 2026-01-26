import LayoutPage from "@/src/components/LayoutPage";

export default function Sobre() {
    return (
        <LayoutPage title="Sobre" subtitle="Informações sobre o Girabola e esta aplicação">
            <div className="prose prose-slate max-w-none text-slate-700">
                <h2>O que é o Girabola?</h2>
                <p>
                    O Girabola é a principal liga de futebol de Angola, reunindo os melhores clubes do país em uma competição anual emocionante. Fundado em 1979, o Girabola tem sido o palco de grandes rivalidades e talentos emergentes no futebol angolano.
                </p>

                <h2>História</h2>
                <p>
                    Desde a sua criação, o Girabola tem crescido em popularidade e prestígio. Clubes como Petro de Luanda, Primeiro de Agosto e Interclube têm dominado a liga ao longo dos anos, contribuindo para a rica história do futebol em Angola.
                </p>

                <h2>Esta Aplicação</h2>
                <p>
                    Esta aplicação foi desenvolvida para proporcionar aos torcedores uma experiência completa sobre o futebol angolano, oferecendo informações detalhadas sobre jogos, classificações e clubes participantes.
                </p>
            </div>
        </LayoutPage>
    )
}