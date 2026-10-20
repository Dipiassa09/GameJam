import { programacao } from '../data/evento'

function Programacao() {
  return (
    <section id="programacao" className="bg-card px-4 py-20 border-t border-slate-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-texto text-center mb-4">Cronograma Geral</h2>
        <p className="text-slate-400 text-center mb-12">Prepare sua mente. Serão 48 horas intensas de desenvolvimento:</p>
        
        <div className="space-y-4">
          {programacao.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4 p-5 bg-fundo rounded-xl border border-slate-800 items-start sm:items-center">
              <div className="flex gap-2 shrink-0">
                <span className="bg-slate-800 text-slate-300 font-bold px-2.5 py-1 rounded-md text-xs uppercase">
                  {item.dia}
                </span>
                <span className="bg-destaque/10 text-destaque font-bold px-2.5 py-1 rounded-md text-xs border border-destaque/20">
                  {item.horario}
                </span>
              </div>
              <p className="text-texto font-medium text-base sm:text-md">
                {item.atividade}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programacao
