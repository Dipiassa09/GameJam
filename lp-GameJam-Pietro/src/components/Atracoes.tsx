import { mentores } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'

function Atracoes() {
  return (
    <section id="mentores" className="bg-fundo px-4 py-20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-texto text-center mb-4">Time de Mentores</h2>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Profissionais experientes estarão do seu lado durante toda a maratona para ajudar seu jogo a tomar forma.</p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentores.map((mentor) => (
            <CartaoAtracao 
              key={mentor.nome} 
              nome={mentor.nome} 
              genero={mentor.genero} 
              bio={mentor.bio} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Atracoes
