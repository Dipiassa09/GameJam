import { evento } from '../data/evento'

function Rodape() {
  return (
    <footer className="bg-fundo text-slate-500 text-center py-8 text-sm px-4 border-t border-slate-900">
      <p>© {new Date().getFullYear()} {evento.nome}. Todos os direitos reservados.</p>
      <p className="mt-2 text-xs">Desenvolvido com React, Tailwind CSS v4 & Letras maiúsculas corrigidas!</p>
    </footer>
  )
}

export default Rodape