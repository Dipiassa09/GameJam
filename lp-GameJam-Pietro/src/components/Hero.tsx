import { evento } from '../data/evento'

function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-b from-card to-fundo text-white px-4 py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="bg-primaria/20 text-primaria font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-primaria/30">
          Inscrições Abertas
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mt-6 text-transparent bg-clip-text bg-gradient-to-r from-primaria to-destaque">
          {evento.nome}
        </h1>
        <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto font-light">
          {evento.slogan}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 text-sm font-semibold text-slate-300">
          <p className="bg-card px-5 py-3 rounded-xl border border-slate-800">📅 {evento.data}</p>
          <p className="bg-card px-5 py-3 rounded-xl border border-slate-800">📍 {evento.local}</p>
        </div>
        <a href="#inscricao" className="mt-12 inline-block bg-primaria hover:bg-green-600 text-fundo font-black px-10 py-4 rounded-xl shadow-lg shadow-primaria/20 transition-all transform hover:scale-105 min-h-[44px]">
          QUERO CRIAR UM JOGO
        </a>
      </div>
    </section>
  )
}

export default Hero
