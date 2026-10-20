import { evento } from '../data/evento'

function Cabecalho() {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-slate-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-bold text-xl text-primaria tracking-wider">{evento.nome}</span>
        <nav>
          <ul className="flex flex-wrap gap-4 sm:gap-6 font-medium text-texto justify-center">
            <li><a href="#inicio" className="hover:text-destaque transition-colors min-h-[44px] flex items-center">Início</a></li>
            <li><a href="#sobre" className="hover:text-destaque transition-colors min-h-[44px] flex items-center">Sobre</a></li>
            <li><a href="#programacao" className="hover:text-destaque transition-colors min-h-[44px] flex items-center">Programação</a></li>
            <li><a href="#mentores" className="hover:text-destaque transition-colors min-h-[44px] flex items-center">Mentores</a></li>
            <li><a href="#inscricao" className="hover:text-destaque transition-colors min-h-[44px] flex items-center">Inscrição</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
