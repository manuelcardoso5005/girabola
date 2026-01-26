export default function Legend() {
    return(
        <div className="mt-6 bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-slate-700 mb-4">Legenda</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg"></div>
              <div>
                <p className="font-medium text-slate-800">Zona de Classificação</p>
                <p className="text-sm text-slate-500">Top 2 posições</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg"></div>
              <div>
                <p className="font-medium text-slate-800">Zona de Rebaixamento</p>
                <p className="text-sm text-slate-500">Últimas posições</p>
              </div>
            </div>
          </div>
        </div>
    )
}