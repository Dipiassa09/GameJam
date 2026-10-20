import { evento, numeros } from '../data/evento'

function Sobre() {
  return (
    <section id="sobre" className="bg-fundo px-4 py-20 border-t border-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-texto mb-6">Sobre a GameJam</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {evento.sobre}
          </p>
        </div>
        
        {/* Painel de Números de Destaque */}
        <div className="grid gap-5 sm:grid-cols-3 text-center">
          {numeros.map((num) => (
            <div key={num.label} className="bg-card p-6 rounded-2xl border border-slate-800 shadow-sm">
              <span className="block text-4xl sm:text-5xl font-black text-destaque mb-3">{num.valor}</span>
              <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">{num.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sobre
